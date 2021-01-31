import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {


    let dialogsElements = props.dialog.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialog.messages.map(m => <Message message={m.message}/>);

    let textArea = React.createRef();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action)
    }

    let onMessageChange = () => {
        let textAreaValue = textArea.current.value;
        let action = updateNewMessageTextActionCreator(textAreaValue);
        props.dispatch(action)
    }

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
                    <textarea onChange ={onMessageChange} ref={textArea} value={props.dialog.newMessageText}></textarea>
                </div>
                <button className={addMessage} onClick={addMessage}>Отправить сообщение</button>
            </div>

        </div>
    )
}

export default Dialogs;