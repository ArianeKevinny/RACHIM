import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    width: '100%',
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  simpleHeader: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: 50,
    paddingHorizontal: 10,
  },
  welcomeContext: {
    width: '80%',
    alignItems: 'center',
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  screenTitle: {
    color: 'black',
    fontWeight: '700',
  },
  form: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    margin: 5,
    elevation: 2,
  },
  passwordRequirementsContext: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    margin: 10,
  },
  textButton: {
    fontWeight: "600",
    color: 'white',
    fontSize: 18,
  },
  textLinkContext: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textLink: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
});

export default styles;