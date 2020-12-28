import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #ffffff;
    flex: 1;
`;

export const ContainerContent = styled.View`
    margin: 20px;
    flex: 1;

`;

export const ContainerSearchInput = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const TextInput = styled.TextInput`
   background-color: #EBEBEB;
   width: 280px;
   height: 40px;
   text-align: left;
   margin-top: 10px;
`;

export const BtnChangeSchene = styled.TouchableOpacity`
   background-color: black;
   width: 40px;
   height: 40px;
`;

export const BtnSearch = styled.TouchableOpacity`
    background-color: black;
    width: 40px;
    height: 40px;
    margin-top: 7px;
    margin-left: 20px;
`;


export const ContainerItem = styled.View`
   flex-direction: row;
   margin: 20px;

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