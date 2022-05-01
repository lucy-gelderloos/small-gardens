function chooseSeason() {
    const seasonList = ["spring","summer","fall","autumn","winter"]
    const element = document.getElementById("season"); 
    var favSeason = prompt("What's your favorite season?").toLowerCase();
        
        while (!seasonList.includes(favSeason)) {
            var favSeason = prompt("Sorry, I don't know that one! Please enter spring, summer, fall, or winter.").toLowerCase();
        }
       
        switch(favSeason) {
            case "winter":{
                element.classList.remove("spring","summer","fall");
                element.classList.add("winter");
                break;
            }
            case "spring":{
                element.classList.remove("summer","fall","winter");
                element.classList.add("spring");
                break;
            }
            case "summer":{
                element.classList.remove("spring","fall","winter");
                element.classList.add("summer");
                break;
            }
            case "fall":{
                element.classList.remove("spring","summer","winter");
                element.classList.add("fall");
                break;
            }
            case "autumn":{
                element.classList.remove("spring","summer","winter");
                element.classList.add("fall");
                break;
            }
            default:{
                element.classList.remove("spring","fall","winter");
                element.classList.add("summer");
        }
    }
}

function sunOrMoon() {
    const date = new Date();
    const hour = date.getHours();
    if (hour > 6 && hour < 18) {
        document.getElementById("sunOrMoon").src="sun.png";
    } else {
        document.getElementById("sunOrMoon").src="moon.png";
    }
}

function changeSeason() {
    const refreshButton = document.getElementById("changeSeason");
    const refreshPage = () => {
        if (confirm("This will refresh the page.") == true) {
            location.reload();
        }
    }
    refreshButton.addEventListener('click', refreshPage)
}

function gardenPlanGame() {
    var section = document.getElementById("gardenPlan");
    
    const gameButton = document.getElementById("gardenPlanGame");
    const playGame = () => {

        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }

        var bulbs = prompt("You have ten pots in your garden. How many bulbs would you like to plant this year?");

        while(isNaN(bulbs) || 1 > bulbs || 10 < bulbs) {
            var bulbs = prompt("Please enter a number between 1 and 10.");
        }
        
        var squirrels = Math.floor(Math.random() * bulbs);
        var survivors = bulbs - squirrels;


        for(let i=0; i<squirrels; i++) {
            let squirrelPic = document.createElement("img");
            squirrelPic.src = "squirrel2.png";
            section.appendChild(squirrelPic);
        }

        for( let j=0; j<survivors; j++) {
            let flowerPot = document.createElement("img");
            flowerPot.src = "flowerPot.png";
            section.appendChild(flowerPot);
        }
                
        if(survivors == 0) {
            alert("Oh no! The squirrels got them all!");
        }
        else if(squirrels == 0) {
            alert("Hooray! They all survived the squirrels!");
        }
        else {
            alert("Oh no! The squirrels ate " + squirrels + " of your bulbs!");
        }

    }
    gameButton.addEventListener('click',playGame)
}


/*Game
prompt: you have ten pots in your garden. how many do you want to plant bulbs in?
input (bulbs):
  0 - "are you sure?"
  1-10 - generate a random number between 0 and bulbs
  display that many squirrels and bulbs minus that number of bulbs
  if squirrels = 0, "congrats! all your bulbs survived!"
  if squirrels = bulbs, "oh no! squirrels got them all!"
  else 

*/


//prompt https://www.w3schools.com/jsref/met_win_prompt.asp
//change class of html element https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
//how to change elements based on an ancestor's class https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator
//random number generator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//insert image https://moonbooks.org/Articles/How-to-add-an-image-in-a-HTML-page-using-javascript-/
