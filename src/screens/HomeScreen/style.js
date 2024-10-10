import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  text: {
    fontFamily: "Open Sans-Bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 25,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
    width: "100%",
  },

  body: {
    flex: 6,
    justifyContent: "center",
  },

  footer: {
    flex: 3,
    marginHorizontal: 50,
    marginVertical: 50,
  },
});

export default styles;
