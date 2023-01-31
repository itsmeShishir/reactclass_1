import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import userService from "../services/userService";
function Register() {
    const style = {
        display: "grid",
        placeItems: "center",
        width: "100%",
        backgroundColor: "blue",
        color: "white",
    }

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const [conformpassword, setconformpassword] = useState('');
    const [statue, setstatus] = useState(false);
    const [userstatue, usersetstatus] = useState(false);

    useEffect(() => {
        if (password !== conformpassword) {
            setstatus(true)
            return
        }
        setstatus(false)

    }, [password, conformpassword])

    useEffect(() => usersetstatus(username.length < 6 ? true : false), [username])
    const handleRegister = (event) => {
        event.preventDefault();
        console.log(username)
        console.log(password)
        userService.registerUser(username, password)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err))
    }
    return (
        <>
            <div className="container" style={style} >
                <h1> Book Review App</h1>
                <Form onSubmit={handleRegister}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input invalid={false}
                            id="exampleEmail"
                            name="name"
                            placeholder="Username"
                            type="name"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <FormFeedback>
                            username should be 5 characters
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password"
                            type="password"
                            value={password}
                            onChange={(event) => setpassword(event.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Consorm Password
                        </Label>
                        <Input invalid={statue}
                            id="conformPassword"
                            name="conformpassword"
                            placeholder="password"
                            type="password"
                            value={conformpassword}
                            onChange={(event) => { setconformpassword(event.target.value) }}
                        />
                        <FormFeedback>
                            Confoem password doesnot match with password
                        </FormFeedback>
                    </FormGroup>
                    <Button color="primary" outline>
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default Register
