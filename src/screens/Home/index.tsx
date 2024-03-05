import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  const date = new Date();

  function handleParticipantAdd() {
    console.log("Clicou aqui!!!")
  }

  return(
    <View style={styles.container}>
      <Text key={1} style={styles.eventName} >Nome do evento</Text>
      <Text key={2} style={styles.eventDate}>{date.toUTCString()}</Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
}