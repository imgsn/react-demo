import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = ({ title, business }) => {
  //.log(business);
  return (
    <View style={ResultListStyle.container}>
      <Text style={ResultListStyle.title}>{title}</Text>
      <FlatList
        horizontal={true}
        data={business}
        keyExtractor={(item) => item.id}
        renderItem={(item) => {
          console.log(item);
          return <ResultsDetail result={item} />;
        }}
      />
    </View>
  );
};

const ResultListStyle = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
