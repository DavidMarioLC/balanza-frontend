import React from 'react'
import '../css/styles.css'
import logo from '../image/beta-logo.png'

//redux
import { sessionLoginAction } from '../../redux/action/actionSession'
import { connect } from 'react-redux'

const Login = ({ loginUsuario }) => {

    const loginView = (e) => {
        e.preventDefault()
        const { codigo_sap } = e.target.codigo_sap.value;
        loginUsuario(codigo_sap)

    }

    return (
        <>
            <div className="navbar">
                <h1 className="navbar__title">Balanza IOT</h1>
            </div>
            <div className="container">
                <form className="form" onSubmit={loginView}>
                    <div className="form__label">
                        <h2 className="label__text">Ingresa tu codigo:</h2>
                    </div>
                    <div className="form__input">
                        <input type="text" name="codigo_sap" className="input__codigo" />
                    </div>
                    <button type="submit" className="button"  >
                        Ingresar
                        </button>

                </form>
            </div>
            <div className="footer">
                <img className="footer__image" src={logo} alt="logo" />
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loginUsuario: (codigo_sap) => {
        dispatch(sessionLoginAction(codigo_sap))
    }
})


export default connect(null, mapDispatchToProps)(Login)
