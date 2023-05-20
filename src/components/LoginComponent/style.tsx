import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    width: "100%",
    minHeight: '100%',
  },
  container: {
    flexGrow: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },
  loginScreenContext: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    width: "70%",
    margin: 5,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
    marginBottom: 30,
  },
  forgotPasswordContext: {
    width: "70%",
    alignItems: "center",
    margin: 5,
  },
  textLink: {
    color: "#72bcd4",
  },
  switchContext: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "70%",
    margin: 5,
    marginTop: 10,
    paddingLeft: 5,
  },
  loginButton: {
    width: '70%',
    margin: 10,
    borderRadius: 10,
  },
  orLineContext: {
    width: "90%",
    flexDirection: "row",
    maxWidth: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  line: {
    backgroundColor: "#ddd9ce",
    flexGrow: 1,
    height: 2,
    borderRadius: 5,
  },
  googleLoginContext: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    maxWidth: "70%",
    margin: 10,
  },
  googleLoginButton: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "100%",
    padding: 10,
    maxHeight: 40,
    borderRadius: 20,
    elevation: 3,
  },
  googleLoginText: {
    fontSize: 15,
    color: "black",
    flex: 1,
    textAlign: "center",
  },
  createAccountContext: {
    width: "70%",
    maxWidth: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
  },
});

export default styles;
