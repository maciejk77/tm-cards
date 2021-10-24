import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useData from '../hooks/useData';
import { FETCH_CARDS, INITIAL_DATA, SET_CUSTOMER_DATA } from '../constants';

const useForm = () => {
  const [form, setForm] = useState(INITIAL_DATA);

  const { data } = useData();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: SET_CUSTOMER_DATA, payload: form });
    dispatch({ type: FETCH_CARDS, payload: data });
    setForm(INITIAL_DATA);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
