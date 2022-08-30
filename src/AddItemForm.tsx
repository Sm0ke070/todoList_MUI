import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {AddBox} from "@mui/icons-material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<boolean>(false)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError(true);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField
            variant='outlined'
            value={title}
            label={error?"Title is required":"Add Title"}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            error={error}
            helperText={error}
        />
        <IconButton
            color='primary'
            onClick={addItem}>
            <AddBox/>
        </IconButton>

    </div>
}
