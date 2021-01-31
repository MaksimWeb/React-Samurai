import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let propsItems = props.posts.map(p => <Post message={p.message} count={p.likesCount}/>)

    let textArea = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let textAreaValue = textArea.current.value;
        let action = updateNewPostTextActionCreator(textAreaValue);
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={textArea} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {propsItems}
            </div>
        </div>

    )
}

export default MyPosts;