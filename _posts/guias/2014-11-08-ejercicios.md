---
categories: [guias]
title: (nivel 2) Ejercicios
layout: page
---

## Preámbulo

Para resolver estos ejercicios, sería conveniente tener dónde escribir y ejecutar el código. Puede usar la consola de [eloquent javascript](http://eloquentjavascript.net/code/#1) o [Repl.it](http://repl.it/languages/JavaScript/).

Si necesita pedir datos al usuario, puede usar la función [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt), por ejemplo `window.prompt("Escriba su nombre:");` mostraría una ventana de diálogo que pediría el nombre al usuario, retornará lo que el usuario introduzca, y se puede guardar en una variable.

En los dos entornos antes listados puede usar la función [console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console.log) para imprimir a pantalla. También puede usar cuadros de alerta con [alert](https://developer.mozilla.org/en-US/docs/Web/API/window.alert), aunque suelen ser molestos.

Estos ejercicios no necesitan ser entregados. Pero si necesita compartirlos con el grupo o el facilitador, utilice el mismo [repl.it](http://repl.it/languages/JavaScript/) (puede compartir código usando el botón de "save" en la esquina superior derecha) [gists](https://gist.github.com/), [jsFiddles](http://jsfiddle.net/) o [js bin](http://jsbin.com/xadekoraka/1/edit?js,output).

## Ejercicios

Intente resolver los ejercicios individualmente, habrá tiempo para discutirlos en grupo

### 1. Calcular edades

Escriba un programa que reciba el año actual y el año de nacimiento del usuario, e imprima su edad. (bono: en lugar de recibir el año actual, encuentre una forma de obtenerlo de la fecha actual de la computadora, con javascript). 

### 2. Convertidor de temperaturas

Dada una temperatura y el tipo de grados en el que está (celsius o fahrenheit), conviértala al otro tipo.

### 3. Detector de vocales

Escriba una función que reciba un caracter y retorne verdadero si es una vocal.

### 4. Traductor

Elija una frase en español. Tradúzcala manualmente a tres idiomas. Escriba una función que dado un código de idioma (por ejemplo "es", "en", "fr") devuelva la frase en ese idioma.

### 5. Pluralizador

Escriba una función que dado un sustantivo y un número, devuelva una frase con el sustantivo en plural, si es necesario (por ejemplo "0 gatos", "1 perro", "42 extraterrestres").

### 6. Detector de pares

Escriba un programa que vaya de 1 a 20. Imprima si el número es par o impar (ejemplo "2 es par").

### 7. Fizz Buzz

Escriba un programa que imprima los números entre 1 y 100. Pero si el número es múltiplo de 3, imprima "Fizz", si es múltiplo de 5, imprima "Buzz", si el número es múltiplo de 3 y 5 a la vez, imprima "FizzBuzz".

### 8. Suma/producto

Escriba una función que tome un arreglo y retorne la suma de sus elementos. Lo mismo para multiplicación.

### 9. Palabras

* Escriba una función que invierta una palabra dada.
* Escriba una función que tome un arreglo de palabras y encuentre la más larga.
* Escriba una función que tome un arreglo de palabras y un número y devuelva un arreglo de palabras que sean más cortas en longitud que el número.

### 10. Libros/películas

Decida cómo representar un libro o película usando objetos y guárdelos en una lista. Haga un programa que imprima una versión "humana" de su lista (ejemplo "Libro "La Caverna" del autor "José Saramago", publicado en el año 2000; con un rating de 5 estrellas").

### 11. Diccionario

Escriba un "diccionario" breve inglés-español usando objetos (e.g. `{libros: "books", mesa: "table", en: "on", la: "la"}`) y escriba una función que tome frases que utilicen la palabras en un idioma y traduzcan al otro (e.g. `traducir("los libros en la mesa")` retornaría `"the books on the table"`).

## 12. Frecuencias

Escriba una función que tome una frase e imprima un "histograma de frecuencias" (cuenta las ocurrencias de cada letra o símbolo y las imprime con astericos, por ejemplo, para la palabra "abad", el histograma sería el siguiente):

	a: **
	b: *
	d: *

### 13. Aleatorios

Escriba una función que retorne un número aleatorio dado un rango (pista, [la documentación de mozilla sobre Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random))
Escriba otra función que retorne una lista con n números aleatorios en un rango.

### 14. Usando aleatorios

* Escriba una función que genere un arreglo de cinco números aleatorios y elija el mayor y menor.
* Escriba una función que elija un número aleatorio y luego sume los dígitos que lo conforman. Si el número resultante tiene más de un dígito, vuelva a sumar sus componentes. Continúe hasta que solo tenga un dígito


### [Ejercicios extra (avanzados)](https://github.com/progra4-2010-4/quizzgen/blob/master/seeds/lang.markdown)

## Más práctica

* [Codecademy (en inglés)](http://www.codecademy.com/en/tracks/javascript)
* [Eloquent Javascript (en inglés)](http://eloquentjavascript.net/)

## Referencias

* [Javascript teaching materials](http://www.teaching-materials.org/javascript/)
* [Ten javascript exercises](http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html), [soluciones](http://jsfiddle.net/lisafrench/CmHH8/)
* [Javascript exercises](http://ynonperek.com/javascript-exer.html)
