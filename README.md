# API REST MongoDB + Mongoose

Proyecto backend desarrollado con **Node.js, Express y MongoDB (Atlas)** que implementa una API REST completa con dos colecciones relacionadas: **Providers** y **Products**.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Morgan
* Dotenv
* Render (deploy)

---

## 📁 Estructura del proyecto

```
src/
├── config/
│   └── db_mongo.js
├── controllers/
│   ├── providers.controller.js
│   └── products.controller.js
├── models/
│   ├── providers.js
│   └── products.js
├── routes/
│   ├── providers.routes.js
│   └── products.routes.js
└── app.js
│
├── package-lock.json
├── package.json
```

---

## 🗄️ Base de datos

La base de datos está alojada en **MongoDB Atlas**.

Se utilizan dos colecciones:

### 🏢 Providers

```json
{
  "company_name": "Nike",
  "CIF": "B12345678",
  "address": "Madrid",
  "url_web": "https://nike.com"
}
```

---

### 📦 Products

```json
{
  "title": "Zapatillas Air",
  "price": 120,
  "description": "Zapatillas deportivas",
  "provider": "ID_DEL_PROVIDER"
}
```

---

## 🔗 Relación entre colecciones

* Un **Provider** puede tener muchos **Products**
* Se utiliza referencia con ObjectId
* Se usa `populate()` para obtener datos del provider en products

---

## 📡 Endpoints de la API

### 🏢 Providers

* **GET** `/api/providers` → Obtener todos los providers
* **GET** `/api/providers/:id` → Obtener provider por ID
* **POST** `/api/providers` → Crear provider
* **PUT** `/api/providers/:id` → Actualizar provider
* **DELETE** `/api/providers/:id` → Eliminar provider

---

### 📦 Products

* **GET** `/api/products` → Obtener productos (con populate)
* **GET** `/api/products/:id` → Obtener producto por ID
* **POST** `/api/products` → Crear producto
* **PUT** `/api/products/:id` → Actualizar producto
* **DELETE** `/api/products/:id` → Eliminar producto

---

## ⚙️ Variables de entorno

Crear archivo `.env`:

```
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/project_mongoose
PORT=3000
```

---

## ▶️ Ejecución en local

```bash
npm install
npm start
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🌐 Deploy

La API está desplegada en Render:

👉 https://api-rest-mongodb-mongoose-dbg3.onrender.com

---

## 🧪 Pruebas

Se han realizado pruebas con Postman:

* Creación de providers
* Creación de productos
* Relación entre colecciones
* Consultas con populate

---

## 📌 Notas

* MongoDB crea automáticamente la base de datos y colecciones
* Se utiliza arquitectura modular (routes, controllers, models)
* Se ha implementado logging con Morgan
* Se han utilizado buenas prácticas REST

---

## 👩‍💻 Autor

Karina Rojas 💞

---
