import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexGrow: 1,
    alignItems: 'center',
    width: '100%',

  },
  IconShirtColor: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
  },
  shieldImage: {
    height: 64,
    width: 64,
  },
  corTime: {
    width: 15,
    height: 64,
  },
  nomeTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '100%',
    maxWidth: '100%',
    flexGrow: 1,
  },
  modalView: {
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
  }, 
  modalOptionView: {
    margin: 5,
    padding: 5,
  },
  modalOptionText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default styles;
