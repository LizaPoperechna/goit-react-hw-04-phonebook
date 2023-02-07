import PropTypes from 'prop-types';
import { ButtonDel } from './ContactItem.styled';

export const ContactItem = ({id, name, number, deleteContacts}) => {
    return (
        <li>
            {name} : {number}
            <ButtonDel 
                type="button"
                onClick={() => {deleteContacts(id)}}>
                    Delete Contact
            </ButtonDel>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContacts: PropTypes.func.isRequired,
}