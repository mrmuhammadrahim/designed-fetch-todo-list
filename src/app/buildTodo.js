import { getIcon } from "./icons"


let allData = []
export function getTodo(data) {
	allData = data
	buildTodo(allData)
}


let n = 20
let m = 0


export function buildTodo( todosArray ) {

	if ( !( todosArray instanceof Array ) ) {

		throw "Input data: Array ko'rinishida bo'lishi kerak"
	}

	// Logic

	const parentNode = document.querySelector( ".todo-list" )

	for ( let i = m; i < n; i++ ) {

		const todoItem = buildTodoItem( todosArray[i].title )

		parentNode.appendChild( todoItem )
		
	}

	if(n < todosArray.length){
		const button = document.createElement("button")
		button.textContent = "Load more"
		document.body.appendChild(button)
		button.addEventListener("click", addList)

		function addList() {
			m = n
			n += 20
			buildTodo(allData)
			button.remove()
		}
	}

	console.log(parentNode)
}



function buildTodoItem( title, completed ) {

	const label = document.createElement( "label" )
	const input = document.createElement( "input" )
	const svg = getIcon( "checkbox" )
	const fragment = document.createDocumentFragment()
	const div = document.createElement( "div" )

	label.classList.add( "todo" )
	label.classList.add( 'todo-extra' )
	input.setAttribute( "type", "checkbox" )
	input.classList.add( "todo__state" )
	div.classList.add( "todo__text" )

	div.textContent = title

	label.appendChild( input )
	label.appendChild( svg )
	label.appendChild( div )

	return label
}
