<template>
	<div class="card">
		{{ msg }}
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
		starter
	</p>
	<p>
		Learn more about IDE Support for Vue in the
		<a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank"
			>Vue Docs Scaling up Guide</a
		>.
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
const props = defineProps<{
	msg: string;
}>();

console.log('qwqww');

const count = ref<any>(0);

function numAdd(a: any, b: any) {
	return a + b;
}

watchEffect(() => {
	console.log(count.value);
});

console.log(numAdd(1, 2));

const obj = {
	a: 2
};
</script>

<style scoped>
.read-the-docs {
	color: #888;
}

.test {
	border: 1px solid #ccc;
}
</style>
