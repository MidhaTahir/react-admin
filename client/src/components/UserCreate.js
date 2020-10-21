import { TextField } from '@material-ui/core';
import React from 'react'
import { Create, SimpleForm, TextInput } from "react-admin";
const UserCreate = (props) => {
    return (
        <Create title="Create a User" {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate
