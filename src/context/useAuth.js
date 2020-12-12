import { useContext } from 'react'
import { authContext } from './miContext'
export const useAuth = () => {

    return useContext(authContext);

}


