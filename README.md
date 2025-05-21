# Prueba Técnica - Tienda de Juegos Angular

## Descripción

    Prueba tecnica para Tecalis, desarrollada en Angular. Permite visualizar un listado de tiendas de videojuegos, ver el detalle de cada tienda, explorar los juegos asociados y   consultar la información de cada juego mediante un modal interactivo.

## Características

    - Listado de tiendas con cards personalizadas.
    - Vista de detalle de tienda, con carrusel de juegos y descripción.
    - Modal de detalle de juego, con rating visual y galería de imágenes.
    - Diseño responsive y visualmente atractivo (plantilla BLK/Bootstrap).
    - Navegación intuitiva y botón de volver atrás.
    - Código limpio, reutilizable y modular.

## Instalación

    1.Clona el repositorio: 
        git clone https://github.com/Sullivan1307/PruebaTecalis.git
        cd blk-design-system-angular-master
    2.Instala las dependencias: 
        npm i
    3.Ejecuta la aplicación: 
        npm start

    La aplicación estará disponible en el puerto 4200 (http://localhost:4200).

## Uso

    - Página principal: Muestra el listado de tiendas.
    - Detalle de tienda: Haz clic en una tienda para ver sus detalles y juegos.
    - Detalle de juego: Haz clic en la imagen de un juego para abrir el modal con información ampliada.

## Notas técnicas

    - Angular: v11.2.14
    - Bootstrap y plantilla BLK para el diseño.
    - ngx-bootstrap para modales y carruseles.
    - Servicios implementados para obtener datos de tiendas y juegos.
    - Código organizado en componentes y servicios siguiendo buenas prácticas.

## Problemas

    - Un pequeño atraso en tiempo por problemas de compatibilidad de versiones

## Mejoras y comentarios

    - El código está preparado para añadir paginación y filtros en el listado de tiendas.
    - El sistema de ratings puede ampliarse para mostrar estadísticas más detalladas.
    - Si tuviera más tiempo, añadiría tests unitarios y e2e, y mejoraría la accesibilidad.