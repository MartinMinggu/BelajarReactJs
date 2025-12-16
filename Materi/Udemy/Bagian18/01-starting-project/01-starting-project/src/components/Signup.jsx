import { isEmail, isNotEmpty, hasMinLength, isEqualToOtherValue } from '../util/validation.js'
export default function Signup() {
  function handleSubmit(formData) {
    console.log("submited ");
    console.log(formData);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const role = formData.get('role');
    const acquisitionChannel = formData.getAll('acquisition');
    const terms = formData.get('terms');
    console.log(enteredEmail);
    let errors = [];
    if (!isEmail(email)) {
      errors.push('invalid email address');
    }
    if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
      errors.push('password harus setidaknya 6 karakter');
    }
    if (!isEqualToOtherValue(password, confirmPassword)) {
      errors.push('password tidak sama');
    }
    if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
      errors.push('first name dan last name harus terisi');
    }
    if (!isNotEmpty(role)) {
      errors.push('role harus terisi');
    }
    if (!terms) {
      errors.push('kamu harus setuju');
    }
    if (acquisitionChannel.lenght === 0) {
      errors.push("harus mengisi minimal 1 hobi")
    }
    if (errors.length > 0) {
      return { errors }

    }
    return { errors: null }

  }
  return (
    <form action={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
