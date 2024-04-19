import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getAllArticles } from '../helpers/api';
import ArticleBox from "../components/ArticleBox";

export default function ArticleList() {
    const insets = useSafeAreaInsets();
    const [articles, setArticles] = useState([]);
    const getAllArticlesData = () => {
        getAllArticles().then((response) => {
        console.log(response.data[3])
        const allArticles = response.data;
        setArticles(allArticles);
      });
    };
  
    useEffect(() => {
        getAllArticlesData();
    }, []);
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
              <ArticleBox title={article.title} author={article.author} desc={article.content}/>
            );
          })}
        </ScrollView>
      </View>
    );
  }