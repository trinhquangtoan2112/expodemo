import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constant/colors";
import ImagePicker from "./ImagePicker";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const changedTitleHandler = (enteredValue) => {
    setEnteredTitle(enteredValue);
  };
  return <ImagePicker />;
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
