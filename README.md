# React Portfolio

A small portfolio app for browsing and managing creative projects. The home page starts with one sample project, including an image, and provides a search form. Visitors can open a project detail page or add a project through a form.

## Features

- Search projects by title, category, or description.
- View project details and an optional image.
- Add projects with a title, category, description, and optional image URL.
- Show validation messages for required form fields.
- Navigate between the portfolio, project details, and add-project form without full page reloads.

Projects are kept in React state in the browser. New projects are not saved to a database and will be lost when the page is refreshed. The starter example is defined in `src/initialProject.js`.

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

To create a production build, run:

```bash
npm run build
```

## Routes

- `/` - project list and search
- `/projects/:id` - details for a project
- `/add` - form to add a project

## Project Structure

- `src/App.jsx` - shared project state and route definitions
- `src/HomePage.jsx` - portfolio home page
- `src/ProjectCard.jsx` and `src/ProjectList.jsx` - project list presentation
- `src/ProjectDetails.jsx` - individual project details
- `src/AddProjectForm.jsx` - project form and validation
- `src/filterProjects.js` - project search logic
- `src/*.module.css` - component-specific styles

The app is built with React, React Router, and Vite.
