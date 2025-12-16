import { useState } from "react";

export default function Login({ setIsLoginPage }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })
  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email"
            type="email"
            onChange={handleChange}
            value={formValues.email}
            name="email" />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={handleChange}
            value={formValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button">Login</button>
      </p>
      <p>
        <button onClick={() => setIsLoginPage(false)}>
          belum punya akun? ayo daftar
        </button>
      </p>
    </form>
  );
}
