import { useSelector } from 'react-redux';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  const email = useSelector(state => state.login.email)
  return (
    <main className={classes.profile}>
      <h2> Hallo<span className={classes.username}>{email ?? 'My User Profile'}</span></h2>
    </main>
  );
};

export default UserProfile;
