//"singleton"
window.Calculator = {}

Calculator.stack = [];

Calculator.helpers = {
  toArray: function(enumerable){
    return Array.prototype.slice.apply(enumerable);         
  },
  isNumber: function(val){
    return !isNaN(val);          
  }
};

Calculator.prepare = function(){
  this.prepareNumbers();
  this.prepareOperations();
}

Calculator.prepareNumbers = function(){
  $(".number").on('click', Calculator.handleNumber);
}

Calculator.handleNumber = function(event){
  var intValue = Number(event.target.getAttribute("data-value"));
  if(!Calculator.helpers.isNumber(Calculator.stack[0])){
    Calculator.stack.unshift(intValue);
    Calculator.setDisplay(intValue);
  }
}

Calculator.setDisplay = function(value, updateAccumulator){
  updateAccumulator = updateAccumulator || true;
  $("#display").val(value);
  if(updateAccumulator)
    $("#accumulator").text(this.stackString());
}

Calculator.prepareOperations = function(){
  $(".operation").on('click', Calculator.handleOperation);
}

Calculator.handleOperation= function(event){
  var operation = event.target.getAttribute("data-value")
  //solo deja aplicar la operación si lo último que se aplicó
  //fue un número
  if(operation == "=" && Calculator.helpers.isNumber(Calculator.stack[0]))
    Calculator.operate();
  else if(Calculator.helpers.isNumber(Calculator.stack[0]))
    Calculator.stack.unshift(operation);
}

Calculator.operate = function(){
  var result = eval(this.stackString());
  this.setDisplay(result, false);
}

Calculator.stackString = function(){
  return this.stack.join("").split("").reverse().join("");
}
