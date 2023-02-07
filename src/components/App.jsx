import React, {Component} from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { H1, H2, P } from "./App.styled";




export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contactList'));

    if (savedContacts) 
        {this.setState({contacts: savedContacts})}
  }

  componentDidUpdate(_, PrevState) {
      if (this.state.contacts !== PrevState.contacts) {
        localStorage.setItem('contactList', JSON.stringify(this.state.contacts))
      }
  }


  addContact = (name, number) => {
    if( this.state.contacts.find(
       option => option.name.toLowerCase() === name.toLowerCase()))
          { alert(`${name} is already in contacts list`); return false}
    else{ this.setState(prevState => ({
           contacts: [...prevState.contacts, { id: nanoid(), name, number }],
         }));  
       return true}
  }

  deleteContacts = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  getContacts = () => {
    if (this.state.filter === '') {
      return [...this.state.contacts];
    }
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  filterContacts = event => {
    this.setState ({
      filter: event.target.value.toLowerCase()
    })
  }

  render () {
    const {addContact, deleteContacts, getContacts, filterContacts} = this;
    const {contacts} = this.state;

    return (
        <div>
            <H1>Phonebook</H1>
            <ContactForm onSubmit={addContact} />

            <H2>Contacts</H2>
            {contacts.length <= 0 
              ? (<P>No contacts in Phonebook</P>)
              : (<>
                <Filter filterContacts={filterContacts}/>
                <ContactList contacts={getContacts()} deleteContacts={deleteContacts}/>
              </>)}
        </div>
  )

  }
}



