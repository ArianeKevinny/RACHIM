import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    width: '100%',
    padding: 5,
  },
  placar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  tempo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 3,
  },
  versusIcon: {
    height: 24,
    width: 24,
  },
  placarText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    backgroundColor: 'white',
    margin: 5,
    padding: 30,
  }, 
  modalText: {
    fontSize: 16,
    fontWeight: '700',
  },
  inputContextView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 10,
    paddingVertical: 1,
  },
  modalTextInput: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textInputAffix: {
    marginHorizontal: 5,
  },
  submitText: {
    alignSelf: 'flex-end',
    color: 'green',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
