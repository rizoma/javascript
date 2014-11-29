window.App = {};

App.init = function(){
  $("#entrada").submit(App.addTask);
}

App.addTask = function(event){
  event.preventDefault();
  var input = $("#entrada input[type=text]")
  var content = input.val();
  var task = new App.Task(content);
  $("#todo-list").append(task.render());
  input.val("");
}

App.Task = function(content){
  this.content = content;
}

App.Task.prototype.render = function(){
  var html = ich.task(this);
  this.element = html;
  //por qué usar proxy: http://stackoverflow.com/a/10766640/365947
  this.element.find("input").on('change', $.proxy(this.toggle, this));
  this.element.find("button").on('click', $.proxy(this.destroy, this));
  return html;
}

App.Task.prototype.toggle = function(){
  var checkbox = this.element.find("input");
  if(checkbox.is(":checked")){
    this.element.find("label").addClass("complete");
  }else{
    this.element.find("label").removeClass("complete");
  }
}

App.Task.prototype.destroy = function(){
  if(window.confirm("Remover tarea?"))
    this.element.remove();
}
