import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
    maxWidth: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  imageContext: {
    width: "20%",
    alignItems: "flex-start",
  },
  card: {
    width: "100%",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: "row",
  },
  cardTitle: {
    color: "#EDD224",
    fontWeight: "700",
    fontSize: 17,
    alignSelf: "center",
  },
  cardSubTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  cardResumo: {
    paddingHorizontal: 5,
    maxWidth: "70%",
    flexGrow: 1,
  },
  resumoLineContext: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: "center",
  },
  menuArrow: {alignItems: 'center', justifyContent: 'center', width: '10%'},
});

export default styles;
