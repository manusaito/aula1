import { Tabs } from "expo-router";
import  Ionicons  from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
  <Tabs
  screenOptions={{
    tabBarActiveTintColor: '#07438f',
    tabBarInactiveTintColor: '#07438f',
    headerStyle: { 
      backgroundColor: '#9587ba'},
    headerShadowVisible: true,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#9587ba',
    },
  }}>
      <Tabs.Screen name="index" 
      options={{title: 'Página Inicial', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={24} />
      )
      }}/>
      <Tabs.Screen name="about" 
      options={{title: 'Sobre', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'information-circle-sharp' : 'information-circle-outline'} color={color} size={24} />
      ),
      }}/>
  </Tabs>
  );
}
