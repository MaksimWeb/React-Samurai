import React from "react";
import style from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return <div className={ + "" + hasError ? style.error : ""}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{"some error"}</span>}
    </div>
}