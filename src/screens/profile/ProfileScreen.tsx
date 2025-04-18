import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SheetManager } from "react-native-actions-sheet";
import { useTranslation } from "react-i18next";

// Components
import AppAreaView from "../../components/view/safeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/ProfileSectionButton";
import LanguageBottomSheet from "../../components/language/LanguageBottomSheet";
import LogoutBottomSheet from "./bottomSheet/LogoutBottomSheet";

// Styles
import { sharePaddingHorizontalStyle } from "../../styles/shareStyle";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/text/AppText";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <AppAreaView>
      <HomeHeader />

      <View style={styles.content}>
        {/* Orders */}
        <ProfileSectionButton
          onPress={() => navigation.navigate("CartOrderList")}
          title={t("profile_my_orders")}
        />

        {/* Language Selection */}
        <ProfileSectionButton
          onPress={() => SheetManager.show("Lang_Sheet")}
          title={t("profile_language")}
        />
        <LanguageBottomSheet />

        {/* Logout */}
        <ProfileSectionButton
          onPress={() => SheetManager.show("Logout_Sheet")}
          title={t("profile_logout")}
        />
        <LogoutBottomSheet />
      </View>
    </AppAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: sharePaddingHorizontalStyle,
    marginTop: vs(10),
    },
});
