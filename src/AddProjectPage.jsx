import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AddProjectForm from './AddProjectForm';

// Wraps the form so that, after a project is added, the user is sent back to
// the portfolio to see it. Keeping navigation here leaves the form reusable.
export default function AddProjectPage({ onAddProject }) {
  const navigate = useNavigate();

  function handleAdd(project) {
    onAddProject(project);
    navigate('/');
  }

  return (
    <section className="container">
      <AddProjectForm onAddProject={handleAdd} />
    </section>
  );
}

AddProjectPage.propTypes = {
  onAddProject: PropTypes.func.isRequired,
};