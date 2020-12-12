import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const PrivateRoutes = ({ token, component: Component, ...rest }) => {



    if (token) {
        return <Route {...rest} component={Component} />
    } else {
        return <Redirect to="/login" />
    }


}
const mapStateToProps = state => ({
    token: state.sessionReducer.token

})
export default connect(mapStateToProps, null)(PrivateRoutes)
