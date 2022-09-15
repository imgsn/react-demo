import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import UserBusiness from "../helpers/UseResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //const [result, setResult] = useState([]);
  const [searchApi, result, error] = UserBusiness();

  return (
    <View style={SearchScreenStyles.background}>
      <SearchBar term={term} onTermChange={(newterm) => setTerm(newterm)} />
      <Text>Search Screen</Text>

      <Text>{result.length}</Text>
      <Text>{error}</Text>
      <ResultList title="Set#1" business={result} />
      <ResultList title="Set#2" business={result} />
      <ResultList title="Set#3" business={result} />
    </View>
  );
};

const SearchScreenStyles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
  },
});

export default SearchScreen;
