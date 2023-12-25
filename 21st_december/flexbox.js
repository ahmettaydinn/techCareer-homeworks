import { Text, SafeAreaView, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, { backgroundColor: "#EB7562" }]}>
        <Text> </Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#8DC4BB" }]}>
        <Text> </Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#F1982E" }]}>
        <Text> </Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#317389" }]}>
        <Text> </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    gap: 25,
  },
  box: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
  },
});
