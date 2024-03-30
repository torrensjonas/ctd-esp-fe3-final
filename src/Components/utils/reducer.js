export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, theme: state.theme === '' ? 'dark' : ''};
        case 'GET_LIST':
            return {...state, data: action.payload};
        case 'ADD_FAV': 
            const isFav = state.favs.some(fav => fav.id === action.payload.id);
            if (isFav) {
                return {
                ...state,
                favs: state.favs.filter(fav => fav.id !== action.payload.id)
                };
            } else {
                return {
                ...state,
                favs: [...state.favs, action.payload]
                };
            }
        case 'RESET_FAVS':
            return { ...state, favs: [] };            
      default:
        return state;
    }
};