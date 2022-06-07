import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.item}>
      <p>{name}</p>
      <div className={s.thumb}>
        <p>{number}</p>
        <button
          className={s.button}
          type="button"
          id={id}
          onClick={e => {
            onDelete(e.target.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
