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
 //       location.reload();
    }
    refreshButton.addEventListener('click', refreshPage)
}





//prompt https://www.w3schools.com/jsref/met_win_prompt.asp
//change class of html element https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript
//how to change elements based on an ancestor's class https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator
//event listener for refresh button