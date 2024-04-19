import React, { useState, useEffect, useContext } from "react";
import { Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAllArticles } from '../helpers/api';
import ArticleBox from "../components/ArticleBox";
import { ArticleContext } from "../helpers/context";

export default function ArticleList() {
    const insets = useSafeAreaInsets();
    // const [articles, setArticles] = useState([]);
    // const getAllArticlesData = () => {
    //     getAllArticles().then((response) => {
    //     const allArticles = response.data;
    //     setArticles(allArticles);
    //   });
    // };
  
    // useEffect(() => {
    //     getAllArticlesData();
    // }, []);

    const articles = useContext(ArticleContext);

    return (
      <View style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
        <ScrollView>
            <Text style={{textAlign:"center", fontSize:18, fontWeight:'700'}}>List of Articles</Text>
        {articles.map((article, index) => {
            return (
              <ArticleBox data={article} key={index} idx={index} />
            );
          })}
        </ScrollView>
      </View>
    );
  }