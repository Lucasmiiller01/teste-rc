import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #000000;
    flex: 1;
`;


export const ContainerBtn = styled.View`
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: white;
    
`;


export const TextBtn = styled.Text`
    color: ${props => props.color ? props.color : "white"};
    font-size: 18px;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "normal"};
    text-align: center;
`;



export const Title = styled.Text`
    color: black;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-vertical: 30px;

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

export const BtnSignUp = styled.TouchableOpacity`
    background-color: white;
    width: 260px;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`;


export const TextInput = styled.TextInput`
   background-color: #EBEBEB;
   width: 280px;
   height: 40px;
   text-align: center;
   margin-top: 10px;

`;