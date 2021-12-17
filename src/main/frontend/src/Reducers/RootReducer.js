import { combineReducers } from 'redux';
import { BreedReducer, SelectedBreedReducer, FilteredList } from './BreedReducer';


const RootReducer = combineReducers({
    Residents: BreedReducer,
    Breed: SelectedBreedReducer,
    FilteredList: FilteredList
});

export default RootReducer;