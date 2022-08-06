import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string,
    changeTitle:(newTitle:string)=>void,
}

const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    let [title, setTitle] = useState<string>(props.title)
    const onEditMode = () => setEditMode(true)
    const offEditMode = () => {
        setEditMode(false)
        props.changeTitle(title)
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        editMode
            ? <input
                value={title}
                onChange={onChangeSetTitle}
                autoFocus
                onBlur={offEditMode}/>

            : <span onDoubleClick={onEditMode}>{props.title}</span>
    )
        ;
};

export default EditableSpan;