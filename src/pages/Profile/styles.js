import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors.white
  },
  loading: {
    marginTop: metrics.baseMargin * 2
  },
  avatar: {
    marginTop: metrics.baseMargin * 2,
    marginLeft: metrics.baseMargin * 2,
    width: 150,
    height: 150
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  user: {
    marginTop: metrics.baseMargin * 2,
    marginLeft: metrics.baseMargin * 2
  },
  info: {
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
    textAlign: "justify",
    fontSize: 16
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14
  }
});

export default styles;
