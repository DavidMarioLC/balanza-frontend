import React from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { logoutAction } from '../../redux/action/actionSession'
import Balance from '../components/Balance'

const BalanceContainer = () => {
    let history = useHistory();
    let auth = useAuth();

    const cerrarSession = () => {
        localStorage.removeItem('token')
        store.dispatch(logoutAction)
        history.push('/')
    }

    return <Balance cerrarSession={cerrarSession} />
}

export default BalanceContainer
