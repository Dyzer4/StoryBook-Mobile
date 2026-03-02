import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const Header = ({
  texto,
  logo,
  backgroundColor = "#FF0000",
  buttonTextColor = "#FFFFFF",
  buttonBackgroundColor = "#000000"
}) => {
  return (
    <View style={[styles.header, { backgroundColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
      >
        <Text style={{ color: buttonTextColor }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.centerContainer}>
        {logo ? (
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        ) : (
          <Text style={[styles.title, { color: buttonTextColor }]}>
            {texto}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
      >
        <Text style={{ color: buttonTextColor }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logo: {
    width: 120,
    height: 40,
  },
});