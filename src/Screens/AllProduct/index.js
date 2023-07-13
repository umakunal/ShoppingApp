//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Container from '../../Components/Container';
import {
  fullHeight,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Theme/Dimentions';
import {IconPath} from '../../Theme/IconPath';
import {COLORS} from '../../Theme/Colors';
import {Fonts} from '../../Theme/Fonts';

// create a component
const Allproducts = props => {
  const routeData = props.route.params?.data;
  const category = props.route.params?.category;
  let categoryName = category.replace('-', ' ');
  let convertedName = categoryName.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  console.log('routeData', routeData);

  const renderProductsItem = ({item}) => {
    return (
      <View>
        <View style={styles.productItem}>
          <Image source={{uri: item.thumbnail}} style={styles.image} />
        </View>
        <Text style={styles.name}>{item.title}</Text>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    );
  };
  return (
    <Container>
      <View style={styles.navSection}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}>
          <Image source={IconPath.back} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.category}>{convertedName}</Text>
        <Image source={IconPath.bag} style={styles.bag} />
      </View>

      <View style={styles.productListView}>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={routeData}
          renderItem={renderProductsItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  navSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(5),
  },
  backButton: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  bag: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
  category: {
    fontSize: moderateScale(16),
    color: COLORS.textColor,
    fontFamily: Fonts.medium,
    letterSpacing: 0.3,
  },
  productListView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productItem: {
    height: fullHeight * 0.3,
    width: horizontalScale(150),
    borderRadius: moderateScale(10),
    overflow: 'hidden',
    backgroundColor: COLORS.red,
    margin: moderateScale(8),
  },
  image: {
    width: horizontalScale(150),
    height: fullHeight * 0.3,
    resizeMode: 'cover',
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
export default Allproducts;
