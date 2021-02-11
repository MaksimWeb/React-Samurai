import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message}/>);


    let newMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={newMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"} />
        </div>
        <button className={s.message}>Отправить сообщение</button>
    </form>
}

const AddMessageFormRedux = reduxForm ({form:"AddMessageForm"}) (AddMessageForm)

export default Dialogs;