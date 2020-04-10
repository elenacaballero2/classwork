
function calculate() {
  //let start = parseInt(document.getElementById("firstNumber").value); 
  var num1 = Number(document.getElementById("firstNum").value);
  var num2 = Number(document.getElementById("secondNum").value);
  var counter = Number(document.getElementById("step").value);
  
  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("step: " + counter);
  if (num1 == "" || num2 == "" || step == "" || isNaN(num1) || isNaN(num2) || isNaN(step)) {
    console.log("Please re-enter your numbers.");
    return; 

  }

document.getElementById("showResult").innerHTML = "Here are the even numbers between "+num1+" and "+num2+" by "+counter+" 's:";
  

  let ans = ""; 
 
  for (var x = num1; x <= num2; x= x + counter) {
    // to do: display only even numbers in this range and add them to results element in HTML
    console.log(x);
    if(x%2===0){
      ans = ans+"<br>"+ x; 
    }
  }
  document.getElementById("anss").innerHTML = ans; 

  console.log(ans); 
  
  // display results in HTML table
  // document.getElementById("results").style.display = "block";
  // // to do: add your code here to display the results...
}





