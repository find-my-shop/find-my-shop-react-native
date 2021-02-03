import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import SearchPlaceHolderItem from "../../components/UI/SearchPlaceHolderItem";

const EditProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.titleLogo}>
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
              <Ionicons
                style={styles.settingsButton}
                name="ios-arrow-back-outline"
                size={35}
                color="black"
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{ flex: 4 }}>
            <Text style={styles.title}>Modifier mon profil</Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, flex: 1 }}>
        <SearchPlaceHolderItem
          selectItem={() => {
            props.navigation.navigate("EditProfile");
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePicture}
              source={require("../../assets/images/profile.jpg")}
            />
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15 }}>Change ma photo de profil</Text>
            </View>
          </View>
        </SearchPlaceHolderItem>
      </ScrollView>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: 50,
    height: 100,
  },
  titleLogo: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontWeight: "600",
    fontSize: 25,
    paddingTop: 3,
    textAlign: "center",
  },
  settingsButton: {
    alignSelf: "center",
  },
  profilePicture: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowColor: "grey",
  },
});

export default EditProfileScreen;
