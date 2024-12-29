import React, { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

import { Product } from "./Home";

interface FormProps {
  add: (product: Product) => void;
}

const Form: React.FC<FormProps> = ({ add }) => {
  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [quantity, setQuantity] = useState("");

  const handleAddProduct = () => {
    const product: Product = {
      name,

      description,

      price: parseFloat(price),

      quantity: parseInt(quantity, 10),
    };

    add(product);

    setName("");

    setDescription("");

    setPrice("");

    setQuantity("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product Name"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />

      <TextInput
        placeholder="Description"
        style={styles.input}
        value={description}
        onChangeText={value => setDescription(value)}
      />

      <TextInput
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={value => setPrice(value)}
      />

      <TextInput
        placeholder="Quantity"
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={value => setQuantity(value)}
      />

      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  input: {
    borderWidth: 1,

    borderColor: "#ccc",

    padding: 10,

    marginVertical: 5,
  },
});

export default Form;
