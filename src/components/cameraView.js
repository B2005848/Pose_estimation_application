import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { InferenceSession, Tensor } from "onnxruntime-react-native";

const PostureRecognition = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [session, setSession] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");

      // Tải mô hình ONNX
      try {
        const session = await InferenceSession.create("path/to/model.onnx"); // Đường dẫn tới mô hình ONNX của bạn
        setSession(session);
      } catch (error) {
        console.error("Error loading the model:", error);
      }
    })();
  }, []);

  const handlePrediction = async (imageData) => {
    try {
      const tensorInput = new Tensor("float32", imageData, [1, 3, 224, 224]); // Thay đổi theo mô hình của bạn
      const feeds = { input: tensorInput };

      const output = await session.run(feeds);
      setPrediction(output.output); // 'output' là tên của output trong mô hình ONNX
      console.log("Prediction result:", output.output);
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      const imageData = processImage(photo.base64); // Xử lý ảnh để đưa vào mô hình
      handlePrediction(imageData);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 10 }}
        onPress={takePicture}
      >
        <Text style={{ color: "white" }}>Capture & Predict</Text>
      </TouchableOpacity>
      {prediction && <Text>Prediction: {JSON.stringify(prediction)}</Text>}
    </View>
  );
};

export default PostureRecognition;
