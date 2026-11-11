import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { projectShape } from './ProjectCard';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ projects }) {
  // The id comes from the URL (/projects/:id) as a string.
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <section className="container">
        <h1>Project not found</h1>
        <Link to="/">Back to portfolio</Link>
      </section>
    );
  }

  return (
    <section className={`container ${styles.detail}`}>
      <Link to="/">&larr; Back to portfolio</Link>
      {project.imageUrl && (
        <img
          className={styles.image}
          src={project.imageUrl}
          alt={`${project.title} project`}
        />
      )}
      <span className={styles.category}>{project.category}</span>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </section>
  );
}

ProjectDetail.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
};