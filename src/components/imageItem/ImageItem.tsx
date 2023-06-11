import {Image, Text, View} from 'react-native';
import s from './styles';

const ImageItem = image => {
  console.log('imageItem', image.image);
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{uri: image.image.links.self}}
        alt={image.alt_description}
      />
    </View>
  );
};
export default ImageItem;
