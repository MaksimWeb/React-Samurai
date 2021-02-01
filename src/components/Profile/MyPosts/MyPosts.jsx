import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let propsItems = props.posts.map(p => <Post message={p.message} count={p.likesCount}/>)

    let textArea = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let textAreaValue = textArea.current.value;
        props.updateNewPostText(textAreaValue);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={textArea} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {propsItems}
            </div>
        </div>

    )
}

export default MyPosts;