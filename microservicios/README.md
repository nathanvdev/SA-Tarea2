# Tarea 2 - Microservicios

Este proyecto consiste en una arquitectura de microservicios que implementa diferentes componentes de un sistema de comercio electrónico. Cada microservicio está diseñado para manejar una funcionalidad específica y se comunica con otros microservicios según sea necesario.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
tarea2-microservicios
├── src
│   ├── auth
│   │   ├── app.js                # Microservicio de autenticación
│   │   └── package.json          # Configuración del microservicio de autenticación
│   ├── profile
│   │   ├── app.js                # Microservicio de perfil
│   │   └── package.json          # Configuración del microservicio de perfil
│   ├── product-catalog
│   │   ├── app.js                # Microservicio de catálogo de productos
│   │   └── package.json          # Configuración del microservicio de catálogo de productos
│   ├── promotions-engine
│   │   ├── app.js                # Microservicio de motor de promociones
│   │   └── package.json          # Configuración del microservicio de motor de promociones
│   ├── shopping-cart
│   │   ├── app.js                # Microservicio de carrito de compras
│   │   └── package.json          # Configuración del microservicio de carrito de compras
│   ├── order-processor
│   │   ├── app.js                # Microservicio de procesamiento de pedidos
│   │   └── package.json          # Configuración del microservicio de procesamiento de pedidos
│   ├── payment-gateway
│   │   ├── app.js                # Microservicio de integración de pasarela de pago
│   │   └── package.json          # Configuración del microservicio de integración de pasarela de pago
│   ├── shipment-manager
│   │   ├── app.js                # Microservicio de gestión de envíos
│   │   └── package.json          # Configuración del microservicio de gestión de envíos
│   ├── returns-handler
│   │   ├── app.js                # Microservicio de gestión de devoluciones
│   │   └── package.json          # Configuración del microservicio de gestión de devoluciones
│   ├── feedback-collector
│   │   ├── app.js                # Microservicio de recopilación de comentarios
│   │   └── package.json          # Configuración del microservicio de recopilación de comentarios
│   └── analytics-dashboard
│       ├── app.js                # Microservicio de panel de análisis
│       └── package.json          # Configuración del microservicio de panel de análisis
└── README.md                     # Documentación general del proyecto
```

## Microservicios

1. **Auth**: Maneja la autenticación de usuarios.
2. **Profile**: Gestiona la información del perfil de usuario.
3. **Product Catalog**: Proporciona información sobre los productos disponibles.
4. **Promotions Engine**: Maneja las promociones y descuentos aplicables.
5. **Shopping Cart**: Permite a los usuarios gestionar su carrito de compras.
6. **Order Processor**: Procesa los pedidos realizados por los usuarios.
7. **Payment Gateway Integration**: Integra con pasarelas de pago para procesar transacciones.
8. **Shipment Manager**: Gestiona el envío de pedidos.
9. **Returns Handler**: Maneja las devoluciones de productos.
10. **Feedback Collector**: Recopila comentarios y valoraciones de los usuarios.
11. **Analytics Dashboard**: Proporciona análisis y reportes sobre el rendimiento del sistema.

## Instrucciones de Uso

Para iniciar cada microservicio, navega a la carpeta correspondiente y ejecuta el siguiente comando:

```
npm start
```

Asegúrate de tener instaladas las dependencias necesarias ejecutando:

```
npm install
```

Cada microservicio se ejecutará en su propio puerto, comenzando desde el puerto 3001 para el microservicio de autenticación y avanzando hasta el puerto 3011 para el panel de análisis.