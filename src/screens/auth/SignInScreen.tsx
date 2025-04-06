import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { sharePaddingHorizontalStyle } from '../../styles/shareStyle'
import AppAreaView from '../../components/view/safeAreaView'
import { IMAGES } from '../../constants/Image-paths'
import { s, vs } from 'react-native-size-matters'
import AppTextInput from '../../components/inputs/AppTextInput'
import AppButton from '../../components/buttons/AppButton'
import { globalColor } from '../../styles/globalColor'

const SignInScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  return (
    <AppAreaView style={styles.container}>
      <Image style={styles.imageStyle} source={IMAGES.AppLogo} />
      <AppTextInput placeholder="Enter your email" onChangeText={setEmail} />
      <AppTextInput
        placeholder="Enter your password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppButton title="Login" style={{width:vs(250)}} />
      <AppButton title="SignUp" style={styles.registerButton} textColor={globalColor.blueGray}/>
    </AppAreaView>
  );
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharePaddingHorizontalStyle,
  },
  imageStyle: {
    width: s(200),
    height: s(200),
    borderRadius: 300,
    marginBottom: vs(30),
    right: s(15),
    top: s(30),
  },
  registerButton:{
    top:s(8),
    borderColor:globalColor.blueGray,
    borderWidth:2,
    backgroundColor:globalColor.white,
    color:globalColor.blueGray ,
    width:vs(250)
  }
});