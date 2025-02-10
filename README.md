# movimientos_caja

Puedes visualizarlo da click [aqui](sistemacajachica.netlify.app).

Elaborar un sistema para controlar los movimientos de una caja chica. Debe registrar todos los movimientos del flujo de cajas.
**_Este proyecto se puede realizar de manera en la que puedas utizar una bd, firebase etc, sin embargo por el desarrollo y sin la especificación podemos darle solución al enunciado de una manera diferente._**

# Sistema de Control de Caja Chica

Este proyecto es un sistema web simple para controlar los movimientos de una caja chica, permitiendo ingresar ingresos y egresos, visualizar el saldo actual y descargar un reporte en formato CSV.

## Características

- **Registro de movimientos**: Permite agregar movimientos de ingresos y egresos con una descripción y monto.
- **Visualización de saldo**: El saldo se actualiza automáticamente al agregar un nuevo movimiento.
- **Eliminar movimientos**: Los movimientos pueden eliminarse de la lista.
- **Reporte en CSV**: Puedes descargar un reporte con todos los movimientos registrados en formato CSV.

## Tecnologías utilizadas

- **HTML**: Estructura básica de la página.
- **CSS**: Estilos para la interfaz.
- **JavaScript**: Funcionalidad para agregar, eliminar movimientos, calcular saldo y generar el reporte.
- **LocalStorage**: Almacena los movimientos de la caja chica en el navegador.

## Instrucciones de uso

1. Abre el archivo `index.html` en tu navegador.
2. Ingresa un monto, selecciona el tipo de movimiento (Ingreso o Egreso), agrega una descripción y haz clic en "Agregar Movimiento".
3. Los movimientos se mostrarán en la tabla con la fecha, descripción, tipo de movimiento y monto.
4. Puedes eliminar cualquier movimiento haciendo clic en el botón "Eliminar" correspondiente.
5. Haz clic en "Descargar Reporte" para generar un archivo CSV con todos los movimientos registrados.

## Archivos del proyecto

- `index.html`: Estructura de la página web.
- `style.css`: Estilos para la página web.
- `script.js`: Funcionalidad para manejar los movimientos y el reporte.

## Cómo contribuir

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b mi-nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agregada nueva característica'`).
4. Envía un pull request.

## Estructura

```
└── 📁movimientos_caja
    └── index.html
    └── LICENSE
    └── README.md
    └── script.js
    └── style.css
```

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
