//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../Theme/Colors';
import {horizontalScale} from '../../Theme/Dimentions';

// create a component
const Container = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(20),
    backgroundColor: COLORS.nearlyWhite,
  },
});

//make this component available to the app
export default Container;
