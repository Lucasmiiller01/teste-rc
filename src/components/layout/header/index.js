import React from 'react';

import { ContainerIcon, Title, Icon, Container } from "./styles";


const Header = ({ title }) => {
  return (
    <Container>
        <ContainerIcon>
            <Icon/>
        </ContainerIcon>
        <Title>
            {title}
        </Title>
    </Container>


  )
}


export default Header;
