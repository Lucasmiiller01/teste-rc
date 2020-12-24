import React from 'react';
import { Container, ContainerBtn, BtnSignIn, Title, TextBtn, TextError} from "./styles";
import Header from "../../components/layout/header";

import Form from './Form';
import { useSelector } from 'react-redux';

const RegisterScreen = ({ navigation }) => {
    const { errorsForm } = useSelector((state) => state.register);
  return (
    <Container>
        <Header title="welcome to the jungle"/>
        <ContainerBtn>
            <Title>
                Create new user
            </Title>
            {errorsForm && (
                <TextError>
                    {errorsForm}
                </TextError>   
            )}
            <Form/>
            <BtnSignIn>
                <TextBtn color={'black'} fontWeight="bold" onPress={() => navigation.navigate("Login")}>
                    login
                </TextBtn>    
            </BtnSignIn>
        </ContainerBtn>
    </Container>

  );
};

export default RegisterScreen;
