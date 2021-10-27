import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form';
import List from '../List';
import TotalCredit from '../TotalCredit';
import { Provider } from 'react-redux';
import store from '../../store';

describe('List of cards a customer is eligible for, with total credit selected', () => {
  // beforeEach here with Provider-Form (DRY)
  // automate filling up form, from /customers endpoint
  // mock server response
  // DRY other

  it('provides correct credit sum after card(s) selection', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Form />
        <List />
        <TotalCredit />
      </Provider>
    );

    // find fields for data capture
    const employmentStatus = await screen.findByTestId('employment_status');
    const annualIncome = await screen.findByTestId('annual_income');

    // type in data for three cards scenario
    userEvent.type(employmentStatus, 'Student');
    userEvent.type(annualIncome, '17000');

    // total credit 0 to begin with, before form data submission
    const totalCredit = await screen.findByTestId('total_credit');
    expect(totalCredit).toHaveTextContent('0');

    // find button for form submission
    const submitButton = await screen.findByRole('button', {
      name: /Submit/i,
    });

    // submit form data
    fireEvent.click(submitButton, new MouseEvent('click'));

    // expected 3 cards for this scenario/customer as the result
    const allAvailableCards = await screen.findAllByTestId('card');
    expect(allAvailableCards).toHaveLength(3);

    // find all nodes which control card selection
    const selectedCards = await screen.findAllByTestId('selected_card');

    // first card selected only
    fireEvent.click(selectedCards[0], new MouseEvent('click'));
    const totalCreditOneCard = await screen.findByTestId('total_credit');
    expect(totalCreditOneCard).toHaveTextContent('300');

    // first and third cards selected now
    fireEvent.click(selectedCards[2], new MouseEvent('click'));
    const totalCreditOneThreeCard = await screen.findByTestId('total_credit');
    expect(totalCreditOneThreeCard).toHaveTextContent('1500');

    // all three cards selected now
    fireEvent.click(selectedCards[1], new MouseEvent('click'));
    const totalCreditOneThreeTwoCard = await screen.findByTestId(
      'total_credit'
    );
    expect(totalCreditOneThreeTwoCard).toHaveTextContent('4500');

    // deselect cards one and two
    fireEvent.click(selectedCards[0], new MouseEvent('click'));
    fireEvent.click(selectedCards[1], new MouseEvent('click'));
    const totalCreditCardThreeOnly = await screen.findByTestId('total_credit');
    expect(totalCreditCardThreeOnly).toHaveTextContent('1200');
  });
});
