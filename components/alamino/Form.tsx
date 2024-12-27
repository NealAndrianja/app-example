import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React from "react";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
    color: "#333",
  },
  field: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
    margin: 4,
  },
  button: {
    margin: 4,
    borderRadius: 10,
    padding: 5,
    textDecorationColor: "#fff",
  },
  success: {
    backgroundColor: "green",
  },
  error: {
    backgroundColor: "red",
  },
});

const Form = () => {
  return (
    <View style={styles.container}>
      <Text>Formulaire d'ajout de produit</Text>
      <View style={styles.field}>
        <Text>Nom du produit</Text>
        <TextInput placeholder="Nom du produit" style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text>Description du produit</Text>
        <TextInput placeholder="Description du produit" style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text>Prix du produit</Text>
        <TextInput placeholder="Prix du produit" style={styles.input} />
      </View>
      <View style={styles.field}>
        <Text>Quantité du produit</Text>
        <TextInput placeholder="Quantité du produit" style={styles.input} />
      </View>
      <View style={styles.field}>
        <View style={[styles.button, styles.error]}>
          <Button title="Réinitialiser" onPress={() => {}} color="white"  />
        </View>
        <View style={[styles.button, styles.success]}>
          <Button title="Ajouter" onPress={() => {}} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Form;
