import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginScreenContext: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    width: '70%',
    height: 40,
    margin: 10,
    marginBottom: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  loginScreenText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  button: {
    backgroundColor: 'green',
    height: 40,
    width: '70%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default styles;