import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Sessions",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="running" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chart-bar" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
