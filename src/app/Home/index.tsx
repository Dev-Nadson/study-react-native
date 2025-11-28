import { Text, View, Image } from 'react-native';
import { Button } from '@/src/components/Button';
import { home_styles } from './styles';

function Home() {
  return (
    <View style={home_styles.container}>
      <Text style={home_styles.text}>hello world!</Text>
      <Image style={home_styles.image} source={require("@/assets/home-assets/logo.png")} />
      <Button />
    </View>
  );
}

export { Home }