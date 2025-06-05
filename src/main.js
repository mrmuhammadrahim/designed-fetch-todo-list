import "./styles/main.css"
import "./styles/todo.css"
import "./styles/button.css"
import { getTodo } from "./app/buildTodo"
import * as CONFIG from "./app/config"
// import { API, APP } from "./app/config"
// import CONFIG2 from "./app/config"

main()

function main() {

	fetch( CONFIG.API.todos )
	.then( response => response.json() )
	.then( getTodo )
	.catch( onError )
}

function onError( error ) {

	console.log( error )
}
