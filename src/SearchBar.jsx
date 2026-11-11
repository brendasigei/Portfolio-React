import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

// Apply the search only on submit; App owns the query used to filter projects.
export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <form
      className={styles.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
        onSearchChange(new FormData(event.currentTarget).get('query') || '');
      }}
    >
      <input
        type="search"
        name="query"
        className={styles.input}
        placeholder="Search projects"
        aria-label="Search projects"
        defaultValue={searchTerm}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};