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


//TASK #2 ---------------------------------------------------//

//working without the highlighting

// var guestInputEl = document.querySelector('.guestTextBox') //input[type="text"]

// var guestListUl = document.querySelector('.guest-list')

// var addGuest = function(keyEvent){

// 	var guestInputEl = keyEvent.srcElement
// 		//console.log(guestInputEl) 

// 	if(keyEvent.keyCode === 13){
// 		var userInput = guestInputEl.value
// 			console.log(userInput)
// 		var newLi = document.createElement('li')
// 			console.log(newLi)

// 		newLi.textContent = userInput
// 			console.log(newLi.textContent)
// 		guestListUl.appendChild(newLi)
		
// 		guestInputEl.value = ''
// 	}

// }

// guestInputEl.addEventListener('keydown', addGuest)


//-------------------------------------

//hightlight trial 


var guestInputEl = document.querySelector('.guestTextBox') //input[type="text"]

var guestListUl = document.querySelector('.guest-list')

var addGuest = function(keyEvent){

	var guestInputEl = keyEvent.srcElement
		//console.log(guestInputEl) 

	if(keyEvent.keyCode === 13){
		var userInput = guestInputEl.value
			//console.log(userInput)
		var newLi = document.createElement('li')
			//console.log(newLi)

		newLi.textContent = userInput
			//console.log(newLi.textContent)

		newLi.classList.add("guest")	

		guestListUl.appendChild(newLi)
		
		guestInputEl.value = ''
	}

}

guestInputEl.addEventListener('keydown', addGuest)


//--------------------------------------------------------
// var​ lis = document.querySelectorAll('li.product');

// for (var i=0,len=lis.length;i<len;i++){
//     if (i%2 == 0){
//         lis[i].className = 'oddProduct';
//     }
// }​		

	// var highlightLi = document.getElementsByTagName('.guest-List Li')

	// for(var i=0; i<.guestList.length; i++  ){
	//		if(.guest:nth-child 
	//}

//TASK #2 end-------------------------------------------------//


//TASK #3 ---------------------------------------------------//

var guestInput = document.querySelector('.guestInputBonus')

var guestBonusUl = document.querySelector('.guest-ListBonus')

var addBonusGuest = function(keyEvent){

	var bonusGuestEl = keyEvent.srcElement
		 

	if(keyEvent.keyCode === 13){
		var guestInputBonus = bonusGuestEl.value
			
		var newBonusLi = document.createElement('li')

		newBonusLi.textContent = guestInputBonus
			
		guestBonusUl.appendChild(newLi)
		
		guestBonusUl.value = ''
	}

}

bonusGuestEl.addEventListener('keydown', addBonusGuest)

