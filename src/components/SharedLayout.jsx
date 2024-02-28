import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/App.module.css';
function SharedLayout() {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.header}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default SharedLayout;
