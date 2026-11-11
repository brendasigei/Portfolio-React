// Returns the projects whose title, category, or description contains the
// search term. The match ignores letter case and surrounding spaces.
// Kept as a pure function so it is easy to test on its own.
export default function filterProjects(projects, searchTerm) {
  const query = searchTerm.trim().toLowerCase();

  if (!query) {
    return projects;
  }

  return projects.filter((project) =>
    [project.title, project.category, project.description].some((field) =>
      field.toLowerCase().includes(query)
    )
  );
}