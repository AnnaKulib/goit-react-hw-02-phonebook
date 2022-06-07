import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <div className={s.textField}>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
              placeholder="Your Name"
            />
            <label htmlFor="name" className={s.textField__label}>
              Name
            </label>
          </div>
          <div className={s.textField__floating}>
            <input
              className={s.textField__input}
              type="tel"
              id="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInputChange}
              placeholder="+XX XXX XX XX"
            />
            <label htmlFor="tel" className={s.textField__label}>
              Phone number
            </label>
          </div>
          <button type="submit" className={s.textField__btn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
ContactForm.propTypes = {
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
