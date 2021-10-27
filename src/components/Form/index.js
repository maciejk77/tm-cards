import useForm from '../../hooks/useForm';

const Form = () => {
  const { form, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          data-testid="title"
          name="title"
          onChange={handleChange}
          value={form.title}
        />
      </div>

      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          data-testid="first_name"
          name="firstName"
          onChange={handleChange}
          value={form.firstName}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          data-testid="last_name"
          name="lastName"
          onChange={handleChange}
          value={form.lastName}
        />
      </div>

      <div>
        <label htmlFor="dob">DOB</label>
        <input
          data-testid="dob"
          name="dob"
          onChange={handleChange}
          value={form.dob}
        />
      </div>

      <div>
        <label htmlFor="employmentStatus">Employment Status</label>
        <input
          data-testid="employment_status"
          name="employmentStatus"
          onChange={handleChange}
          value={form.employmentStatus}
        />
      </div>

      <div>
        <label htmlFor="annualIncome">Annual Income</label>
        <input
          data-testid="annual_income"
          name="annualIncome"
          onChange={handleChange}
          value={form.annualIncome}
        />
      </div>

      <div>
        <label htmlFor="houseNumber">House Number</label>
        <input
          data-testid="house_number"
          name="houseNumber"
          onChange={handleChange}
          value={form.houseNumber}
        />
      </div>

      <div>
        <label htmlFor="postcode">Postcode</label>
        <input
          data-testid="postcode"
          name="postcode"
          onChange={handleChange}
          value={form.postcode}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
