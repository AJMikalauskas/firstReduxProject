import classes from './Auth.module.css';
import { userAuthActions  } from '../store/reduxStore';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {

  // Remember that for next time to use onSubmit to the loginHandler instead of the button login
    // If we were to validate what the user entered, onSubmit would be what is necessary not the onClick
  const dispatch = useDispatch();
  //useSelector(state => state.isAuthenticated);

  const loginHandler = (event) =>
  {
    event.preventDefault();
    dispatch(userAuthActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          {/* onClick={loginHandler} */}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
