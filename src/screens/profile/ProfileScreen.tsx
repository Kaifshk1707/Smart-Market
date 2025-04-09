import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader';
import AppAreaView from '../../components/view/safeAreaView';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import { sharePaddingHorizontalStyle } from '../../styles/shareStyle';
import AppText from '../../components/text/AppText';
import { s, vs } from 'react-native-size-matters';
  import { useNavigation } from "@react-navigation/native";


const ProfileScreen = () => {

  
    const navigation = useNavigation();
  return (
    <AppAreaView>
      <HomeHeader />
      <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Shaikh Kaif
      </AppText>
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle }}>
        <ProfileSectionButton
          onPress={() => navigation.navigate("CartOrderList")}
          title="My Orders"
        />
        <ProfileSectionButton onPress={() => {}} title="Language" />
        <ProfileSectionButton onPress={() => {}} title="Logout" />
      </View>
    </AppAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})