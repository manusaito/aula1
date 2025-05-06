import { Tabs } from "expo-router";
import  Ionicons  from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
  <Tabs
  screenOptions={{
    tabBarActiveTintColor: 'pink',
    tabBarInactiveTintColor: '#F5FFFA',
    headerStyle: { 
      backgroundColor: '#9587ba'},
    headerShadowVisible: true,
    headerTintColor: '#F5FFFA',
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
        <Ionicons name={focused ? 'brush' : 'brush-outline'} color={color} size={24} />
      ),
      }}/>
      <Tabs.Screen name="toDoList" 
      options={{title: 'Lista de Compra', tabBarIcon: ({color, focused}) => (
        <Ionicons name={focused ? 'cart' : 'cart-outline'} color={color} size={24} />
      ),
      }}/>
  </Tabs>
  );
}
