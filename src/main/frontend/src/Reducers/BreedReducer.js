import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    Residents: [],
};

export const BreedReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BREEDS:
            return { ...state, Residents: payload};
        default:
            return state
    }
};

export const SelectedBreedReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_BREED:
            return { ...state, Type: payload};
        default:
            return state;
    }
}
//filter reducer
export const FilteredList = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.FILTERED_BREED_LIST:
            return { ...state, Filter: payload};
        default:
            return state;
    }
}