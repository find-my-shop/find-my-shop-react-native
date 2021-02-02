import React from "react";
import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Image, TouchableNativeFeedback } from "react-native";

const ArticleThumb = (props) => {
  let TouchableCmp = TouchableWithoutFeedback;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  console.log({ ...styles.article, ...props.thumbStyle });
  return (
    <View style={{ ...styles.article, ...props.thumbStyle }}>
      <TouchableCmp onPress={props.onSelect} useForeground>
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
          </View>
          <View style={styles.details}>
            <Text numberOfLines={1} style={styles.title}>
              {props.title}
            </Text>
            <Text>{props.shopName}</Text>
            <Text style={styles.price}>{props.price}€</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  article: {
    height: 220,
    width: 150,
    marginRight: 10
  },
  imageContainer: {
    width: "100%",
    height: 150,
    // borderRadius: 7,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  details: {
    paddingTop: 5
  },
  title: {},
  price: {
    fontWeight: "bold"
  }
});

export default ArticleThumb;
