import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => (
  <section className={s.section}>
    <h1 className={s.title}>Phonebook</h1>
    {children}
  </section>
);

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
