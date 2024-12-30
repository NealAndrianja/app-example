import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Form from "./Form";
import ProductList from "./ProductList";
import { Link } from "expo-router";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#333",
  },
});

export interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);


const addProduct = (product: Product) => {
    setProducts([...products, product]);
};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alamino</Text>
      <Form add={addProduct}/>
      <ProductList products={products}/>
      <View>
        <Link href="/Products">View Products</Link>
      </View>
    </View>
  );
};

export default Home;
