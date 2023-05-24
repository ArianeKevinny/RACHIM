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
});

export default styles;
