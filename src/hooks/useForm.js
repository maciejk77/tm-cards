import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INITIAL_DATA } from '../constants';
import { updateStoreData } from '../thunks';

const useForm = () => {
  const [form, setForm] = useState(INITIAL_DATA);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).every((el) => !el)) {
      // continue with validation, refactor
      console.log('No data provided before submission');
      return;
    }

    dispatch(updateStoreData(form));
    setForm(INITIAL_DATA);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
