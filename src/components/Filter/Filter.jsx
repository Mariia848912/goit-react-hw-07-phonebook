import { useDispatch, useSelector } from 'react-redux';
import { Label, LabelText, Input } from './Filter.styled';
import { setStatusFilter } from "../../redux/filterSlice";
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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

