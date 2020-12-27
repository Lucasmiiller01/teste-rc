import React, { useCallback, useState } from 'react';
import { Container, TextInput,ContainerContent, ContainerSearchInput, BtnSearch, ContainerItem, DescriptionItem, BtnFavor } from './styles';
import Header from '../../components/layout/headerAfterLogin';
import { useSelector } from 'react-redux';
import { handleGetChannel, handleAddChannelFavorite } from "../../store/ducks/channel"
import { FlatList, Image } from 'react-native';
import { useDispatch } from 'react-redux';

const MainScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
 
  const { data } = useSelector((state) => state.auth);
  const dataChannels = useSelector((state) => state.channel);

  const dispatch = useDispatch();

  const handleOnGetChannel = useCallback(
      () => {
        dispatch(handleGetChannel(search));
      },
      [dispatch]
  );

  const handleOnAddChannelFavorite = useCallback(
    (item) => {
      dispatch(handleAddChannelFavorite(item));
    },
    [dispatch]
  );

  const renderItem = ({ item }) => {
    const checkInArrayFavorite = dataChannels.channelsFavorite.find(i => i === item.etag);
    console.log(dataChannels.channelsFavorite)
    return <Item title={item.snippet.channelTitle} uri={item.snippet.thumbnails.default.url}  id={item.etag} isFavorite={checkInArrayFavorite}/>

  }
  

  const Item = ({ title, uri, id, isFavorite }) => (
    <ContainerItem>
      <Image source={{ uri }} style={{height: 50, width: 50}}/>
      <DescriptionItem>{title}</DescriptionItem>
      {!isFavorite && (
        <BtnFavor onPress={() => handleOnAddChannelFavorite({ title, uri, id })} />
      )}
    </ContainerItem>
  );

  return (
    <Container>
        <Header title={data?.name} scene="MyFavorites" navigation={navigation}/>
        <ContainerContent>
          <ContainerSearchInput>
              <TextInput placeholder="Channels"/>
              <BtnSearch  onPress={handleOnGetChannel} value={search} onChange={(e) => setSearch(e)}/>
          </ContainerSearchInput>
          <FlatList
            data={dataChannels.data}
            renderItem={renderItem}
            keyExtractor={item => item.etag}
          />
        </ContainerContent> 
      
    </Container>
  );
};





export default MainScreen;
