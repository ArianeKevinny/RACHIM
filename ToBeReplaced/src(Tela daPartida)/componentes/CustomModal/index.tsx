import React from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';

import styles from './style';

const CustomModal = ({visible, onRequestClose, children, style}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.centeredView}>

        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={[styles.modalView, style]}>{children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;
