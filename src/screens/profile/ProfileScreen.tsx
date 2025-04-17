import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader';
import AppAreaView from '../../components/view/safeAreaView';
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton';
import { sharePaddingHorizontalStyle } from '../../styles/shareStyle';
import AppText from '../../components/text/AppText';
import { s, vs } from 'react-native-size-matters';
  import { useNavigation } from "@react-navigation/native";
import { SheetManager } from 'react-native-actions-sheet';
import LanguageBottomSheet from '../../components/language/LanguageBottomSheet';
import { useTranslation } from 'react-i18next';


const ProfileScreen = () => {
const navigation = useNavigation();
 const {t} = useTranslation()
    
  return (
    <AppAreaView>
      <HomeHeader />
      {/* <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Shaikh Kaif
      </AppText> */}
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle }}>
        <ProfileSectionButton
          onPress={() => navigation.navigate("CartOrderList")}
          title={t("profile_my_orders")}
        />
        <ProfileSectionButton
          onPress={() => SheetManager.show("Lang_Sheet")}
          title={t("profile_language")}
        />

        <LanguageBottomSheet />
        <ProfileSectionButton onPress={() => {}} title={t("profile_logout")} />
      </View>
    </AppAreaView>
  );
}

export default ProfileScreen

const styles = StyleSheet.create({})