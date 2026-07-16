# Backend - Sistema de Gestión Veterinaria (Prueba Técnica)

Este repositorio contiene el código fuente del backend para el sistema de gestión de una clínica veterinaria. La aplicación expone una API RESTful para la administración de usuarios, mascotas, colaboradores, y el registro detallado de historias clínicas.

## Tecnologías Utilizadas

* **Lenguaje:** Java
* **Framework:** Spring Boot (Spring Web, Spring Data JPA)
* **Base de Datos:** PostgreSQL
* **Infraestructura:** Docker & Docker Compose
* **Gestor de Dependencias:** Maven / Gradle

## Requisitos Previos

Para ejecutar este proyecto en un entorno local, es necesario contar con:
* Docker y Docker Compose instalados.
* Java Development Kit (JDK) 17 o superior.
* IDE de desarrollo (IntelliJ IDEA, Eclipse, VS Code).
* Cliente para pruebas de API (Postman, Insomnia).

## Instrucciones de Despliegue Local

1. **Clonar el repositorio:**
   ``` bash
   git clone [URL_DEL_REPOSITORIO]
   cd [NOMBRE_DEL_DIRECTORIO]
   docker-compose up -d 
   ```
Esto iniciará un contenedor con PostgreSQL configurado según las credenciales del proyecto.


# Documentación de la API (Endpoints)

### La URL base para todos los servicios es: http://localhost:8080/api

## 1. Usuarios
Gestión de propietarios de las mascotas.

GET /usuarios - Obtiene la lista de todos los usuarios.

GET /usuarios/{id} - Obtiene un usuario específico por su ID.

POST /usuarios - Crea un nuevo usuario.

JSON
{
    "nombre": "Andres",
    "apellido": "Gonzalez",
    "tipoDocumento": "CC",
    "documentoIdentificacion": 123456789,
    "estado": "ACTIVO",
    "sexo": 1
}
DELETE /usuarios/{id} - Elimina un usuario.

## 2. Mascotas

Gestión de mascotas asociadas a un usuario.

GET /mascotas - Obtiene la lista de mascotas.

POST /mascotas - Crea una nueva mascota.

JSON
{
    "nombre": "Firulais",
    "raza": "Labrador",
    "sexo": "Macho",
    "usuario": {
        "id": 1
    }
}

## 3. Colaboradores
Gestión del personal veterinario.

GET /colaboradores - Obtiene la lista de colaboradores.

POST /colaboradores - Crea un nuevo colaborador.

JSON
{
    "nombre": "Carlos",
    "apellido": "Perez",
    "cargo": "Veterinario",
    "especialidad": "Cirujano",
    "tipoDocumento": "CC",
    "documentoIdentificacion": 987654321
}
## 4. Historias Clínicas
Apertura de la historia clínica para una mascota.

GET /historias-clinicas - Obtiene la lista de historias clínicas.

POST /historias-clinicas - Crea una historia clínica.

JSON
{
    "fechaCreacion": 20260716,
    "mascota": {
        "id": 1
    }
}

## 5. Detalles de Historia Clínica
Registro de los controles y signos vitales asociados a una historia clínica y a un colaborador.

GET /detalles-historia - Obtiene todos los detalles médicos registrados.

POST /detalles-historia - Registra un nuevo control médico.

JSON
{
    "temperatura": "38.5",
    "peso": 12.50,
    "frecuenciaCardiaca": 120.00,
    "frecuenciaRespiratoria": 30.00,
    "fechaHora": "2026-07-16T16:30:00",
    "alimentacion": "Croquetas",
    "habitad": "Casa",
    "observacion": "Paciente estable, revisión general completada.",
    "colaborador": {
        "id": 1
    },
    "historiaClinica": {
        "id": 1
    }
}
