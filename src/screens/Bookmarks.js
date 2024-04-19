import React, { useContext, useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ArticleContext,
  BookmarkContext,
  BookmarkDispatchContext,
} from "../helpers/context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Bookmarks() {
  const insets = useSafeAreaInsets();
  const bookmarkList = useContext(BookmarkContext);
//   const [list, setList] = useState([]);
  const articles = useContext(ArticleContext);
//   const handleRemove = (idx) => {
//     let newArr = [...bookmarkList];
//     newArr[idx] = false;
//     setBookmarkList(newArr);
//   };
//   useEffect(() => {
//     setList(bookmarkList);
//   }, [bookmarkList]);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}>
          List of Bookmarks
        </Text>
        {bookmarkList.map((item, index) => {
          if (item == true) {
            return (
              <View style={{ padding: 4 }}>
                <View
                  style={{
                    flexDirection: "column",
                    borderWidth: 2,
                    borderColor: "#f5b942",
                    padding: 3,
                    borderRadius: 8,
                    backgroundColor: "#f5b942",
                    maxHeight: 130,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      {articles[index].title}
                    </Text>
                    <FontAwesome
                      name="remove"
                      color="white"
                      style={{ marginLeft: "auto" }}
                      size={16}
                    //   onPress={handleRemove(index)}
                    />
                  </View>
                  <Text style={{ color: "#6f7371" }}>
                    By {articles[index].author}
                  </Text>
                </View>
              </View>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}
