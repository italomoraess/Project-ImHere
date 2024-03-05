import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  const date = new Date();
  return(
    <View style={styles.container}>
      <Text key={1} style={styles.eventName} >Nome do evento</Text>
      <Text key={2} style={styles.eventDate}>{date.toUTCString()}</Text>

      <TextInput 
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor='#6b6b6b'
        keyboardType="numeric"
      />
    </View>
  );
}