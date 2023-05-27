import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    minHeight: "100%",
    elevation: 10,
  },
  headerIsh: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
  },
  rachasListContext: {
    flexGrow: 1,
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
    paddingTop: 80,
    paddingBottom: 300,
  },
  cardContext: {
    width: "100%",
    margin: 10,
    elevation: 3,
  },
  drawerIcon: {
    position: "absolute",
    left: 5,
    top: 18,
    zIndex: 50,
    elevation: 5,
  },
  addRachaIcon: {
    position: "absolute",
    right: 15,
    zIndex: 10,
    bottom: 5,
  },
  searchBar: {
    height: 50,
    top: 20,
    left: 70,
    right: 5,
    backgroundColor: "white",
    zIndex: 50,
    position: "absolute",
  },
});

export default styles;
