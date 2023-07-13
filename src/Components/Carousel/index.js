//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../Theme/Colors';
import {
  fullHeight,
  fullWidth,
  moderateScale,
  verticalScale,
} from '../../Theme/Dimentions';
import {Fonts} from '../../Theme/Fonts';

// create a component
const Carousel = props => {
  const productData = props?.data;
  const imageData = productData?.images;
  console.log('productData', productData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const renderImage = ({item}) => {
    return (
      <View style={styles.imageView}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          pagingEnabled
          onScroll={event => {
            const x = event.nativeEvent.contentOffset.x;
            let activeIndex = Math.round(x / fullWidth);
            console.log('activeIndex', activeIndex);
            setCurrentIndex(activeIndex);
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={imageData}
          keyExtractor={item => item}
          renderItem={renderImage}
        />
        <View style={styles.dotView}>
          {imageData.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    width:
                      currentIndex === index
                        ? moderateScale(50)
                        : moderateScale(6),
                    height:
                      currentIndex === index
                        ? moderateScale(10)
                        : moderateScale(6),
                    borderRadius:
                      currentIndex === index
                        ? moderateScale(5)
                        : moderateScale(3),
                    backgroundColor:
                      currentIndex === index
                        ? COLORS.blue
                        : COLORS.backgroundMedium,
                  },
                ]}></View>
            );
          })}
        </View>

        <Text style={styles.name}>{productData?.title}</Text>
        <View style={styles.innerRow}>
          <Text style={styles.brand}>Brand - {productData?.brand}</Text>
          <Text style={styles.category}>
            Category - {productData?.category}
          </Text>
        </View>
        <Text style={styles.description}>
          Info - {productData?.description}
        </Text>
        <View style={styles.innerRow}>
          <Text style={[styles.price, {color: COLORS.textColor}]}>
            Price - <Text style={styles.price}>$ {productData?.price}</Text>
          </Text>
          <Text style={styles.discount}>
            {productData?.discountPercentage}% Off
          </Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    width: fullWidth * 0.9,
    height: fullHeight / 4,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  dotView: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(15),
  },
  dot: {
    margin: 5,
  },
  name: {
    fontSize: moderateScale(18),
    color: COLORS.black,
    fontFamily: Fonts.bold,
    letterSpacing: 0.3,
  },
  brand: {
    fontSize: moderateScale(14),
    color: COLORS.textColor,
    fontFamily: Fonts.regular,
    letterSpacing: 0.3,
    marginRight: verticalScale(10),
  },
  description: {
    fontSize: moderateScale(14),
    color: COLORS.textColor,
    fontFamily: Fonts.regular,
    letterSpacing: 0.3,
    marginTop: verticalScale(5),
  },
  innerRow: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontSize: moderateScale(14),
    color: COLORS.textColor,
    fontFamily: Fonts.regular,
    letterSpacing: 0.3,
  },
  price: {
    fontSize: moderateScale(14),
    color: COLORS.green,
    fontFamily: Fonts.regular,
    letterSpacing: 0.3,
    marginRight: verticalScale(10),
  },
  discount: {
    fontSize: moderateScale(14),
    color: COLORS.blue,
    fontFamily: Fonts.bold,
    letterSpacing: 0.3,
  },
});

//make this component available to the app
export default Carousel;
