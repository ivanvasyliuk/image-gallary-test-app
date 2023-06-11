import {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';
import {fetchPhotos} from '../../stores/reducers/PhotosReducer';
import ImageItem from '../../components/ImageItem/ImageItem';
import colors from '../../styles/colors';
import s from './styles';

const keyExtractor = item => item.id;

const renderItem = ({item, index}) => <ImageItem index={index} image={item} />;

const GallaryScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadind, setIsLoadind] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(store => store.photoStore.photos);

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    setIsLoadind(true);

    dispatch(fetchPhotos())
      .unwrap()
      .finally(() => {
        setIsLoadind(false);
      });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    dispatch(fetchPhotos())
      .unwrap()
      .finally(() => {
        setRefreshing(false);
      });
  };

  return (
    <View style={s.container}>
      <FlashList
        style={s.container}
        contentContainerStyle={{paddingBottom: bottom}}
        data={list}
        numColumns={2}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        estimatedItemSize={200}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
      {isLoadind && !list.length && (
        <ActivityIndicator
          style={s.loader}
          size="large"
          color={colors.border}
        />
      )}
    </View>
  );
};
export default GallaryScreen;
