import { ActionTypes } from '../Constants/Action.type';

export const setBreeds = (list) => {
    return {
        type: ActionTypes.SET_BREEDS,
        payload: list
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