import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // chosenNumber가 숫자가 아니라서 변환에 실패하면 True를 반환한다.
      // show alert ...
      // alert의 첫번째 인수는 title, 두번째 인수는 message, 세번째 인수는 경고창 버튼
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: setEnteredNumber },
      ]);
      return;
    }

    console.log('Valid number!');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad" // 숫자 패드 사용
        autoCapitalize="none" // 첫글자 대문자 취소
        autoCorrect={false} // 자동수정 기능 off
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // 그림자, 안드로이드용, 0~8
    shadowColor: 'black', // 그림자, ios용
    shadowOffset: { width: 0, height: 2 }, // 그림자 가로, 세로 늘어남, 단위 픽셀
    shadowRadius: 6, // 그림자가 얼마나 번지는지
    shadowOpacity: 0.25, // 그림자 투명도
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
