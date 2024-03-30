import { useContextGlobal } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {state, dispatch} = useContextGlobal();

  const toggleTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <nav className={`${state.theme}`}>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Destacados</Link>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar