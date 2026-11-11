import PropTypes from 'prop-types';
import ProjectCard, { projectShape } from './ProjectCard';
import styles from './ProjectList.module.css';

export default function ProjectList({ projects }) {
  // Empty state, for example when a search has no matches.
  if (projects.length === 0) {
    return <p className={styles.empty}>No projects match your search.</p>;
  }

  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
};