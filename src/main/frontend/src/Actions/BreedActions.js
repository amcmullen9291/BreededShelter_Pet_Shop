import { ActionTypes } from '../Constants/Action.type';

export const setBreeds = (Residents) => {
    return {
        type: ActionTypes.SET_BREEDS,
        payload: Residents
    }
}

export const selectedBreed = (finish) => {
    return {
        type: ActionTypes.SELECTED_BREED,
        payload: finish
    }
}

export const filteredBreedList = (filter) => {
    return {
        type: ActionTypes.FILTERED_BREED_LIST,
        payload: filter
    }
}