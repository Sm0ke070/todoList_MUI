import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddItemFormType = {
    addItem: (title: string) => void,
}

const AddItemForm: React.FC<AddItemFormType> = (props) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)


    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }        //onChangeHandler
    const onKeyDownAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            onClickAddItem();
        }
    }      //onKeyPressHandler
    const onClickAddItem = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.addItem(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    return (
        <div>
            <input value={title}
                   onChange={onChangeSetTitle}
                   onKeyPress={onKeyDownAddItem}
                   className={error ? "error" : ""}
            />
            <button onClick={onClickAddItem}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default AddItemForm;