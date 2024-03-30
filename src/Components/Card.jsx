import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

const Card = ({ name, username, id }) => {
  const {state, dispatch} = useContextGlobal();

  const isFav = state.favs.some(fav => fav.id === id);
  
  const addFav = () => {
    const newFav = {
      id,
      name,
      username
    };
    dispatch({ type: 'ADD_FAV', payload: newFav });
  };

  return (
    <div className={`card ${state.theme}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <small>{id}</small>
        <Link to={`/dentist/${id}`}>Ver detalles</Link>
        <button className={`favButton ${state.theme}`} onClick={addFav}>
          {isFav ? 'Remove fav' : 'Add fav'}
        </button>
    </div>
  );
  };

export default Card;
