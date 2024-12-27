import { View, Text, Button, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

type PersonProps = {
  name: string;
  initialAge: number;
};
const Person = ({ name, initialAge }: PersonProps) => {
  const [isMajor, setIsMajor] = useState(false);
  const [age, setAge] = useState(initialAge);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (age >= 18) {
      setIsMajor(true);
    } else {
      setIsMajor(false);
    }
  }, [age]);

  return (
    <View style={{ margin: 10 }}>
      <Text>Person's name is: {name}. Origin: {origin}</Text>
      <Text>Age: {age}</Text>
      <Text
        style={{
          backgroundColor: isMajor ? "green" : "red",
          width: 50,
          height: 40,
        }}
      ></Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 5,
          padding: 4,
          margin: 4,
        }}
        placeholder="Enter the origin of the person"
        defaultValue={origin}
        onChangeText={(e) => setOrigin(e)}
      ></TextInput>
      <Button onPress={() => setAge(age + 1)} title="Age + 1" />
      <Button onPress={() => setAge(age - 1)} title="Age - 1" />
    </View>
  );
};

export default Person;
