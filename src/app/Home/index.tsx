import { Text, View, Image, Button } from 'react-native';
import { styles } from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello world!</Text>
      <Image style={styles.image} source={require("@/assets/home-assets/logo.png")} />
      <Button title='Compre agora!' />
    </View>
  );
}

export { Home }