# e-commerce Black And Store - Curso React JS - Coderhouse (Comisión 34805)

## Descripción general

---

Este proyecto es el resultado de aplicar los aprendido durante el curso de React JS en Coderhouse (comisión 34805).

**OBJETIVO**

Desarrollar una app de un e-commerce para poder vender productos de un rubro a elección.

**DESARROLLO**

El proyecto fue creado con **[Create React App](https://create-react-app.dev/)**. Instalación mediante NPM: `npx create-react-app my-app`.

Para la navegación dentro de la app se utilizó la librería **[React Router](https://reactrouter.com/en/main)**. Instalación mediante NPM: `npm install react-router-dom`.

Para la validación de datos del comprador se utilizó, por fuera de lo visto en el curso, una librería open source para formularios llamada **[Formik](https://formik.org/)**. Instalación mediante NPM: `npm install formik --save`.

Debido a que el presente curso no incluye desarrollo backend, se utilizó como base de datos **Firestore Database** de **[Firebase by Google](https://firebase.google.com/)**. Instalación mediante NPM: `npm install firebase`.

## Mapa del sitio

---

### Listado de componentes

#### Pages

- **ItemListContainer.** Página principal (home), donde se observará el listado de productos, con posibilidades de filtrado por categorías desde el NavBar.
- **ItemDetailContainer.** Página de detalle de producto, donde se observará el detalle del producto seleccionado en la página principal, con su nombre, fotos, detalle del producto, precio y la posibilidad de agregar el producto al carrito.
- **CartContainer.** Página de carrito, donde se observará el detalle del carrito, vacío o bien el listado de productos con sus cantidades, subtotales y el total de la compra.
- **CheckoutContainer.** Página de checkout, donde se observará un formulario de ingreso de datos para confirmar y finalizar la compra.

#### Components

- **NavBar.** Es el encabezado de todas las páginas, mediante el cual se pueden filtrar productos y navegar a través del sitio.
- **CartWidget.** Dentro del NavBar se encuentra el ícono para ingresar al carrito junto con la indicación del total de productos en el mismo.
- **ItemList.** Es el componente encargado de mostrar los productos seleccionados por la categoría.
- **Item.** Es el componente encargado de mostrar el resumen de un producto en la lista de productos.
- **ItemDetail.** Es el componente encargado de mostrar el detalle del producto seleccionado en la página principal.
- **ItemCount.** Es un componente que integra el detalle de cada producto, permitiendo agregar al carrito la cantidad deseada según sctock disponible.
- **CartItemList.** Es el componente encargado de listar los productos del carrito.
- **Loading.** Componente utilizado para mostrarse siempre que el sitio este realizando una operación asincrónica.
- **Footer.** Pie de página.

## Navegabilidad y flujos básicos de la aplicación

---

![Alt text](https://github.com/ignacioFernandezJeansalle/CoderReactJSBlackandstore/blob/main/blackandstore.gif)

## Demo (Deploy)

---

Se realizó el deploy de la aplicación a través de Vercel y el repositorio de GitHub.

[--> Ver demo <--](https://coder-react-js-blackandstore.vercel.app/)
