import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader';
import AppAreaView from '../../components/view/safeAreaView';

const ProfileScreen = () => {
  return (
    <AppAreaView>
      <HomeHeader />
    </AppAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})