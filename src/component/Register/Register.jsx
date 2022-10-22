import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/ProviderContext';

const Register = () => {
    const [accepted, setaccepted] = useState(false);
    const { registerInProvider, updateUserProfile } = useContext(AuthContext)


    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        registerInProvider(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                handleUpdateUserProfile(name, photourl)
            })
            .catch(error => console.error(error))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    const checkedBoxHandle = (event) => {
        const selecter = event.target.checked;
        setaccepted(selecter);
    }
    return (
        <Form onSubmit={handleLoginForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Write your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL link</Form.Label>
                <Form.Control type="text" name='photourl' placeholder="Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={checkedBoxHandle} type="checkbox" label="I Agree All Terms and Condition" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Submit
            </Button>
        </Form>
    );
};

export default Register;