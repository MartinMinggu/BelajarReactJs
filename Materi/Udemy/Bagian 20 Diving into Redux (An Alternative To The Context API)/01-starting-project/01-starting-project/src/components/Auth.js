import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { loginActions } from '../store/loginStore';

const Auth = () => {
  const dispatch = useDispatch()
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('event.target :', event.target);
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    dispatch(loginActions.login({ email, password }))
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
