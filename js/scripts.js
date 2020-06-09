function palindromeCheck(inputArray){
  for(let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] !== inputArray[inputArray.length - (1 + i)]) {
      return false;
    }
  }
  return true;
}

$(document).ready(function() {
  $("form#palindromeform").submit(function(event) {
  event.preventDefault();
    const userInput = $("#input").val();
    let inputArray = userInput.split('');
    const result = palindromeCheck(inputArray);
    console.log(result);


// check first index and last index to see if equal
// push into blank array
// if not equal? not palindrome
// if equal? palindrome

  });
});