import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action)
    }

    let onMessageChange = (message) => {
        let action = updateNewMessageTextActionCreator(message);
        props.store.dispatch(action)
    }

    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} messagesPage={state} />
}

export default DialogsContainer;