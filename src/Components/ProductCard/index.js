//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Theme/Dimentions';
import {COLORS} from '../../Theme/Colors';
import {Fonts} from '../../Theme/Fonts';

// create a component
const ProductCard = props => {
  const item = props?.data;
  return (
    <TouchableOpacity
      onPress={props?.onPress}>
      <View style={styles.productView}>
        <Image
          source={{uri: item.thumbnail}}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      <Text style={styles.name}>{item.title}</Text>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.description}>
        {item.description}
      </Text>
      <Text style={styles.price}>$ {item.price}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  productView: {
    width: horizontalScale(150),
    height: verticalScale(150),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
  name: {
    marginTop: verticalScale(5),
    fontSize: moderateScale(16),
    color: COLORS.black,
    fontFamily: Fonts.semiBold,
    letterSpacing: 0.3,
  },
  description: {
    width: horizontalScale(150),
    fontSize: moderateScale(10),
    color: COLORS.black,
    fontFamily: Fonts.regular,
    letterSpacing: 0.3,
    marginBottom: verticalScale(5),
  },
  price: {
    fontSize: moderateScale(14),
    color: COLORS.green,
    fontFamily: Fonts.semiBold,
    letterSpacing: 0.3,
  },
});

//make this component available to the app
export default ProductCard;
