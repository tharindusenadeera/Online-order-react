
import { ADD_DISH, UPDATE_DISH, DELETE_DISH} from "../constants/ActionTypes";

export const addDish = (data) => {
    return {
        type: ADD_DISH,
        payload: data,
    };
};

export const updateDish = (data) => {
    return {
        type: UPDATE_DISH,
        payload: data,
    };
};

export const deleteDish = (data) => {
    return {
        type: DELETE_DISH,
        payload: data,
    };
};

