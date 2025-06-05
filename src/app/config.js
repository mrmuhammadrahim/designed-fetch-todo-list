export const API = {
	todos: "https://jsonplaceholder.typicode.com/todos",
	version: 1,
}

export const APP = {
	theme: "light",
	version: 2,
}

export default {
	...API,
	...APP,
}
