import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const MyPosts = (props) => {

    let propsItems = props.posts.map(p => <Post message={p.message} count={p.likesCount}/>)

    let addNewPost = (values) => {
       props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <MyPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {propsItems}
            </div>
        </div>

    )
}

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter text"} name={"newPostBody"} validate={[requiredField, maxLength10]} component={Textarea} />
        </div>
        <button>Add post</button>
    </form>
}

const MyPostReduxForm = reduxForm ({form:"MyNewPostForm"}) (MyPostForm)

export default MyPosts;