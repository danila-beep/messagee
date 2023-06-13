import React from 'react';
import {Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import Login from "../../components/Auth/Login";
import Signup from "../../components/Auth/Signup";

const Homepage = () => {
    return (
        <Container maxW={"xl"} centerContent>
            <Box
                display={"flex"}
                justifyContent={"center"}
                padding={"3"}
                bg={"var(--primary-light-color)"}
                w={"100%"}
                m={"40px 0 15px 0"}
                borderRadius={"lg"}
                borderWidth={"1px"}
            >
                <Text fontSize={"4xl"} fontFamily={"Roboto"} color={"var(--secondary-dark-color)"}>
                    Messagee
                </Text>
            </Box>
            <Box
                bg={"var(--primary-light-color)"}
                w={"100%"}
                p={4}
                borderRadius={"lg"}
                borderWidth={"1px"}
            >
                <Tabs isFitted variant='enclosed'>
                    <TabList
                        gap={"10px"}
                        borderBottom={"1px"}
                    >
                        <Tab
                            mb='1em'
                            bg={"var(--primary-dark-color)"}
                            color={"var(--primary-light-color)"}
                            borderRadius={"lg"}
                            borderWidth={"2px"}
                            _selected={{
                                bg: "var(--primary-light-color)",
                                color: "var(--primary-dark-color)",
                                border: "1px solid var(--primary-dark-color)"
                            }}
                        >One</Tab>
                        <Tab
                            mb='1em'
                            bg={"var(--primary-dark-color)"}
                            color={"var(--primary-light-color)"}
                            borderWidth={"2px"}
                            borderRadius={"lg"}
                            _selected={{
                                bg: "var(--primary-light-color)",
                                color: "var(--primary-dark-color)",
                                border: "1px solid var(--primary-dark-color)"
                            }}
                        >
                            Sign Up
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login/>
                        </TabPanel>
                        <TabPanel>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    );
};

export default Homepage;