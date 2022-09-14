import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  const searchApi = async () => {
    var response = await yelp.get("/search", {
      params: {
        location: "De",
        limit: 50,
      },
    });
    setResult(response.data.businesses);
    console.log(result);
  };

  searchApi();
  return (
    <View style={SearchScreenStyles.background}>
      <SearchBar term={term} onTermChange={(newterm) => setTerm(newterm)} />
      <Text>Search Screen</Text>
      <Text>{term.length}</Text>
      <Text>{result.length}</Text>
    </View>
  );
};

const SearchScreenStyles = StyleSheet.create({
  background: { backgroundColor: "#FFFFFF" },
});

export default SearchScreen;
