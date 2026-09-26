import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/seed/cover/800/300" }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />

      <View style={styles.profilePicWrapper}>
        <Image
          source={{ uri: "https://picsum.photos/seed/profile/200/200" }}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.nameSection}>
        <Text style={styles.name}>Alex Johnson</Text>

        <Text style={styles.bio}>
          📍 Calgary, Alberta • 🎓 SAIT • 💼 Software Developer
        </Text>
      </View>

      <View style={styles.actionRow}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>+ Add Friend</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.secondaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Message</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },

  coverPhoto: {
    width: "100%",
    height: 180,
    backgroundColor: "#DDD",
  },

  profilePicWrapper: {
    alignItems: "center",
    marginTop: -60,
  },

  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    backgroundColor: "#CCC",
  },

  nameSection: {
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#050505",
  },

  bio: {
    fontSize: 13,
    color: "#65676B",
    marginTop: 4,
    textAlign: "center",
    lineHeight: 18,
  },

  actionRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 16,
    gap: 10,
  },

  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11,
    borderRadius: 8,
  },

  primaryButton: {
    backgroundColor: "#1877F2",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },

  secondaryButton: {
    backgroundColor: "#E4E6EB",
  },

  secondaryButtonText: {
    color: "#050505",
    fontWeight: "700",
    fontSize: 14,
  },

  pressed: {
    opacity: 0.75,
  },
});
