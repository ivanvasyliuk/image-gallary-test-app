import {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import colors from '../../styles/colors';
import s from './styles';

const ImagePreview = () => {
  const [isLoadind, setIsLoading] = useState(false);
  const {params} = useRoute();
  const image = params.image;

  return (
    <View style={s.container}>
      <Image
        style={s.image}
        source={{uri: image.links.download}}
        alt={image.alt_description}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
      />
      <View style={s.loaderContainer}>
        {isLoadind && <ActivityIndicator size="large" color={colors.border} />}
      </View>
    </View>
  );
};
export default ImagePreview;
