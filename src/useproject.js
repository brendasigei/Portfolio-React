import { useMemo, useState } from 'react';
import filterProjects from './filterProjects';

// Holds all shared project state so App stays small.
export default function useProjects(initialProjects) {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // Derived from projects + searchTerm, so it is computed on demand rather than stored in state.
  
  const filteredProjects = useMemo(
    () => filterProjects(projects, searchTerm),
    [projects, searchTerm]
  );

  // Adds a new project at the top of the list .
  function addProject(newProject) {
    setProjects((current) => {
      const nextId = Math.max(0, ...current.map((project) => project.id)) + 1;
      return [{ ...newProject, id: nextId }, ...current];
    });
  }

  return { projects, filteredProjects, searchTerm, setSearchTerm, addProject };
}