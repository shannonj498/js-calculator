let input = "";
let evaluate = false;
let number = "";
let inputWindow = $(".input-text");
let isOperator = false;

function testLength(num){
if (num.length > 11) {
  number = "";
  $(".input-text").text(". . . Error");
};

};

// Click function for nums 1-9
$(".numbers > span").click(function() {
  // Logic to remove numbers after input has been evaluated
  if (evaluate === true) {
      $(".input-text").text("");
      evaluate = false;
    }
  number += $(this).text();
  inputWindow.text(number);
  testLength(number);
  isOperator = false;
})

// Click function for bottom row - 0 and .
$("#zero").click(function() {
  number += $(this).text();
  inputWindow.text(number);
  testLength(number)
  isOperator = false;
})

// Click function for operators
$(".operator").click(function() {
  if (isOperator === false) {
  number += $(this).text();
  inputWindow.text(number);
  testLength(number)
  isOperator = true;
  } else if (isOperator === true) {
    return;
  }
})

// Click function for equal sign
$("#equals").click(function() {
    $(".input-text").text(eval(number));
    number = "";
    evaluate = true;
  })

//Click function to clear all
$("#clear").click(function() {
    $(".input-text").text("");
    number = "";
  });

$("#ce").click(function() {
  number = number.slice(0, -1);
  $(".input-text").text(number);
})
