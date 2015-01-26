window.onload = function (){

  var buttonNode = document.getElementsByClassName("button");
  var operatorScreen = document.getElementById("operator_display");
  var resultScreen = document.getElementById("result_display_value");

    for (var i = 0; i < buttonNode.length; i++) {
      if (buttonNode[i].innerHTML === "CLR"){

        buttonNode[i].addEventListener('click',function() {
          operatorScreen.innerHTML = null;
      })

      }else if (buttonNode[i].innerHTML === "ENT") {

        buttonNode[i].addEventListener('click',function() {
          resultScreen.innerHTML = operatorScreen.innerHTML
      })

      }else {
      buttonNode[i].addEventListener('click',function() {
        operatorScreen.innerHTML = operatorScreen.innerHTML + (this.innerHTML);

      })
    }

}
}
