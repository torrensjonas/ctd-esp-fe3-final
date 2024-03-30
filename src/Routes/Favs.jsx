import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { useMemo } from "react";

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const { favs } = state;

  const elementosFavoritos = useMemo(() => {
    return favs.map(fav => (<Card key={fav.id} id={fav.id} name={fav.name} username={fav.username} />));
  }, [favs]);

  const resetFavorites = () => {
    localStorage.removeItem('favs');
    dispatch({ type: 'RESET_FAVS' });
  };

  return (
    <div className={`Favs ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <button onClick={resetFavorites}>Resetear Favoritos</button>
      <div className="card-grid">
        {elementosFavoritos}
      </div>
    </div>
  );
};

export default Favs;

