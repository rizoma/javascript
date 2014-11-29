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

O apuntar a un script externo mediante el atributo `src` (ver [ejemplo](/javascript/codigo/ejemplo_script.html))

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

Por último, recuerde que puede ver el código fuente de una página mediante las [herramientas para desarrolladores de Chrome](https://developer.chrome.com/devtools); ([otros recursos](https://developer.mozilla.org/en-US/docs/Web/HTML))

## Ejercicios

Cada ejercicio tiene una "Demostración" simple; dada la naturaleza de JavaScript, la demostración también puede inspeccionarse para ver la solución; resista la tentación! Notará que algunas ejercicios utilizan [jQuery](http://learn.jquery.com/about-jquery/how-jquery-works/) y [ICanHaz](http://icanhazjs.com/) para simplificar la manipulación/creación de HTML, se le invita a leer sobre (y usar!) esas librerías, pero es recomendable tratar de resolver estos ejercicios con los métodos del DOM primero, a manera de práctica, y luego ver cómo simplificarlos con librerías externas.

### Entrada condicional

Cree un formulario que presente dos "selects": uno con nombres de escritores/directores, y otro que dependa del primero: dependiendo del escritor/director elegido, mostrará una lista de sus libros/películas.

[Demostración](/javascript/codigo/entrada_condicional.html)

### Diccionario

Cree una página en HTML que represente un diccionario (pista: utilice el elemento `dl` de html). Incluya un formulario que permita agregar definiciones al diccionario mediante JavaScript, muestre un error (y no agregue una entrada) si la palabra ya está definida (no importa si las mayúsculas o minúsculas son diferentes).

[Demostración](/javascript/codigo/diccionario.html)

### Calculadora

Cree una página que implemente una calculadora básica (pista: utilice el elemento `button`). Agregue las operaciones aritméticas básicas, puede usar dos campos diferentes para los operandos (reto: trate de que la calculadora use un solo campo de entrada, como las calculadoras normales).

[Demostración](/javascript/codigo/calculadora.html)

### Creador de tablas

Dado un arreglo de objetos con los mismos campos (puede simplemente crearlo o permitir al usuario entrar JSON dentro de una `textarea`), escriba JavaScript para tomar ese arregloy mostrarlo como una tabla de html (incluya encabezados).

Reto: agregue "filtros": un formulario que permita elegir entre los distintos campos con un select y, mediante un text input, permita al usuario escribir un valor, y modifique la tabla para que solo filas que tengan en la columna indicada el valor introducido sean mostradas.


[Demostración](/javascript/codigo/tablas.html)

### Lista de cosas que hacer

Cree un formulario que permita agregar "tareas". Las tareas deberán agregarse al DOM como texto acompañado de un checkbox y un botón: si el checkbox cambia, la tarea deberá marcarse de alguna forma como terminada si el checkbox está "checked", o marcarse como pendiente si el checkbox pasa de "checked" a no estarlo; si el botón recibe un click, la tarea deberá eliminarse.

[Demostración](/javascript/codigo/todo.html)
