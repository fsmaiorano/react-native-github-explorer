import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";
import { getStatusBarHeight } from "react-native-status-bar-height"; // get height of status bar in all devices

const styles = StyleSheet.create({
  container: {
    height: 52 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker
  }
});

export default styles;
