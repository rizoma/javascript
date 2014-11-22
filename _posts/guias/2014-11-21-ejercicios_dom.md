---
categories: [guias]
title: "(nivel 3) Ejercicios: HTML/DOM"
layout: page
---

## Preámbulo

Para resolver estos ejercicios, lo más simple es usar [jsBin](http://jsbin.com/?html,js,console,output); pero también puede guardar los archivos en su computadora y abrirlos en un navegador. Una alternativa a jsBin es [jsFiddle](http://jsfiddle.net/). Para una interfaz más simple, puede usar [thimble](https://thimble.webmaker.org/).

Los ejercicios requieren javascript; las soluciones arriba (a excepción de thimble) separan el HTML del Javascript, pero en la vida real el javascript tiene que ser incluido de alguna manera en la página que será afectada por él.

Es posible incluir javascript directamente dentro de un tag `script`:

{% highlight html %}
<!doctype html>
<html>
  <head>                                                                                 
      <title>Demo de Formularios</title>                                                 
  </head>
  <body>
    <form action="">                                                                     
      <label for="GET-nombre">Nombre:</label>                                            
      <input id="GET-nombre" type="text" name="name">                                    
      <input type="submit" value="Save"> 
    </form>
    <p id="result"></p>
    <script>                                                                             
      var form = document.querySelector("form");                                         
      form.addEventListener("submit", function(event) {                                  
        event.preventDefault();
        var r = document.getElementById("result");                                       
        var n = document.getElementById("GET-nombre");                                   
        r.textContent = n.value;
      });
    </script>                                                                            
  </body>
</html>
{% endhighlight %}

O apuntar a un script externo mediante el atributo `src` (ver [ejemplo](/codigo/ejemplo_script.html))

{% highlight html %}
<!doctype html>
<html>
  <head>
     <title>Demo de Formularios</title>
     <script type="text/javascript" src="formulario.js"></script>
  </head>
  <body>
    <form action="">                                                                     
      <label for="GET-nombre">Nombre:</label>                                            
      <input id="GET-nombre" type="text" name="name">                                    
      <input type="submit" value="Save"> 
    </form>
    <p id="result"></p>
    <script>
      document.addEventListener("DOMContentLoaded", function(){
         activarFormulario();
      });
    </script>
  </body>
</html>
{% endhighlight %}
