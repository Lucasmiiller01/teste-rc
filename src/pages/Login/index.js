import React from 'react';
import { Container, ContainerBtn, Title, TextBtn, BtnSignUp, TextError } from "./styles";
import Header from "../../components/layout/header";
import Form from './Form';
import { useSelector } from 'react-redux';

const LoginScreen = ({ navigation }) => {
   const { errorsForm } = useSelector((state) => state.auth);
  return (
    <Container>
        <Header title="welcome to the jungle"/>
        <ContainerBtn>
            <Title>
                Welcome
            </Title>
            {errorsForm && (
                <TextError>
                    {errorsForm}
                </TextError>   
            )}
            <Form/>
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
