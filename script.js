var userInput = document.querySelector("#input");
var btn = document.querySelector("#click");
var text = document.querySelector("p");

btn.addEventListener("click",ranChar);

function ranChar(){
    var result = userInput.value;
    var index =Math.floor(Math.random()*(result.length));
    console.log(index);
    text.innerText = "Random character is:" + result.charAt(index);

    


}
