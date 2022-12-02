import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // 그림자, 안드로이드용, 0~8
    shadowColor: 'black', // 그림자, ios용
    shadowOffset: { width: 0, height: 2 }, // 그림자 가로, 세로 늘어남, 단위 픽셀
    shadowRadius: 6, // 그림자가 얼마나 번지는지
    shadowOpacity: 0.25, // 그림자 투명도
  },
});

export default Card;
