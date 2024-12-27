import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Form from './Form'

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
      width: '100%'
    },
    text: {
        textAlign: 'center',
      fontSize: 30,
      color: '#333',
    },
  
})

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alamino</Text>
      <Form/>
    </View>
  )
}

export default Home