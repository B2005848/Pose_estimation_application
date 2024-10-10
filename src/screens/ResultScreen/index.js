import React from "react";
import { View } from "react-native";
import ResultView from "../../components/resultView";

const ResultScreen = ({ route }) => {
  const { result } = route.params;

  return (
    <View>
      <ResultView result={result} />
    </View>
  );
};

export default ResultScreen;
