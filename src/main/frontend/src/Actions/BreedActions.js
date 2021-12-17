import { ActionTypes } from '../Constants/Action.type';

export const setFinishList = (list) => {
    return {
        type: ActionTypes.SET_BREEDS,
        payload: list
    }
}

export const selectedFinish = (finish) => {
    return {
        type: ActionTypes.SELECTED_BREED,
        payload: finish
    }
}

export const filteredList = (filter) => {
    return {
        type: ActionTypes.FILTERED_BREED_LIST,
        payload: filter
    }
}