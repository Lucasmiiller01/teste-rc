import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #000000;
    flex: 1;
`;

export const TextError = styled.Text`
    color: red;
    font-size: 12px;
    font-weight: normal;
    text-align: center;
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


export const BtnSignUp = styled.TouchableOpacity`
    background-color: white;
    width: 260px;
    height: 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;

`;


