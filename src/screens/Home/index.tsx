import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "igor",
    "jonny",
    "cirino",
    "de",
    "matos",
    "geni",
    "jair",
    "pereira",
    "tais",
    "thays",
  ];

  function handleParticipantAdd() {
    if (participants.includes("igor")) {
      return Alert.alert("participante existe", "ja existe um participante");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("remover", `deseja remover ${name}`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("deletado"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda ? adicione o participante a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
