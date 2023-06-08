import { useDispatch, useSelector } from 'react-redux';
import { Label, LabelText, Input } from './Filter.styled';
import { setStatusFilter } from "../../redux/filterSlice";
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value))
  }
  return (
    <Label >
      <LabelText>Find contacts by name</LabelText>
      <Input type="text" value={filter.value}  onChange={handleChange} />
    </Label>
  );
};

