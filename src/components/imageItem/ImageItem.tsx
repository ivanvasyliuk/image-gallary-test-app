import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import s from './styles';

const ImageItem = ({image, index}) => {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.ImagePreview, {
      image: image,
    });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[s.container, index % 2 == 0 ? s.left : s.right]}>
        <Image
          style={s.image}
          source={{uri: image.links.download}}
          alt={image.alt_description}
        />
        <Text style={s.title}>{image.alt_description}</Text>
        <Text style={s.userNameTitle}>{image.user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ImageItem;
