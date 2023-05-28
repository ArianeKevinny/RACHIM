import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    width: "100%",
    minHeight: "100%",
  },
  container: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
  dateInputButton: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "green",
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "white",
    alignSelf: "center",
  },
  calendarIconContext: {
    height: "100%",
    width: 50,
    minWidth: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  dateString: {
    fontSize: 18,
    color: "black",
  },
  dateInputView: {
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
    borderRightWidth: 1,
    justifyContent: "center",
    borderColor: "green",
  },
  titleContext: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
  },
  form: {
    width: "90%",
  },
  textInput: {
    marginBottom: 10,
  },
  submitButton: {
    height: 50,
    marginVertical: 20,
  },
  subFormTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },
  orLineContext: {
    width: "100%",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  line: {
    backgroundColor: "green",
    flexGrow: 1,
    height: 2,
    borderRadius: 5,
  },
});

export default styles;
