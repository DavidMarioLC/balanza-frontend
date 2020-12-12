import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const PublicRoutes = ({ token, component: Component, ...rest }) => {



    if (token) {
        return <Redirect to="/balanza" />
    } else {
        return <Route {...rest} component={Component} />
    }


}
const mapStateToProps = state => ({
    token: state.sessionReducer.token

})
export default connect(mapStateToProps, null)(PublicRoutes)
