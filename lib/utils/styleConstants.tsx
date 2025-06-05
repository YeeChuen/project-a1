import { StyleSheet } from "react-native";

export const styleConstant = {
  marginLarge: 24,
  marginMedium: 12,
  marginSmall: 6,
  gapMedium: 12,
  gapSmall: 6,
  paddingSmall: 8,
  paddingMedium: 12,
  paddingLarge: 16,
  boarderRadiusSmall: 6,
};

export const globalStyles = StyleSheet.create({
  textInputTitle: {
    // margin: styleConstant.gapMedium,
    // borderWidth: 1,
    padding: styleConstant.paddingMedium,
    // borderRadius: styleConstant.boarderRadiusSmall,
    fontSize: 28,
  },
  textInputHeading: {
    // margin: styleConstant.gapMedium,
    // borderWidth: 1,
    padding: styleConstant.paddingMedium,
    // borderRadius: styleConstant.boarderRadiusSmall,
    fontSize: 20,
  },
  pressableButton: {
    margin: styleConstant.gapMedium,
    borderWidth: 1,
    padding: styleConstant.paddingSmall,
    borderRadius: styleConstant.boarderRadiusSmall,
  },
  exerciseForm: {
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: styleConstant.marginSmall,
    borderWidth: 0.5,
    padding: styleConstant.paddingSmall,
    borderRadius: styleConstant.boarderRadiusSmall,
  },
  innerExerciseForm: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: styleConstant.gapSmall,
    width: "50%",
  },
  exerciseNameView: {
    width: "60%",
  },
  exerciseName: {
    fontSize: 18,
  },
  createSessionSafeAreaView: {
    flex: 1,
  },
  sessionFormSafeAreaView: {
    marginBottom: 100,
  },
  sessionFormButtonContainer: {
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: styleConstant.marginSmall,
  },
});
