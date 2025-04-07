import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader';
import AppAreaView from '../../components/view/safeAreaView';
import EmptyCartScreen from './EmptyCartScreen';

const CartScreen = () => {
  return (
    <AppAreaView>
      <HomeHeader />
      <EmptyCartScreen/>
    </AppAreaView>
  );
}

export default CartScreen

const styles = StyleSheet.create({})