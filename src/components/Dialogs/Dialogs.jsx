import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"


const Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message}/>);

    let textArea = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let textAreaValue = textArea.current.value;
        props.updateNewMessageText(textAreaValue);
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
            <div>
                <div>
                    <textarea onChange={onMessageChange} ref={textArea} value={props.messagesPage.newMessageText}></textarea>
                </div>
                <button className={s.message} onClick={onAddMessage}>Отправить сообщение</button>
            </div>

        </div>
    )
}

export default Dialogs;