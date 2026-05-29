   # FRONTENDEVA2C_CISTERNA

Formulario de Registro Interactivo desarrollado con **HTML5, CSS3, JavaScript y Bootstrap 5**.

## 📋 Descripción

Proyecto Frontend enfocado en el desarrollo de un formulario moderno, responsivo e interactivo utilizando tecnologías web básicas.

El sistema incorpora validaciones dinámicas, validación de RUT chileno, formateo automático de RUT, validación de teléfono chileno, validación de contraseña segura, barra de progreso, limpieza automática del formulario y botones de interacción visual.

Proyecto desarrollado para práctica académica de Frontend.

## 🚀 Funcionalidades

✅ Validación de Nombre y Apellido  
✅ Validación de Email  
✅ Validación de RUT Chileno  
✅ Formateo automático de RUT  
✅ Validación de Teléfono Chileno  
✅ Validación de Contraseña Segura  
✅ Confirmación de Contraseña  
✅ Barra de Progreso del Formulario  
✅ Cambio dinámico de colores  
✅ Slider interactivo de años de estudio  
✅ Mensajes de validación personalizados  
✅ Limpieza automática de formulario  
✅ Botón Guardar Cambios  
✅ Diseño responsivo con Bootstrap 5  
✅ Interfaz moderna, ordenada y amigable  

## 🔐 Validaciones Implementadas

### Nombre y Apellido
- Campos obligatorios.
- Mínimo 3 caracteres.

### RUT Chileno
- Campo obligatorio.
- Formateo automático.
- Validación de dígito verificador.

### Teléfono
- Campo obligatorio.
- Formato requerido: `+56912345678`.

### Email
- Campo obligatorio.
- Validación mediante expresión regular.

### Contraseña
- Campo obligatorio.
- Largo mínimo de 8 caracteres.
- Largo máximo de 12 caracteres.
- Al menos una letra mayúscula.
- Al menos una letra minúscula.
- Al menos un número.
- Al menos un carácter especial.

### Repetir Contraseña
- Campo obligatorio.
- Debe coincidir exactamente con la contraseña ingresada.

## 🛠️ Herramientas Utilizadas

- Visual Studio Code
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- GitHub
- Live Server

## 📁 Estructura Actual del Proyecto

```text
FRONTENDEVA2C_CISTERNA/
│
├── css/
│   ├── bootstrap.css
│   ├── bootstrap_slate.css
│   ├── form.css
│   └── index.css
│
├── js/
│   ├── bootstrap.js
│   ├── definicionesJs.js
│   └── eval_2.js
│
├── eval_2.html
├── README.md
└── test.py
🧩 Archivos Principales
eval_2.html

Contiene la estructura principal del formulario, organizada en filas y columnas responsivas mediante Bootstrap.

css/form.css

Contiene los estilos personalizados del formulario, mensajes de validación, barra interactiva, botones y ajustes visuales.

js/eval_2.js

Contiene la lógica de validación del formulario, validación de RUT, teléfono, email, contraseña, barra de progreso, limpieza del formulario y cambio dinámico de colores.

💻 Vista General del Formulario

La estructura del formulario se organiza de la siguiente manera:

Nombre (*)                 | Apellido (*)

Rut (*)                    | Fecha Nacimiento (*)

Email (*)

Teléfono (*)               | Años de Estudio

Contraseña (*)             | Repetir Contraseña (*)

Género

Progreso del Formulario

[Guardar Cambios] [Cancelar] [Aceptar]
▶️ Cómo Ejecutar el Proyecto
Abrir la carpeta del proyecto en Visual Studio Code.
Verificar que los archivos estén ordenados en las carpetas correspondientes.
Abrir el archivo eval_2.html.
Ejecutar con la extensión Live Server.
Probar el formulario completando los campos requeridos.
📌 Estado del Proyecto

✅ Proyecto funcional
✅ Formulario ordenado y responsivo
✅ Validaciones activas
✅ Barra de progreso corregida
✅ Botones alineados horizontalmente
✅ Listo para entrega académica

👨‍💻 Autor

Christian Andres Cisterna Trigo

Proyecto desarrollado para evaluación de Frontend.