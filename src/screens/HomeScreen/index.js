import React from "react";
import { View, Text, Button } from "react-native";
import Camera from "../../components/cameraView";
import styles from "./style";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, styles.text]}>Pose Estimate App</Text>
      </View>
      <View style={styles.body}>
        <Camera />
      </View>
      <View style={styles.footer}>
        <Text>Result:..........</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
