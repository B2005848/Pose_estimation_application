import axios from "axios";

export const processFrame = async (imageData) => {
  const formData = new FormData();
  // hình ảnh gửi dạng đóng gói
  formData.append("image", {
    uri: imageData.uri,
    type: imageData.type,
    name: imageData.fileName,
  });

  try {
    const result = await axios.post(
      "http://<your-server-ip>:5000/predict",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

/*Example result api from model return ????
{
  "predictions": [
    {
      "class": "sitting_good",
      "confidence": 0.95,
      "coordinates": {
        "x": 100,
        "y": 200,
        "width": 50,
        "height": 100
      }
    },
    {
      "class": "sitting_bad",
      "confidence": 0.88,
      "coordinates": {
        "x": 120,
        "y": 250,
        "width": 60,
        "height": 110
      }
    }
  ]
}

*/
