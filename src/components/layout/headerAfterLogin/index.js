import React, { useCallback } from 'react';

import { ContainerIcon, Title, Icon, Container, BtnLogout, TextLogout, BtnChangeScene } from "./styles";
import { logout } from '../../../store/ducks/auth';
import { useDispatch } from "react-redux";


const HeaderAfterLogin = ({ title, scene,  navigation }) => {
  const dispatch = useDispatch();

  const handleOnLogout = useCallback(
      ()  => {
          dispatch(logout());
      },
      [dispatch]
  );
  return (
    <Container>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <Title>
            {title}
        </Title>
        {scene && (
          <BtnChangeScene onPress={() => navigation.navigate(scene)}/>
        )}
        <BtnLogout onPress={handleOnLogout}>
          <TextLogout>
            sair
          </TextLogout>
        </BtnLogout> 
    </Container>


  )
}


export default HeaderAfterLogin;
