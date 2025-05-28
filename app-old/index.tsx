import * as React from "react";

import { BottomNavigation } from "react-native-paper";
import Home from "./Home";
import Workouts from "./Workouts";
import Progress from "./Progress";

export default function Index() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "workouts",
      title: "Workouts",
      focusedIcon: "arm-flex",
      unfocusedIcon: "arm-flex-outline",
    },
    {
      key: "progress",
      title: "Progress",
      focusedIcon: "equalizer",
      unfocusedIcon: "equalizer-outline",
    },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    workouts: Workouts,
    progress: Progress,
  });

  return (
  
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      safeAreaInsets={{top: 500}}
    />
  );
}