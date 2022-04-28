import React, { useState } from "react";
import { View, Text } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { TextInput, TouchableOpacity } from "react-native-web";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);

  const signUpHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
      })
      .catch((err) => {
        alert(err);
      });
    console.log("Signed up");
    setEmail("");
    setPassword("");
  };
  return (
    <View>
      <Text>Sign In Screen</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity onPress={signUpHandler}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
