import { Formik } from 'formik';
import { addContact } from '../../redux/contactsSlice';
import {
  FormPhonebook,
  Input,
  FormGroup,
  Label,
  LabelText,
  ButtonSubmit,
} from './Form.styled';
import { FormError } from './FormError/FormError';
import { getValidationSchema } from '../utils/getValitadionSchema';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    const name = value.name;
    const number = value.number;

    const checkName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const checkNumber = contacts.some(item => {
      const stateNumber = parseInt(number.replace(/[^\d]/g, ''));
      const newNumber = parseInt(item.number.replace(/[^\d]/g, ''));
      return stateNumber === newNumber;
    });

    if (checkName) {
      actions.resetForm();
      return window.alert(`${name} is already in contacts`);
    }
    if (checkNumber) {
      actions.resetForm();
      return window.alert(`${number} is already in contacts`);
    }

    dispatch(addContact(value));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={getValidationSchema}
    >
      <FormPhonebook>
        <FormGroup role="group" aria-labelledby="add-contact-details">
          <Label>
            <LabelText>Name</LabelText>

            <Input type="text" name="name" />
            <FormError name="name" />
          </Label>

          <Label>
            <LabelText>Number</LabelText>
            <Input type="tel" name="number" />
            <FormError name="number" />
          </Label>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormGroup>
      </FormPhonebook>
    </Formik>
  );
};
