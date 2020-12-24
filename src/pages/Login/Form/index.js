import React, {  useCallback }  from 'react';
import { useDispatch } from 'react-redux';
import {  TextBtn, BtnSignIn, TextInput, TextErrorInput } from "./styles";

import { Formik } from 'formik';
import { LoginSchema } from "../../../utils/validations/loginSchema";
import { handleAuth } from '../../../store/ducks/auth';

const FormLogin = () => {
    const dispatch = useDispatch();

    const handleOnPressLogin = useCallback(
        async (values)  => {
            dispatch(handleAuth(values));
        },
        [dispatch]
    );

  return (
    <Formik
        initialValues={{
            name: '',
            password: '',
        }}
        onSubmit={(values) => {
            handleOnPressLogin(values)
        }}
        validationSchema={LoginSchema}
        >   
        {({
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
        }) =>
        (
            <>
                <TextInput placeholder={"User"} onChangeText={handleChange('name')}/>
                {errors.name && (
                    <TextErrorInput>
                        {errors.name}
                    </TextErrorInput>    
                )}  
                <TextInput placeholder={"Password"} secureTextEntry={true} onChangeText={handleChange('password')}/>
                {errors.password && (
                    <TextErrorInput>
                        {errors.password}
                    </TextErrorInput>    
                )}  
                <BtnSignIn onPress={handleSubmit}>
                    <TextBtn>
                        Sign in
                    </TextBtn>    
                </BtnSignIn>
            </>

        )}
    </Formik>
  );
};

export default FormLogin;
