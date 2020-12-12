import { LOGIN, LOGOUT } from '../actionTypes/actionTypes'

const token = localStorage.getItem('token');

const initialState = token ? { token: true } : { token: false }


export const sessionReducer = (state = initialState, action) => {


    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: localStorage.getItem('token')

            }

        case LOGOUT:
            return {
                ...state,
                token: false

            }

        default:
            return state
    }
}