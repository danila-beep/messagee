import React, {ChangeEvent, useState} from 'react';
import {Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Text, VStack} from "@chakra-ui/react";

const Login = () => {
    // Local States
    const [name, setName] = useState<string>("")

    const [email, setEmail] = useState<string>("")

    const [password, setPassword] = useState<string>("")
    const [passwordShow, setPasswordShow] = useState<boolean>(false)


    // Handlers
    const nameOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const emailOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }
    const passwordOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
    }
    const showPasswordOnClickHandler = () => {
        setPasswordShow(!passwordShow)
    }

    const submitHandler = () => {

    }

    return (
        <VStack
            spacing={"20px"}
        >
            <FormControl id={"first-name"} isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder={"Enter your name"}
                    value={name}
                    onChange={nameOnChangeHandler}
                    borderColor={"var(--primary-dark-color)"}
                    focusBorderColor={"var(--primary-dark-color)"}
                />
            </FormControl>
            <FormControl id={"email"} isRequired>
                <FormLabel>E-Mail</FormLabel>
                <Input
                    type={"email"}
                    placeholder={"Enter your e-mail"}
                    value={email}
                    onChange={emailOnChangeHandler}
                    borderColor={"var(--primary-dark-color)"}
                    focusBorderColor={"var(--primary-dark-color)"}
                />
            </FormControl>
            <FormControl id={"password"} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={passwordShow ? "text" : "password"}
                        placeholder={"Enter your password"}
                        value={password}
                        onChange={passwordOnChangeHandler}
                        borderColor={"var(--primary-dark-color)"}
                        focusBorderColor={"var(--primary-dark-color)"}
                    />
                    <InputRightElement>
                        <Button size={"sm"} onClick={showPasswordOnClickHandler} marginRight={"15px"} p={"10px"} bg={"transparent"} _hover={{bg: "transparent"}}>
                            {passwordShow ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button
                w={"100%"}
                bg={"var(--primary-dark-color)"}
                color={"var(--primary-light-color)"}
                _hover={{
                    bg: "var(--primary-light-color)",
                    color: "var(--primary-dark-color)",
                    border: "1px solid var(--primary-dark-color)"
                }}
                onClick={submitHandler}
            >
                Login
            </Button>
            <Button
                w={"100%"}
                bg={"var(--warning-color)"}
                color={"var(--primary-light-color)"}
                _hover={{
                    bg: "var(--primary-light-color)",
                    color: "var(--warning-color)",
                    border: "1px solid var(--warning-color)"
                }}
                onClick={submitHandler}
            >
                Get Guest Credintials
            </Button>

        </VStack>
    )
};

export default Login;