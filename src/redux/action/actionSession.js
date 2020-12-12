import { LOGIN, LOGOUT } from '../actionTypes/actionTypes'
import { loginAuth } from '../../loginUser/services/loginAuth'

export const sessionLoginAction = (codigo_sap) => async dispatch => {


    const responseService = await loginAuth(codigo_sap)

    if (responseService) {
        dispatch({ type: LOGIN, success: responseService })

    }


}

export const logoutAction = async (dispatch) => {
    dispatch({ type: LOGOUT, auth: false })
}