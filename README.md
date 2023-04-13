### Detalle técnicos

👉 Creacion de aplicación de gifs en concepto de SPA (Single Page Application para evitar recargar página, es decir, utilizara el history del navegador sin resfrescar la página entonces actualizara el enlace, hara match y cambiara el componente que tiene que renderizar).

👉 Para mantener los niveles de complejidad en el consumo de una Api, se uso custom hook(para cambiar el estado interno del compoente) y context(que esta compuesto de un Provider y consumidor para conseguir un estado global en los diferentes compontes que lo utilizan), de manera que permita manejar 1) la respuesta del API, 2) el estado 'Loading' y 3) el estado de 'Error' en caso de producirse en el llamado de la misma.\

👉 Navegar entre diferentes rutas con libreria de react-router-dom. Utilización de params en componentes Detail y SearchResults.

👉 Se evito tener componentes muy grandes, sino mas bien dividirlo en varios componentes para hacerlo más granular.

👉 Concepto de HOC(high order component), en la cual se utilizo una función que devuelve un compoente al cual le inyectamos props, es decir, la función AppThemeProvider envuelve a su componente hijo para proveerles los colores que se utilizaran en toda la aplicción.\

👉 Guardamos en el localStorage 'lastKeyword' de la ultima busqueda realizada

👉 En componente Gif se utilizo el atributo lazy para cargar el img

👉 Se agregan media queries para adaptarse a mobiles y desktop

👉 Se creo el archivo 'jsconfig.json' para import amigables y limpios usando baseUrl

👉 Cargar Lazy la sección Tendencias para evitar el request

👉 Utilizacion de api 'Intersection Observer' => para detectar cuando un elememto esta en el viewport, la cual nos va a permitir hacer un Lazy-loading de esta manera evitamos que el compoente se cargue si no lo estamos viendo. Se utilizo concepto de 'polyfill' que es una pequeña biblioteca que le falta al navegador para un navegador que no tenga soporte de 'intersection-observer'

👉 Cuando evitamos una llamada a la red, entramos al concepto de 'Suspense' y React Lazy
que nos va a permitir no solo evitar la llamada a la red sino cargar todo el javascript, es decir, React.Lazy le dice a React que solo cargue una parte del javascript solo cuando sea visible o necesario, entonces cuando el componente de React este suspendido debe estar envuelto por el componente 'Suspense' y darle el fallback

👉 UseRef para recuperar una referencia de un elemento del Dom, es decir tenemos el valor de un elemento que no cambia entre rederizados.

👉 Utilizacion de debounce para hacer el inifinite scroll de Paginación

👉 react-helmet para el SEO

👉 useReducer en el hooks del searchForm

👉 Test de hooks con React Hooks testing library

👉 En el modal de login tiene un React.createPortal para crear el componente del modal y renderizarlo fuera de la estructura de los elementos html que tenemos en ese momento.

👉 Crar formulario de registración con formik

## Caracteristicas Funcionales

📍 Muestra una lista de gifs.(consume datos a traves de respuesta de una API)\

📍Debe mostrar 'detalles de cada gif' al hacer click en uno de la lista de gifs.

📍 Muestra 'Loading' mientras espera respuesta del servidor de los datos que consume del API.\

📍 Muestra mensaje de error en caso de producirse error en la red, al realizar llamado a la API\

📍 Buscar Tendencias de gifs más populares entre diferentes opciones de categorias para realizar busqueda de gifs(esta lista de opciones de datos viene de una Api).

📍 Buscar gifs especificos insertando una palabra en el campo de busqueda del formulario.

📍 Cuando realiza una busqueda de gifs, se genera paginación con Infinito Scroll al desplazarse hacia abajo con el mouse.

📍 Agregar favoritos gifs para un usuario. Si no esta logeado muesta una ventana modal para realizar dicho logeo
