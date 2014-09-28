---
categories: [guias]
title: Instalando git
layout: post
---

__NOTA__: cuando se haga referencia a una terminal, se deberá usar el programa `Terminal` si se está en linux o en OS X, y el programa `Git Bash` si se está en windows, __en lugar del "command prompt"__.

## 1. Instalando Git

### Git en windows

Lo más recomendable es utilizar [msysgit](http://msysgit.github.io/); la descarga es de aproximadamente 15 Mb y tiene un "wizard" de instalación. Si por alguna razón la descarga falla, se puede descargar [la versión oficial de Git para windows](http://git-scm.com/download/win); una guía detallada de cómo interactuar con ese instalador se puede encontrar [en github](https://help.github.com/articles/set-up-git#platform-windows).

Una vez descargado, se tendrá acceso a "Git Bash", una terminal emuladora de UNIX — lo cual facilitará la comunicación en la clase.

Si lo desea, también existe una [interfaz gráfica para windows creada por GitHub](https://windows.github.com/)

### Git en Linux

Si se tiene Linux, se puede simplemente utilizar el administrador de paquetes para instalarlo:

{% highlight bash %}
#para distribuciones basadas en fedora
$ yum install git-core
# para instalaciones basadas en debian/ubuntu
$ apt-get install git
{% endhighlight %}

### Git en OS X

Existen un par de opciones para Mac: utilizando macports o homebrew. Se recomienda utilizar [homebrew](http://brew.sh/) porque facilita instalaciones y las "recetas" se mantienen actualizadas. También existe un [instalador gráfico](http://sourceforge.net/projects/git-osx-installer/) y una [aplicación creada por GitHub](https://mac.github.com/)

{% highlight bash %}
#si se usa homebrew
$ brew install git
# si se usa macports
$ sudo port install git-core +svn +doc +bash_completion +gitweb
{% endhighlight %}

### Comprobando la instalación

En una terminal: `git —version` deberá imprimir un mensaje con la información de versión de git. Favor hacer saber al facilitador si ese no es el caso.

## 2. Configurando Git

Git es personalizable: algunas preferencias se pueden configurar de manera _global_ (que afecten a todos los proyectos de nuestro usuario), o _específica_, que afecten solo a un proyecto. En esta primera incursión, haremos cambios globales.

### Identidad

Cada acción que uno toma en Git es asociada a un usuario, uno puede configurar su "identidad" de manera global de la siguiente manera:

{% highlight bash %}
$ git config --global user.name "Juan Pérez"
$ git config --global user.email juan@example.com
{% endhighlight %}

### Color

Muchos comandos en git tienen colores en la salida, si se está en una terminal, para ayudar a interpretarlos más cómodamente. Esa opción se configura así:

{% highlight bash %}
$ git config --global color.ui true
{% endhighlight %}


### Comprobando la configuración

En una terminal: `git config —list`

## 3. Creando cuenta de GitHub

* Ir a [github.com]() y llenar el formulario de registro (Sign Up) con un nombre de usuario de preferencia personal, un correo electrónico válido, y una contraseña. 
* Elegir el plan gratis (Free), no optar por una organización, ir al siguiente paso
* Se debería ver la página principal de la cuenta.

## 4. Configurando SSH

### Qué es SSH?

Es un protocolo de transporte de datos que utiliza una estrategia de intercambio de llaves privadas-públicas. Se puede usar en Git para comunicarse con repositorios remotos sin tener que estar escribiendo contraseñas, dado que es un protocolo útil, vamos a invertir un poco de tiempo en aprender lo necesario de él para usarlo con Git.

Una versión en inglés, más comprensiva, de esta guía está disponible en [GitHub](https://help.github.com/articles/generating-ssh-keys)

### Creando un par de llaves

SSH tiene una llave privada que reside en la computadora local y una llave pública que se puede intercambiar con otras computadoras. Es necesario generar esas llaves una vez.

Generaremos las llaves utilizando el algoritmo de cifrado RSA (también se puede usar DSA).

{% highlight bash %}
$ ssh-keygen -t rsa -C "tu_correo@example.com"
{% endhighlight %}

(Cuando pregunte por una "passphrase", se puede dejar en blanco dándole a `Enter`). Aceptar la ubicación por defecto de la carpeta. 

Al comunicarse con otras computadoras, existe un programa llamado `ssh-agent`, el cual necesita conocer la llave privada para poder "firmar" mensajes; para que el agente la conozca:

{% highlight bash %}
$ ssh-add ~/.ssh/id_rsa
{% endhighlight %}

### Agregando llaves a la cuenta de github

Una vez que la llave está creada, deberemos decirle a github cuál es la llave pública de nuestra computadora para que acepte mensajes enviados desde ella.

Lo más sencillo es copiar la llave pública y pegarla en la interfaz de github:

{% highlight bash %}
$ cat ~/.ssh/id_rsa.pub
{% endhighlight %}

__Nótese la terminación `.pub` en el archivo anterior. Existe otro archivo que no tiene extensión, esa es la llave privada, no debe compartirse con nadie__. 

Una vez obtenida la llave, copiarla al portapapeles __evitando espacio en blanco al final__ y pegarla aquí en la opción "Add SSH Key": https://github.com/account/ssh

### Comprobando la conexión

{% highlight bash %}
$ ssh -T git@github.com
{% endhighlight %}

La siguiente alerta es perfectamente normal, solo escríbase `yes`:

```
The authenticity of host 'github.com (207.97.227.239)' can't be established.
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?
```

Si todo está bien, lo siguiente debería aparecer en la terminal (donde en lugar de `username` debería aparece el nombre de usuario que uno eligió al inicio de este proceso):

```
Hi username! You've successfully authenticated, but GitHub does not
# provide shell access.
```

Es posible que el firewall de la universidad no tenga el puerto para ssh (22) abierto. En ese caso podríamos tratar de accederlo mediante el puerto de https (443), siguiendo la [guía correspondiente en GitHub](https://help.github.com/articles/using-ssh-over-the-https-port).



## Referencias / otras guías

* [Pro Git: Instalando Git](http://git-scm.com/book/es/Empezando-Instalando-Git)
* [Pro Git: Configurando Git](http://git-scm.com/book/es/Empezando-Configurando-Git-por-primera-vez)
* [Pro Git: configuraciones avanzadas de Git](http://git-scm.com/book/es/Personalizando-Git-Configuraci%C3%B3n-de-Git)
* [GitHub: setting up git](https://help.github.com/articles/set-up-git)
* [GitHub: generating SSH keys](https://help.github.com/articles/generating-ssh-keys)
* [Git en Windows](http://guides.beanstalkapp.com/version-control/git-on-windows.html)
