## Descripción

[Next] Plantilla para crear nuevos proyectos frontend con next.

## Clonar el repositorio y agregarle un nombre nuevo del nuevo proyecto

```bash
git clone https://github.com/MUTUAL-DE-SERVICIOS-AL-POLICIA/template-next.git nombre-frontend
```

## Inicializar proyecto

```bash
# Entrar al repositorio clonado con el nuevo nombre del proyecto
cd nombre-frontend

# Elimina el origen remoto actual,
git remote remove origin

# Crear el archivo .env en base al .env.example
cp .env.example .env

# Instalar las dependencias
pnpm install

# Correr proyecto en modo desarrollo
pnpm dev

# Para enlazar a un nuevo repositorio
git remote add origin https://github.com/tu-usuario/{nombre_nuevo-next}.git
git add .
git commit -m "Inicialización del nuevo proyecto"
git branch -M main
git push -u origin main
```