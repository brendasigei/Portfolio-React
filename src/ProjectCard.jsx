import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { id, title, category, description } = project;

  return (
    <article className={styles.card}>
      {project.imageUrl && (
        <img className={styles.image} src={project.imageUrl} alt={title} />
      )}
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>
          <Link to={`/projects/${id}`}>{title}</Link>
        </h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}

export const projectShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
});

ProjectCard.propTypes = {
  project: projectShape.isRequired,
};