import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';

export const ContactForm = ({onSubmit}) => {
    const formSubmit = e => {
        e.preventDefault();
        const { name, number } = e.target.elements;
        if (onSubmit(name.value, number.value)){
            name.value = '';
            number.value = '';}
    }

    return (
        <>
            <Form onSubmit={formSubmit}> 
                <label htmlFor="name">Name</label>
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                <label htmlFor="number">Number</label>
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                <Button type="submit">Add contact</Button>
            </Form>
        </>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}