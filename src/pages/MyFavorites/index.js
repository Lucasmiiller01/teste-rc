import React, { useEffect } from 'react';
import { Container, ContainerContent, ContainerItem, DescriptionItem, BtnFavor, Title } from './styles';
import Header from '../../components/layout/headerAfterLogin';
import { useSelector } from 'react-redux';
import { handleGetChannelFavorite } from "../../store/ducks/channel";
import { FlatList, Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';

const MyFavorites = () => {
 
  const { data } = useSelector((state) => state.auth);
  const dataChannels = useSelector((state) => state.channel);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetChannelFavorite());
  }, []);


  const renderItem = ({ item }) => (
    <Item name={item.name} uri={item.url}  id={item.id} />
  )
  
  const Item = ({ name, uri }) => (
    <ContainerItem>
      <Image source={{ uri }} style={{height: 50, width: 50}}/>
      <DescriptionItem>{name}</DescriptionItem>
      <BtnFavor />
    </ContainerItem>
  );

  return (
    <Container>
        <Header title={data?.name} />
        <ContainerContent>
          <Title>
            My favorites
          </Title>
          <FlatList
            data={dataChannels.channelsFavorite}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ContainerContent> 
      
    </Container>
  );
};





export default MyFavorites;
