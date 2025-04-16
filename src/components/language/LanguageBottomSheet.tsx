import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ActionSheet from "react-native-actions-sheet";
import App from "../../../App";
import AppText from "../text/AppText";
import AppButton from "../buttons/AppButton";
import { s, vs } from "react-native-size-matters";
import RadioWithTitle from "../inputs/RadioWithTitle";

const LanguageBottomSheet = () => {
  return (
    <ActionSheet id="Lang_Sheet">
      <View style={styles.container}>
        <AppText
          variant="medium"
          style={{ marginBottom: vs(20), textAlign: "center" }}
        >
          Change Language
        </AppText>
        <RadioWithTitle title="English" selected={true} />
        <RadioWithTitle title="Spanish" selected={false} />
        <RadioWithTitle title="French" selected={false} />
        <RadioWithTitle title="German" selected={false} />

        <AppButton title="Confirm" onPress={() => {}} />
      </View>
    </ActionSheet>
  );
};

export default LanguageBottomSheet;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
});
