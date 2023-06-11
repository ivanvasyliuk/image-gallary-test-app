import {Image, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import s from './styles';

const ImagePreview = () => {
  const {params} = useRoute();

  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{uri: params.image.links.download}}
        alt={params.image.alt_description}
      />
    </View>
  );
};
export default ImagePreview;
