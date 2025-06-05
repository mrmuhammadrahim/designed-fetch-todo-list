export function getIcon( iconName = "checkbox" ) {

	const svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg" )

	svg.setAttribute( "xmlns", "http://www.w3.org/2000/svg" )
	svg.setAttribute( "viewBox", "0 0 200 25" )
	svg.classList.add( "todo__icon" )

	let iconsBody = ""

	if ( iconName === "checkbox" ) {

		iconsBody = `
			<use xlink:href="#todo__line" class="todo__line"></use>
			<use xlink:href="#todo__box" class="todo__box"></use>
			<use xlink:href="#todo__check" class="todo__check"></use>
			<use xlink:href="#todo__circle" class="todo__circle"></use>
		`
	}

	svg.innerHTML = iconsBody

	return svg
}
