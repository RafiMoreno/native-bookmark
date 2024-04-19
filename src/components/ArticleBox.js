import React, { useContext, useState, useEffect } from "react";
import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BookmarkContext, BookmarkDispatchContext } from "../helpers/context";

export default function ArticleBox({ data, idx }) {
  const bookmarkList = useContext(BookmarkContext);
  const setBookmarkList = useContext(BookmarkDispatchContext);
  const [bookmarked, setBookmarked] = useState(bookmarkList[idx]);

  const handleBookmark = () => {
    let currentBookmark = bookmarked;
    setBookmarked(!bookmarked);
    let newArr = [...bookmarkList];
    newArr[idx] = !currentBookmark;
    setBookmarkList(newArr);
  };

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
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            {data.title}
          </Text>
          <MaterialIcons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            color="white"
            size={28}
            style={{ marginLeft: "auto" }}
            onPress={handleBookmark}
          />
        </View>
        <Text style={{ color: "#6f7371" }}>By {data.author}</Text>
        <Text numberOfLines={3}>{data.content}</Text>
      </View>
    </View>
  );
}
