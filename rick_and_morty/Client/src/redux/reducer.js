import { ADD_FAV, REMOVE_FAV, FILTER, ORDER  } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: [],
};


const reducer = (state = initialState, {type, payload})=>{

    switch(type){
        
        case ADD_FAV: return{ 
            ...state, 
            myFavorites: payload, 
            allCharacters: payload 
        };
          
        
        case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };
        
        case FILTER: 
        const filter = state.allCharacters.filter(char => char.gender === payload)
        return{
              ...state , myFavorites : payload === "All"
              ? [...state.allCharacters]
              :filter
        }

        case ORDER : 
        const copy = [...state.allCharacters]
        return{
            ...state,
            myFavorites:
            payload === "A" 
            ? copy.sort((a,b)=> a.id - b.id)
            : copy.sort((a,b)=> b.id - a.id)
        }
        
        default:
            return {...state};

    }
}



export default reducer;