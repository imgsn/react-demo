import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "react-native-vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={SearchBarStyle.background}>
      <Feather name="search" size={30} style={SearchBarStyle.iconStyle} />
      <TextInput
        style={SearchBarStyle.inputStyle}
        value={term}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const SearchBarStyle = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 30,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
