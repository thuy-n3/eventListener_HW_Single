// GO!

//TASK #1 -------------------------------------------------//

var hidingNavButton = document.querySelector(".navButton")

// var alertMeFunction = function(){
// 	alert("Yeah its works!")
// } 

//navButton.addEventListener('click', alertMeFunction)

var navMenuBox = document.querySelector(".nav-menu")
// div.navMenu.style.top = "0px"
// div.navMenu.style.center = "48px"

var navMenuState = {
	showing: true, 
}

var navMenuToggle = function (){
	if(navMenuState.showing){
		navMenuBox.style.opacity = 0
		navMenuState.showing = false 
		hidingNavButton.textContent = "Show Nav"
	     //console.log(hidingNavButton.textContent)	
	}
	else{
		navMenuBox.style.opacity = 1
		navMenuState.showing = true
		hidingNavButton.textContent = "Hide Nav"
	}
}

hidingNavButton.addEventListener("click", navMenuToggle)


//TASK #1 end-------------------------------------------------//


//TASK #2 -------------------------------------------------//

var guestInputEl = document.querySelector('.guestTextBox') //input[type="text"]

var guestListUl = document.querySelector('.guest-list')

var addGuest = function(keyEvent){

	var guestInputEl = keyEvent.srcElement 

	if(keyEvent.keyCode === 13){
		var userInput = guestInputEl.value
		var newLi = document.createElement('li')
		newLi.textContent = userInput
		guestListUl.appendChild(newLi)
		guestInputEl.value = ''
	}

}

// var​ lis = document.querySelectorAll('li.product');

// for (var i=0,len=lis.length;i<len;i++){
//     if (i%2 == 0){
//         lis[i].className = 'oddProduct';
//     }
// }​		

	// var highlightLi = document.getElementsByTagName('.guest-List Li')

	// var liBox = []
	// for (var i=0; i<.length; i++){
	// 	if()
	// }

guestInputEl.addEventListener('keydown', addGuest)
















