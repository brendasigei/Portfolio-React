import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddProjectForm.module.css';

const EMPTY_FORM = { title: '', category: '', description: '', imageUrl: '' };

// Description of each input so the markup is written only once.
const FIELDS = [
  { name: 'title', label: 'Title', type: 'text' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'imageUrl', label: 'Image URL (optional)', type: 'text' },
];

// Returns an object of error messages. An empty object means the form is valid.
function validate(values) {
  const errors = {};
  if (!values.title.trim()) errors.title = 'Title is required.';
  if (!values.category.trim()) errors.category = 'Category is required.';
  if (!values.description.trim()) errors.description = 'Description is required.';
  return errors;
}

export default function AddProjectForm({ onAddProject }) {
  // Form values and errors are only used here, so they stay local.
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate before sending trimmed values to the shared project list.
    const foundErrors = validate(formData);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    onAddProject({
      title: formData.title.trim(),
      category: formData.category.trim(),
      description: formData.description.trim(),
      imageUrl: formData.imageUrl.trim(),
    });
    setFormData(EMPTY_FORM);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h1>Add a project</h1>

      {FIELDS.map(({ name, label, type }) => (
        <div className={styles.field} key={name}>
          <label htmlFor={name}>{label}</label>
          {type === 'textarea' ? (
            <textarea
              id={name}
              name={name}
              rows="4"
              value={formData[name]}
              onChange={handleChange}
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name]}
              onChange={handleChange}
            />
          )}
          {errors[name] && <p className={styles.error}>{errors[name]}</p>}
        </div>
      ))}

      <button type="submit" className={styles.button}>
        Add Project
      </button>
    </form>
  );
}

AddProjectForm.propTypes = {
  onAddProject: PropTypes.func.isRequired,
};