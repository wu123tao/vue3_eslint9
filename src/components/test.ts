export interface Props {
	api: (data: any) => Promise<unknown>;
}

function add(a: number, b: number) {
	return a + b;
}

console.log(add);
