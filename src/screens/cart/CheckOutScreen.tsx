import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppAreaView from '../../components/view/safeAreaView'
import { commonStyle, sharePaddingHorizontalStyle } from '../../styles/shareStyle'
import AppText from '../../components/text/AppText'
import { s, vs } from 'react-native-size-matters'
import { globalColor } from '../../styles/globalColor'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'
import { Is_Adnroid, Is_IOS } from '../../constants/constants'
  // import { useNavigation } from "@react-navigation/native";

const CheckOutScreen = () => {

  
    // const navigation = useNavigation()

  return (
    <AppAreaView>
      <View style={{ paddingHorizontal: sharePaddingHorizontalStyle }}>
        <View style={styles.inputContainer}>
          <AppTextInput placeholder="Full Name" />
          <AppTextInput placeholder="Phone Number" />
          <AppTextInput placeholder="Detail Adress" />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <AppButton
          title="Confirm"
          onPress={() => {}}
        />
      </View>
    </AppAreaView>
  );
}

export default CheckOutScreen

const styles = StyleSheet.create({
  inputContainer: {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius: 10,
    backgroundColor: globalColor.white,
    marginTop: Is_IOS ? vs(15) : undefined,
    paddingTop:vs(15)
  },
  bottomButton:{
    paddingHorizontal:sharePaddingHorizontalStyle,
    position:"absolute",
    width:"100%",
    bottom: Is_Adnroid ? vs(13) : 0,
    borderTopWidth:.5,
    borderColor:globalColor.gray,
    paddingTop:vs(10)
  }
});