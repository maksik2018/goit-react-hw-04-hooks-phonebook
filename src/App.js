import React, { Component } from "react";
import nextId from "react-id-generator";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import './App.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: '',
  }

  onChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };
  
  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const id = nextId();
    const newContact = {
      name,
      id,
      number,
    };
  
     
    const checkOnContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkOnContact) {
      alert(`${newContact.name} is already in contacts`);
    }
        else {
      this.setState(prev => ({
        contacts: [...prev.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  onFilterChange = event => {
    const targetValue = event.target.value;
    this.setState({
      filter: targetValue,
    });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )
  };

  render() {  
    const { filter } = this.state;
         return (
          <Container>
            <h1> Phonebook </h1>
          <h2>Add new contact</h2>
          <ContactForm onSubmit={this.addContact} />
          <h2>Find contact</h2>
          <Filter value={filter} onChange={this.onFilterChange} />
          <h2>Contact list</h2>
          <ContactList contacts={this.filterByName()}
            onDeleteContact = { this.deleteContact }/>
          </Container>
         
        );
    }
}
