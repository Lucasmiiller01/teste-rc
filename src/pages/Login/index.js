import React from 'react';
import { Container, ContainerBtn, BtnSignIn, Title, TextBtn, BtnSignUp, TextInput } from "./styles";
import Header from "../../components/layout/header";

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
        <Header title="welcome to the jungle"/>
        <ContainerBtn>
            <Title>
                Welcome
            </Title>
            <TextInput placeholder={"User"}>
            </TextInput>    
            <TextInput placeholder={"Password"} secureTextEntry={true}>
            </TextInput>   
            <BtnSignIn>
                <TextBtn>
                    Sign in
                </TextBtn>    
            </BtnSignIn>
            <BtnSignUp>
                <TextBtn color={'black'} fontWeight="bold" onPress={() => navigation.navigate("Register")}>
                    new user
                </TextBtn>    
            </BtnSignUp>
        </ContainerBtn>
    </Container>

  );
};

export default LoginScreen;
