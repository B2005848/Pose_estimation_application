import React from "react";
import { View, Text } from "react-native";

const ResultView = ({ result }) => {
  return (
    <View>
      <Text>{result ? "Tư thế ngồi đúng!" : "Cảnh báo: Tư thế ngồi sai!"}</Text>
    </View>
  );
};

export default ResultView;
