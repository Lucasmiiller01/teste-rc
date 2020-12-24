import React, {  useCallback }  from 'react';
import { useDispatch } from 'react-redux';
import {  TextBtn, BtnSignUp, TextInput, TextErrorInput } from "./styles";

import { Formik } from 'formik';
import { RegisterSchema } from "../../../utils/validations/registerSchema";
import { handleRegister } from '../../../store/ducks/register';

const FormRegister = () => {
    const dispatch = useDispatch();

    const handleOnPressRegister = useCallback(
        async (values)  => {
            dispatch(handleRegister(values));
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
            handleOnPressRegister(values)
        }}
        validationSchema={RegisterSchema}>   
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
                <BtnSignUp onPress={handleSubmit}>
                    <TextBtn>
                        Sign up
                    </TextBtn>    
                </BtnSignUp>
            </>
        )}
    </Formik>
  );
};

export default FormRegister;
