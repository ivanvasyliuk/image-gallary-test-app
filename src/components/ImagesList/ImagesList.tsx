import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import ImageItem from '../../components/ImageItem/ImageItem';
import s from './styles';

const ImagesList = ({list}) => {
  return (
    <View style={s.container}>
      <FlashList
        data={list}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <ImageItem index={index} image={item} />}
        estimatedItemSize={200}
      />
    </View>
  );
};
export default ImagesList;
