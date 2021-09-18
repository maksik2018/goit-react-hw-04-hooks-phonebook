import React from 'react';
import PropTypes from "prop-types";
import { List, Item} from "../components/ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map((contact) => (
      <Item key={contact.id} >
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button type="button" onClick={() => onDeleteContact(contact.id)}>Удалить</button>
      </Item>
    ))}
  </List>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;