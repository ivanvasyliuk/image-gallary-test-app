import {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImagesList from '../../components/ImagesList/ImagesList';
import {fetchPhotos} from '../../stores/reducers/photosReducer';
import s from './styles';

const GallaryScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector(store => store.photos.items);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View style={s.container}>
      <ImagesList list={list} />
    </View>
  );
};
export default GallaryScreen;
