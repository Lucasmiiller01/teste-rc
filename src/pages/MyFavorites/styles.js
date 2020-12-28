import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #ffffff;
    flex: 1;
`;

export const ContainerContent = styled.View`
    margin: 20px;
    flex: 1;

`;

export const ContainerItem = styled.View`
   flex-direction: row;
   margin: 20px;
`;

export const Title = styled.Text`
   margin-left: 20px;
   font-size: 28px;
   font-weight: bold;
`;
export const DescriptionItem = styled.Text`
  color: #AFAFAF;
  align-self: center;
  margin-left: 20px;
`;

export const BtnFavor = styled.TouchableOpacity`
   background-color: black;
   width: 20px;
   height: 20px;
   border-radius: 5px;
   align-self: center;
   position: absolute;
   right: 10px; 
`;