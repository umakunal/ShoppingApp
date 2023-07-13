//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../../Redux/Api/ProductApi/fetchProduct';
import {
  fullHeight,
  fullWidth,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Theme/Dimentions';
import Container from '../../Components/Container';
import {IconPath} from '../../Theme/IconPath';
import {COLORS} from '../../Theme/Colors';
import {Fonts} from '../../Theme/Fonts';
import Carousel from '../../Components/Carousel';
import ProductCard from '../../Components/ProductCard';

// create a component
const Home = () => {
  const dispatch = useDispatch();
  const {isLoading, error, productData} = useSelector(state => state.products);
  const [ModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    dispatch(fetchProducts(100));
  }, []);
  let AllProducts = [];
  if (productData.length > 0) {
    AllProducts = productData;
  }
  let AllCategories = [];
  AllProducts.map(data => {
    if (!AllCategories.includes(data.category)) {
      AllCategories.push(data.category);
    }
  });
  const renderProductsItem = ({item}) => {
    return (
      <ProductCard
        data={item}
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      />
    );
  };
  return (
    <Container>
      <View style={styles.navSection}>
        <Image source={IconPath.location} style={styles.icon} />
        <Text style={styles.location}>Siliguri, India</Text>
        <Image source={IconPath.bag} style={styles.icon} />
      </View>

      <Text style={[styles.title, {color: COLORS.textColor, marginBottom: 0}]}>
        Find The Most{' '}
        <Text style={[styles.title, {color: COLORS.blue}]}>
          Desirable Products
        </Text>
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : (
          <View style={styles.productListView}>
            {AllCategories.map(category => {
              let categoryName = category.replace('-', ' ');
              let convertedName = categoryName.replace(/(^\w|\s\w)/g, m =>
                m.toUpperCase(),
              );
              return (
                <View key={category}>
                  <View style={styles.headerRow}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      {convertedName}
                    </Text>
                    <TouchableOpacity style={styles.innerRow}>
                      <Text style={styles.all}>See All</Text>
                      <Image source={IconPath.forward} style={styles.forward} />
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    data={AllProducts.filter(
                      product => product?.category === category,
                    )}
                    ItemSeparatorComponent={() => (
                      <View style={styles.seperator} />
                    )}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderProductsItem}
                    horizontal
                  />
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
      <Modal transparent={true} visible={ModalVisible}>
        <View style={styles.modalOuterView}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(false)}>
            <Image source={IconPath.close} style={styles.close} />
          </TouchableOpacity>
          <View style={styles.modalInnerView}>
            <Carousel data={selectedItem} />
          </View>
        </View>
      </Modal>
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
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
    resizeMode: 'contain',
  },
  location: {
    fontSize: moderateScale(16),
    color: COLORS.textColor,
    fontFamily: Fonts.medium,
    letterSpacing: 0.3,
  },
  title: {
    fontSize: moderateScale(28),
    fontFamily: Fonts.bold,
    letterSpacing: 0.3,
  },
  productListView: {
    flex: 1,
  },
  productItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(10),
    marginVertical: verticalScale(10),
  },
  category: {
    color: COLORS.black,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forward: {
    width: moderateScale(16),
    height: moderateScale(16),
    resizeMode: 'contain',
  },
  all: {
    color: '#000000',
    fontSize: moderateScale(14),
  },
  seperator: {
    width: horizontalScale(10),
  },

  closeBtn: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: COLORS.black,
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    width: moderateScale(10),
    height: moderateScale(10),
    resizeMode: 'contain',
    tintColor: '#ffffff',
  },
  modalOuterView: {
    backgroundColor: '#000000aa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalInnerView: {
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(50),
    borderTopRightRadius: moderateScale(50),
    width: fullWidth,
    height: fullHeight * 0.5,
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Home;
