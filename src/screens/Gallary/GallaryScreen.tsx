import {FlashList} from '@shopify/flash-list';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import ImageItem from '../../components/ImageItem/ImageItem';
import {fetchPhotos} from '../../stores/reducers/mainReducer';
import {store} from '../../stores/RootStore';
import s from './styles';

const GallaryScreen = () => {
  const dispatch = useDispatch();
  const list = store.getState().photos.items;
  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View style={s.container}>
      {list.map((item, index) => (
        <ImageItem key={index} image={item} />
      ))}
      <FlashList
        data={list}
        renderItem={({item, index}) => <ImageItem index={index} image={item} />}
        estimatedItemSize={200}
      />
    </View>
  );
};
export default GallaryScreen;
