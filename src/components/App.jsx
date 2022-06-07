import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import contactsFile from '../contacts.json';

class App extends Component {
  state = {
    contacts: contactsFile,
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        alert(`${name} is already in contact`);
        return contacts;
      } else {
        return {
          contacts: [
            {
              id: nanoid(),
              name,
              number,
            },
            ...contacts,
          ],
        };
      }
    });
  };

  contactDelete = id => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const contactsAfterDelete = contacts.filter(contact => contact.id !== id);
      return { contacts: [...contactsAfterDelete] };
    });
  };

  handleFilterChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  filteredContacts = value => {
    const filterNormalize = value.toLowerCase();

    return this.state.contacts
      .filter(contact => {
        return contact.name.toLowerCase().includes(filterNormalize);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Section>
          <ContactForm onSubmit={this.formSubmit} />

          <h2>Contacts</h2>
          <Filter
            title="Find contact by name"
            onChange={this.handleFilterChange}
            value={filter}
          />
          <ContactList
            onDelete={this.contactDelete}
            filteredContacts={this.filteredContacts(filter)}
          />
        </Section>
      </>
    );
  }
}

export default App;
