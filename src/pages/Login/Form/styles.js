import styled from 'styled-components/native';


export const TextBtn = styled.Text`
    color: ${props => props.color ? props.color : "white"};
    font-size: 18px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "normal"};
    text-align: center;
`;

export const TextErrorInput = styled.Text`
    color: red;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
`;


export const BtnSignIn = styled.TouchableOpacity`
    background-color: black;
    margin-top: 10px;
    width: 260px;
    height: 60px;
    border-radius: 30px;
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