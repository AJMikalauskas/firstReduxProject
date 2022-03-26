import { useDispatch, useSelector } from 'react-redux';
import { userAuthActions } from '../store/reduxStore';
import classes from './Header.module.css';

const Header = () => {

  const showingHeaderContent = useSelector(userAuth => userAuth.userAuth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = (event) =>
  {
    event.preventDefault();
    dispatch(userAuthActions.logout());

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {showingHeaderContent &&
      (<nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
