import { Image, StyleSheet, Text, View } from "react-native";

export const ContentPlaceholder = () => {
  return (
    <View style={s.postCard}>
      <View style={s.postHeader}>
        <Image
          source={{ uri: "https://picsum.photos/seed/avatar/100/100" }}
          style={s.postAvatar}
        />
        <View>
          <Text style={s.postAuthor}>Alex Johnson</Text>
          <Text style={s.postTime}>3 hrs ago</Text>
        </View>
      </View>
      <Text style={s.postText}>
        Had a great time building my first React Native app in Expo! 🚀
      </Text>
      <Image
        source={{ uri: "https://picsum.photos/seed/post/700/400" }}
        style={s.postImage}
      />
      <View style={s.postFooter}>
        <Text style={s.postAction}>👍 Like</Text>
        <Text style={s.postAction}>💬 Comment</Text>
        <Text style={s.postAction}>↗ Share</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  postCard: {
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    padding: 12,
    marginHorizontal: 8,
  },
  postHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#CCC",
  },
  postAuthor: { fontWeight: "bold", fontSize: 14 },
  postTime: { fontSize: 12, color: "#65676B" },
  postText: { fontSize: 14, marginBottom: 10 },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    backgroundColor: "#DDD",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E4E6EB",
    paddingTop: 8,
  },
  postAction: { fontSize: 13, color: "#65676B", fontWeight: "600" },
});
