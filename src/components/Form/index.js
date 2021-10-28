import useForm from '../../hooks/useForm';
import useStyles from './styles';

const Form = () => {
  const { form, handleChange, handleSubmit } = useForm();
  const { container, formItem, label, input, button } = useStyles();

  return (
    <form className={container} onSubmit={handleSubmit}>
      <div className={formItem}>
        <label className={label} htmlFor="title">
          Title:
        </label>
        <input
          className={input}
          data-testid="title"
          name="title"
          onChange={handleChange}
          value={form.title}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="firstName">
          First Name:
        </label>
        <input
          className={input}
          data-testid="first_name"
          name="firstName"
          onChange={handleChange}
          value={form.firstName}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="lastName">
          Last Name:
        </label>
        <input
          className={input}
          data-testid="last_name"
          name="lastName"
          onChange={handleChange}
          value={form.lastName}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="dob">
          DOB:
        </label>
        <input
          className={input}
          data-testid="dob"
          name="dob"
          onChange={handleChange}
          value={form.dob}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="employmentStatus">
          Employment:
        </label>
        <input
          className={input}
          data-testid="employment_status"
          name="employmentStatus"
          onChange={handleChange}
          value={form.employmentStatus}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="annualIncome">
          Annual Income:
        </label>
        <input
          className={input}
          data-testid="annual_income"
          name="annualIncome"
          onChange={handleChange}
          value={form.annualIncome}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="houseNumber">
          House Number:
        </label>
        <input
          className={input}
          data-testid="house_number"
          name="houseNumber"
          onChange={handleChange}
          value={form.houseNumber}
        />
      </div>

      <div className={formItem}>
        <label className={label} htmlFor="postcode">
          Postcode:
        </label>
        <input
          className={input}
          data-testid="postcode"
          name="postcode"
          onChange={handleChange}
          value={form.postcode}
        />
      </div>

      <button className={button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
