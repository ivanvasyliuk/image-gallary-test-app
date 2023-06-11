import {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import screens from '../../navigation/screens';
import colors from '../../styles/colors';
import s from './styles';

const ImageItem = ({image, index}) => {
  const [isLoadind, setIsLoading] = useState(false);
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate(screens.ImagePreview, {
      image,
    });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[s.container, index % 2 == 0 ? s.left : s.right]}>
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
          {isLoadind && (
            <ActivityIndicator size="large" color={colors.border} />
          )}
        </View>

        <Text style={s.title} numberOfLines={2}>
          {image.alt_description}
        </Text>

        <Text style={s.userNameTitle} numberOfLines={2}>
          {image.user.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ImageItem;
