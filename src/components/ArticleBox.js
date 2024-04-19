import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ArticleBox({ title, author, desc }) {
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
          maxHeight: 130
        }}
      >
        <View style={{flexDirection:"row", alignItems:"center", paddingVertical:2}}>
            <Text style={{fontSize:15, fontWeight: "bold", color:"white"}}>{title}</Text>
            <MaterialIcons name="bookmark-outline" color="white" size={28} style={{marginLeft:"auto"}}/>
        </View>
        <Text style={{color:"#6f7371"}}>By {author}</Text>
        <Text numberOfLines={3}>{desc}</Text>
      </View>
    </View>
  );
}
