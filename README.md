# Javascript-Stack
Stack application in javascript
# Proyecto de Pila en JavaScript

Este proyecto implementa una estructura de datos de pila (stack) en JavaScript. La pila permite realizar operaciones básicas como `push`, `pop`, `peek` y `isEmpty`.

## Estructura del Proyecto

- `Node.js`: Define la clase `Node` utilizada en la implementación de la pila.
- `Stack.js`: Define la clase `Stack` que implementa la estructura de datos de pila.
- `StackTest.js`: Contiene pruebas automatizadas para verificar el comportamiento de la pila.

## Requisitos

- [Node.js](https://nodejs.org/) (para ejecutar las pruebas en la consola).

## Instalación

1. Clona el repositorio:
    git clone https://github.com/AndMelox/Javascript-Stack
    cd Javascript-Stack

2. Asegúrate de tener Node.js instalado. Puedes verificarlo ejecutando:
    node -v

## Ejecución de Pruebas en Node.js

Para ejecutar las pruebas en la consola utilizando Node.js, sigue estos pasos:

1. Navega al directorio del proyecto.
2. Ejecuta el archivo de pruebas con este comando en la consola donde esta el proyecto:
    node StackTest.js
   
Esto ejecutará el script de prueba y mostrará los resultados en la consola. La salida esperada es la siguiente:
- Test: push and size
- Stack after pushing 10: 10
- Stack after pushing 20: 20 10
- Stack after pushing 5: 5 20 10
- Stack after pushing 100: 100 5 20 10
- Stack after pushing 1: 1 100 5 20 10
- Stack after pushing 50: 50 1 100 5 20 10
- Stack after pushing 200: 200 50 1 100 5 20 10
- Passed: size is 7
- Test: peek
- Passed: top element is 200
- Test: pop
- Stack after popping: 50 1 100 5 20 10
- Passed: popped 200
- Test: isEmpty
- Passed: stack is not empty
- Final stack contents: 50 1 100 5 20 10

## Ejecución de Pruebas en HTML

En la rama `Bryan_Sanchez`, las pruebas se ejecutan en un entorno HTML. Para ejecutar las pruebas en esta rama, sigue estos pasos:
puedes clonar este repositorio, pero de la rama `Bryan_Sanchez`, y probando abriendo el index y ejecutando el programa.