import fs from 'fs';
import type { HmrContext } from 'vite';

/**
 * @description: 生成路由组件文件
 * @return {*}
 */
const generateTemplateByRouterPlugin = () => {
	return {
		name: 'generate-template-by-router',
		handleHotUpdate({ file }: HmrContext) {
			if (file.indexOf('/router/') === -1) return;

			const code = fs.readFileSync(file, 'utf8');

			const str = code.replace(/\s/g, '');

			const regex = /component:\(\)=>import\('([^']+)'\)/g;

			const files: string[] = [];

			let match: RegExpExecArray | null;

			while ((match = regex.exec(str)) !== null) {
				files.push(match[1]);
			}

			if (!files.length) return;

			const header = file.split('/router')[0];

			const urls = files.map((item) => `${header}${item.split('@')[1]}`);

			for (let i = 0; i < urls.length; i++) {
				const path = urls[i];

				const isExist = fs.existsSync(path);
				if (isExist) continue;

				const fileName = path.split('/')[path.split('/').length - 1];

				const filePath = path.split(fileName)[0].slice(0, -1);

				const str = `<template>
    <div></div>
</template>

<script lang="ts" setup></script>
`;

				try {
					fs.mkdirSync(filePath, { recursive: true });

					fs.writeFileSync(path, str);
					console.log('生成文件成功');
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export { generateTemplateByRouterPlugin };
