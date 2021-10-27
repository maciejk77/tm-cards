import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '.';
import List from '../List';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Form completion with the list of cards a customer is eligible for', () => {
  // beforeEach here with Provider-Form (DRY)
  // automate filling up form, from /customers endpoint
  // mock server response
  // DRY other

  it('renders 2 cards for Full Time employed, Income min or over', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    );

    // ------ find fields for data capture ------
    // const title = getByTestId('title');
    // const firstName = getByTestId('first_name');
    // const lastName = getByTestId('last_name');
    // const dob = getByTestId('dob');
    const employmentStatus = await screen.findByTestId('employment_status');
    const annualIncome = await screen.findByTestId('annual_income');
    // const houseNumber = getByTestId('house_number');
    // const postcode = getByTestId('postcode');

    // type in data for a given customer scenario
    userEvent.type(employmentStatus, 'Full Time');
    userEvent.type(annualIncome, '34000');

    // quick check if, information is updated on form state
    expect(getByTestId('employment_status').value).toEqual('Full Time');
    expect(getByTestId('annual_income').value).toEqual('34000');

    // find button for form submission
    const submitButton = await screen.findByRole('button', {
      name: /Submit/i,
    });

    // submit form data
    fireEvent.click(submitButton, new MouseEvent('click'));

    // expect to find listed card 1, 2
    const card1 = await screen.findByText(/Anywhere Card/i);
    await waitFor(() => expect(card1).toBeInTheDocument());

    const card2 = await screen.findByText(/Liquid Card/i);
    await waitFor(() => expect(card2).toBeInTheDocument());

    // below should not be listed
    const card3 = screen.queryByText(/Student Card/i);
  });

  it('renders 3 cards for Student, Income minimum or over', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    );

    // ------ find fields for data capture ------
    // const title = getByTestId('title');
    // const firstName = getByTestId('first_name');
    // const lastName = getByTestId('last_name');
    // const dob = getByTestId('dob');
    const employmentStatus = await screen.findByTestId('employment_status');
    const annualIncome = await screen.findByTestId('annual_income');
    // const houseNumber = getByTestId('house_number');
    // const postcode = getByTestId('postcode');

    // type in data for a given customer scenario
    userEvent.type(employmentStatus, 'Student');
    userEvent.type(annualIncome, '17000');

    // quick check if, information is updated on form state
    expect(getByTestId('employment_status').value).toEqual('Student');
    expect(getByTestId('annual_income').value).toEqual('17000');

    // find button for form submission
    const submitButton = await screen.findByRole('button', {
      name: /Submit/i,
    });

    // submit form data
    fireEvent.click(submitButton, new MouseEvent('click'));

    // expect to find listed card 1, 2 and 3
    const card1 = await screen.findByText(/Anywhere Card/i);
    await waitFor(() => expect(card1).toBeInTheDocument());

    const card2 = await screen.findByText(/Liquid Card/i);
    await waitFor(() => expect(card2).toBeInTheDocument());

    const card3 = await screen.findByText(/Student Card/i);
    await waitFor(() => expect(card3).toBeInTheDocument());
  });

  it('renders 1 card for Part Time employed, Income below minimum', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
        <List />
      </Provider>
    );

    // ------ find fields for data capture ------
    // const title = getByTestId('title');
    // const firstName = getByTestId('first_name');
    // const lastName = getByTestId('last_name');
    // const dob = getByTestId('dob');
    const employmentStatus = await screen.findByTestId('employment_status');
    const annualIncome = await screen.findByTestId('annual_income');
    // const houseNumber = getByTestId('house_number');
    // const postcode = getByTestId('postcode');

    // type in data for a given customer scenario
    userEvent.type(employmentStatus, 'Part Time');
    userEvent.type(annualIncome, '15000');

    // quick check if, information is updated on form state
    expect(getByTestId('employment_status').value).toEqual('Part Time');
    expect(getByTestId('annual_income').value).toEqual('15000');

    // find button for form submission
    const submitButton = await screen.findByRole('button', {
      name: /Submit/i,
    });

    // submit form data
    fireEvent.click(submitButton, new MouseEvent('click'));

    // expect to find listed card 1 only
    const card1 = await screen.findByText(/Anywhere Card/i);
    await waitFor(() => expect(card1).toBeInTheDocument());

    // below should not be listed
    const card2 = screen.queryByText(/Liquid Card/i);
    const card3 = screen.queryByText(/Student Card/i);
  });
});
