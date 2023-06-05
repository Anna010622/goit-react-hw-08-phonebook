import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter.value);

  const dispatch = useDispatch();
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        value={filterValue}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </label>
  );
};
