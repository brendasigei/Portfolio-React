import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ProjectList from './ProjectList';
import { projectShape } from './ProjectCard';

// Home page combines the search control with the filtered project list.
export default function HomePage({ projects, searchTerm, onSearchChange }) {
  return (
    <>
      <section className="container">
        <h1>Selected Projects</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <ProjectList projects={projects} />
      </section>
    </>
  );
}

HomePage.propTypes = {
  projects: PropTypes.arrayOf(projectShape).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};