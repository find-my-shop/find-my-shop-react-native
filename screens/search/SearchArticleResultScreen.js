import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ArticleGrid from "../../components/articles/ArticleGrid";
import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import FiltersList from "../../components/UI/FiltersList";

const SearchArticleResultScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState(props.route.params.searchQuery);
  const categoryId = props.route.params.categoryId;
  const categoryTitle = props.route.params.categoryTitle;

  const articles = [
    {
      id: "1",
      title: "jean SUper avec un title mega longf",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 19.99,
      shopName: "Adidas Store"
    },
    {
      id: "2",
      title: "tee shirt blanc",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 29.99,
      shopName: "Nike Store"
    },
    {
      id: "3",
      title: "Pantalon rouge",
      imageUrl: "https://find-my-shop.s3.eu-west-3.amazonaws.com/storage/articles/5fd38a5464b9b7f1513a6e68/1607699069048_img.png",
      price: 49.99,
      shopName: "Converse"
    }
  ];

  const filterList = [
    { id: "f1", title: "Filter", isSelected: false },
    { id: "f2", title: "Taille", isSelected: true },
    { id: "f3", title: "Dispos", isSelected: false },
    { id: "f4", title: "Marque", isSelected: false },
    { id: "f5", title: "Shop", isSelected: false }
  ];

  const selectArticleHandler = (id, title, imageUrl) => {
    props.navigation.navigate("ArticleDetails", {
      articleId: id,
      articleTitle: title,
      articleImageUrl: imageUrl
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.searchContainer}>
        <View style={{ width: 30, marginRight: 10 }}>
          <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ flex: 1 }}>
          <CustomSearchRounded placeholder={categoryId ? 'Recherchez dans "' + categoryTitle + '"' : "Recherchez un article"} value={searchQuery} onChangeText={(text) => setSearchQuery(text)} />
        </View>
        <View style={{ width: 30, marginLeft: 10 }}>
          <TouchableWithoutFeedback onPress={() => console.log("save search")}>
            <Ionicons name="bookmark-outline" size={30} color="grey" />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View>
        <FiltersList
          selectedFilterId="f1"
          data={filterList}
          onSelect={(filterId) => {
            console.log("Filter selected: " + filterId);
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.resultsNbr}>244 résultats</Text>
        <ArticleGrid
          numColumns={2}
          articleStyle={styles.articleThumbStyle}
          articles={articles}
          selectItem={(id, title, imageUrl) => {
            selectArticleHandler(id, title, imageUrl);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export const screenOptions = (navData) => {
  return {
    headerShown: false
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 10
  },
  searchContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20
  },
  itemText: {
    fontSize: 16,
    color: "#727272"
  },
  articleThumbStyle: {
    flex: 1 / 2,
    height: 350,
    marginBottom: 10
  },
  resultsNbr: {
    marginTop: 20,
    marginBottom: 7,
    color: "#727272",
    fontSize: 15,
    fontWeight: "500"
  }
});

export default SearchArticleResultScreen;
