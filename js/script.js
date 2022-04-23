
let openMenu = document.getElementById("menuBar-icon")
let menu = document.getElementById("menu-bar")
let closeMenu = document.getElementById("menu-bar-x")

openMenu.onclick = function(){
     menu.classList.toggle('menu_bar_on')
}

closeMenu.onclick = function(){
	menu.classList.toggle('menu_bar_on')
}



let search = document.querySelector('.search-icon')

let close = document.getElementById('nav-search-close')

let navSearch = document.getElementById("nav-search")

search.onclick = function open(){
	navSearch.classList.toggle("navSearch");
}

close.onclick = function close(){
	navSearch.classList.toggle("navSearch")
}





