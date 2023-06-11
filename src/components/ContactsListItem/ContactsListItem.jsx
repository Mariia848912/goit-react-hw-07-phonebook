import { useDeleteContactMutation } from "redux/api";
import { Button, ItemContact } from "./ContactsListItem.styled";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { toast } from "react-toastify";


export const ContactsListItem = ({id, name, phone}) => {
  const [deleteContact, {isError, isSuccess}] = useDeleteContactMutation();
 
    useEffect(() => {
        if (isSuccess) toast.success('The contact was deleted')
        if(isError) toast.error('The contact was not deleted. Try later')
    },[isError, isSuccess])
    
    return (
        <ItemContact>
          {name}: {phone}
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </ItemContact> 
    )
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};