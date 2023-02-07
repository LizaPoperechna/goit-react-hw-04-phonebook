import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { P } from 'components/App.styled';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContacts}) => {
    return (
        <>
            {contacts.length <= 0 
            ? (<P>No contacts were found for this request</P>) 
            : (<List>
                    {contacts.map(({ id, name, number }) => {
                        return (
                        <ContactItem
                            key={id}
                            id={id}
                            name={name}
                            number={number}
                            deleteContacts={deleteContacts}
                        />
                        );
                    })}
                </List>)}
        </>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    deleteContacts: PropTypes.func.isRequired,
  };