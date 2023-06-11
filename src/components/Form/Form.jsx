import { Formik } from 'formik';
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
import { useAddContactMutation, useGetContactsQuery } from 'redux/api';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const initialValues = {
  name: '',
  phone: '',
};

export const FormContacts = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, {isError, isSuccess}] = useAddContactMutation();

  const handleSubmit = (value, actions) => {
    const name = value.name;
    const phone = value.phone;

    const checkName = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const checkPhone = contacts.some(item => {
      const statePhone = parseInt(phone.replace(/[^\d]/g, ''));
      const newPhone = parseInt(item.phone.replace(/[^\d]/g, ''));
      return statePhone === newPhone;
    });
    if (checkName) {
      actions.resetForm();
      return window.alert(`${name} is already in contacts`);
    }
    if (checkPhone) {
      actions.resetForm();
      return window.alert(`${phone} is already in contacts`);
    }
    addContact(value);
        actions.resetForm();
  };
  useEffect(() => {
        if (isSuccess) toast.success('The contact was added')
        if(isError) toast.error('The contact was not added. Try later')
  }, [isError, isSuccess])
  
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
            <Input type="tel" name="phone" />
            <FormError name="phone" />
          </Label>
          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </FormGroup>
      </FormPhonebook>
    </Formik>
  );
};
