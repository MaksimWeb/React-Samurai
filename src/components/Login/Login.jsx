import React from 'react';
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} validate={[requiredField]} name={"email"} placeholder={"Login"}/>
        </div>
        <div>
            <Field component={Input} validate={[requiredField]} name={"password"} placeholder={"Password"}
                   type="password"/>
        </div>
        <div>
            <Field component={Input} validate={[requiredField]} name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);