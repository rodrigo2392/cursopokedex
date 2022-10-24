import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './views/Home';
import Favorites from './views/Favorites';
import About from './views/About';
import ContextProvider from './context';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const App = () => {
  const Tab = createBottomTabNavigator();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => {
                let icon = '';
                if (route.name === 'Inicio') {
                  icon = 'home';
                } else if (route.name === 'Favoritos') {
                  icon = 'heart';
                } else if (route.name === 'Acerca') {
                  icon = 'information';
                }
                return <Icon name={icon} size={25} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Favoritos" component={Favorites} />
            <Tab.Screen name="Acerca" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </QueryClientProvider>
  );
};

export default App;
