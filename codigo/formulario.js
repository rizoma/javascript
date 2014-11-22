function activarFormulario(){   
      var form = document.querySelector("form");                                         
      form.addEventListener("submit", function(event) {                                  
        event.preventDefault();
        var r = document.getElementById("result");                                       
        var n = document.getElementById("GET-nombre");                                   
        r.textContent = n.value;
      });
}
