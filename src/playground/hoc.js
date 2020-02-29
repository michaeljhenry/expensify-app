// Higher Order Component (HOC) - A component (HOC) that renders another component
// Advantages:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => { // This is just a regular function that RETURNS the HOC
    return (props) => ( // stateless functional component right here
        <div>
        {props.isAdmin && <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props}/>
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ?  <WrappedComponent {...props}/> : <p>Please log in to view the info</p>}
           
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin = {true} info = 'These are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = {false} info = 'These are the details'/>, document.getElementById('app'));