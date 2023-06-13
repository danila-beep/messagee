import React, {ChangeEvent, useState} from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    VStack
} from "@chakra-ui/react";

type FileType = FileList | null

const Signup = () => {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


    // Local States
    const [name, setName] = useState<string>("")

    const [email, setEmail] = useState<string>("")
    const [emailError, setEmailError] = useState<boolean>(true)

    const [password, setPassword] = useState<string>("")
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(true)

    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [matchPasswordError, setMatchPasswordError] = useState<boolean>(true)

    const [pic, setPic] = useState()

    // Error Checkers
    const isEmailValid = (value: typeof email) => {
        return EMAIL_REGEXP.test(value)
    }
    const isPasswordValid = (value: typeof password) => {
        if (
            value.length > 8 &&
            value.match(/[A-Z]/) &&
            value.match(/[a-z]/)
        ){
            return true
        }
    }
    const isPasswordMatch = (value: typeof password) => {
        if (password === value){
            return true
        }
    }

    // Handlers
    const nameOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const emailOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
        if (!isEmailValid(email)){
            setEmailError(true)
        } else if(isEmailValid(email)){
            setEmailError(false)
        }
    }
    const passwordOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value)
        if (!isPasswordValid(password)){
            setPasswordError(true)
        } else if(isPasswordValid(password)){
            setPasswordError(false)
        }
    }
    const showPasswordOnClickHandler = () => {
      setPasswordShow(!passwordShow)
    }
    const confirmPasswordOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.currentTarget.value)
        if (isPasswordMatch(confirmPassword)) {
            setMatchPasswordError(false)
        }
    }
    const postDetails = (pics: FileType) => {}
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
                {emailError
                    ? <Text
                        mt={"5px"}
                        color={"var(--warning-color)"}
                        fontSize={"small"}
                    >Email is incorrect.</Text>
                    : <Text
                        mt={"5px"}
                        color={"green"}
                        fontSize={"small"}
                    >Email correct.</Text>
                }
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
                {passwordError
                    ? <Text
                        mt={"5px"}
                        color={"var(--warning-color)"}
                        fontSize={"small"}
                    >Password must be minimum eight characters, at least one letter and one number:</Text>
                    : <Text
                        mt={"5px"}
                        color={"green"}
                        fontSize={"small"}
                    >Password is correct.</Text>
                }
            </FormControl>
            <FormControl id={"confirmPassword"} isRequired>
                <FormLabel>Confirm your password</FormLabel>
                <Input
                    type={"password"}
                    placeholder={"Re-Enter your password"}
                    value={confirmPassword}
                    onChange={confirmPasswordOnChangeHandler}
                    borderColor={"var(--primary-dark-color)"}
                    focusBorderColor={"var(--primary-dark-color)"}
                />
                {matchPasswordError
                    ? <Text
                        mt={"5px"}
                        color={"var(--warning-color)"}
                        fontSize={"small"}
                    >Password doesn't match each other</Text>
                    : undefined
                }
            </FormControl>
            <FormControl id={"pic"}>
                <FormLabel>Add your profile image <span style={{opacity: "0.7"}}>(optional)</span> </FormLabel>
                <Input
                    borderWidth={"0"}
                    type={"file"}
                    p={"0"}
                    accept={"image/*"}
                    onChange={(e) => {
                        postDetails(e.currentTarget.files)
                    }}
                />
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
                Sign Up
            </Button>

        </VStack>
    );
};

export default Signup;