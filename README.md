Instalación y ejecución del Proyecto:

- Este proyecto tiene las tablas de la base de datos en la carpeta api, lo que permite su carga userServerless. Es una herramienta que tiene Next.
Para poder ser utilizadas en la web, se le realizo un deploy en heroku, usando las rutas con el url de heroku.

- Para la instalacion local del proyecto. Clonarlo en su computadora y realizar el npm install.

- Posteriormente para su ejecuciòn utilizar el comando npm run dev y abrirlo en el localhost indicado en su explorador.



Cuestionario.

1) ¿Por qué no debería usar la librería JQuery, si estoy usando ReactJS?

Principalmente es porque JQuery (y otros plugins o componentes que dependan de JQuery) modifican el DOM directamente.
Por otro lado, React mantiene una versión ligera del DOM en memoria, que es donde se mantiene el estado de sus componentes y se realizan las modificaciones pertinentes, para eventualmente poder hacer un render de estos cambios en la página (vale mencionar, ésto en términos de rendimiento es bastante superior a modificar directamente el DOM).
Como JQuery modifica el DOM ya renderizado, React no es consciente de estos cambios, lo que eventualmente generará inconsistencia entre lo que se muestra en pantalla y lo que React tiene en memoria.

React modifica y cambia los estados a través de los hooks

2) ¿Porque usarias Hooks de las nuevas versiones de ReactJS, en lugar de class component?

Porque los hooks permiten modificar los states por medio de funciones, lo que simplifica lo que antes se realizaba por medio de class, donde tenias que utilizar el this. Así mismo se minifica el codigo.

3)¿Que es un archivo JSX?

JSX es una extensión de JavaScript creada por Facebook para el uso con su librería React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código a JavaScript.

4) ¿Que diferencia hay entre una function y una arrow function de Javascript?

Ademas de la diferencia en la sintaxis, en las funciones arrow, this no hace referencia a la instancia del objeto en el que se define, sino que hace referencia al ámbito al que this hace referencia externamente. Esto significa que las funciones arrow no son la mejor opción a la hora definir un método de un objeto, ya que habitualmente siempre querrás tener acceso al objeto dentro de la función. En cualquier otro caso, el uso de las funciones arrow es lo que se recomienda.

5) ¿Qué es Redux y cómo nos ayuda en los proyectos?

Redux es una librería JavaScript de código abierto para el manejo del estado de las aplicaciones.
Nos permite almacenar estados, modificarlos, y pasarlos y utilizarlos en distintos componentes, mediante actions y reducers; y utilizando en los componentes los hooks (useSelector, useDispatch) para obtener los estados o mandar a ejecutar determinadas funciones.

6) ¿Por qué usuarías pruebas unitarias en tu código?

Facilitan que el programador cambie el código para mejorar su estructura​, puesto que permiten hacer pruebas sobre los cambios y así asegurarse de que los nuevos cambios no han introducido defectos al resto del proyecto.


7) ¿Que nos permite hacer la siguiente declaración?

const anyFunction = (param_1) => (param_2) => param_1 + param_2

    const respuesta= anyFunction(2)(4);

Va a sumar dos parametros. Siguiendo el ejemplo de arriba, en la consola se va a imprimir 6
