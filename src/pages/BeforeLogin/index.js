import React from 'react';
import { Container, ContainerBtn, BtnSignIn, BtnSignUp, TextBtn } from "./styles";
import Header from "../../components/layout/header";

const BeforeLoginScreen = ({ navigation }) => {
  return (
    <Container>
        <Header title="welcome to the jungle"/>
        <ContainerBtn>
            <BtnSignUp onPress={() => navigation.navigate("Register")}>
                <TextBtn>
                    Sign up
                </TextBtn>    
            </BtnSignUp>
            <BtnSignIn onPress={() => navigation.navigate("Login")}>
                <TextBtn>
                    Sign in
                </TextBtn>    
            </BtnSignIn>
        </ContainerBtn>
    </Container>

  );
};

export default BeforeLoginScreen;
