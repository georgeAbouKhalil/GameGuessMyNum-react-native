import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../utils/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center", // top to bottom
    alignItems: "center", //axis postion left to right
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow only on android. (for IOS we need to use shadow)
    shadowColor: "black", // shadow color for IOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset for IOS
    shadowRadius: 6, // shadow radius for IOS
    shadowOpacity: 0.25, // shadow opacity for IOS
  },
});
