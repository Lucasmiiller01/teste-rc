import styled from 'styled-components/native';



export const Container = styled.View`
    width: 100%;
    height: 104px;
    background-color: black;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

export const ContainerIcon = styled.View`
  background-color: #fff;
  width: 30px;
  height: 30px;
  margin-horizontal: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const BtnLogout = styled.TouchableOpacity`
  background-color: #fff;
  width: 30px;
  height: 30px;
  margin-horizontal: 20px;
  position: absolute;
  right: 0px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const BtnChangeScene = styled.TouchableOpacity`
  background-color: #fff;
  width: 20px;
  height: 20px;
  margin-horizontal: 20px;
  position: absolute;
  right: 50px;
  border-radius: 50px;

`;

export const Icon = styled.View`
  background-color: black;
  width: 15px;
  height: 15px;
  border-radius: 5px;

`;


export const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: normal;
`;


export const TextLogout = styled.Text`
  color: black;
  font-size: 11px;
  font-weight: bold;
  
`;
