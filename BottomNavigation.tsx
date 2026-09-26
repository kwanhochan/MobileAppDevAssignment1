import { StyleSheet, Text, View } from "react-native";

export const BottomNavigation = () => {
  return (
    <View style={s.container}>
      <Text style={s.icon}>🏠</Text>
      <Text style={s.icon}>🔍</Text>
      <Text style={s.icon}>▶️</Text>
      <Text style={s.icon}>🔔</Text>
      <Text style={s.icon}>☰</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E4E6EB",
    backgroundColor: "#FFFFFF",
  },
  icon: { fontSize: 22 },
});
