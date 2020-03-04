import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => ( // rest has all of the stuff we didn't destructucture. could be named anything else
    <Route {...rest} component = {(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard'/>
        ) : (
            <div><Component {...props}/></div>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid // without the two !! it would return a string if it exists and undefined if it didnt. but we want T/F
});

export default connect(mapStateToProps)(PublicRoute);