import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CourseScreen from '../screens/course/CourseScreen';
import SupportScreen from '../screens/support/Support';
import SoundNaviScreen from '../screens/SoundNaviScreen';
import Page1 from '../screens/soundeffects/Page1';
import Page2 from '../screens/soundeffects/Page2';
import Page3 from '../screens/soundeffects/Page3';
import TestScreen from '../screens/TestScreen';
import ComingSoonScreen from '../screens/comingsoon/ComingSoon';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import VideoList from '../screens/youtube/videoList';

//Icons Tab Navigation
import Icon from 'react-native-vector-icons/Ionicons';
import Page5 from '../screens/soundeffects/Page5';
import FavoriteScreen from '../screens/soundeffects/FavoriteScreen';
import Page4 from '../screens/soundeffects/Page4';
import Page6 from '../screens/soundeffects/Page6';
import Page7 from '../screens/soundeffects/Page7';
import Page8 from '../screens/soundeffects/Page8';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootNavigation = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen options={{ headerShown: false }} name="Home" component={SoundNaviScreen} /> */}
        <Tab.Screen
        name="Home"
        component={NestedStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),headerShown: false
        }}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" size={size} color={color} />
          ),headerShown: false
        }}
      />
      <Tab.Screen
        name="Support Me"
        component={SupportScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="help" size={size} color={color} />
          ),headerShown: false
        }}
      />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const NestedStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SongScreen">
      <Stack.Screen options={{ headerShown: false }} name="SongScreen" component={SoundNaviScreen} />
      <Stack.Screen options={{ headerShown: false }} name="VideoScreen" component={VideoList} />
      <Stack.Screen options={{ headerShown: false }} name="MemeScreen" component={TestScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Page1" component={Page1} />
      <Stack.Screen options={{ headerShown: false }} name="Page2" component={Page2} />
      <Stack.Screen options={{ headerShown: false }} name="Page3" component={Page3} />
      <Stack.Screen options={{ headerShown: false }} name="Page4" component={Page4} />
      <Stack.Screen options={{ headerShown: false }} name="Page5" component={Page5} />
      <Stack.Screen options={{ headerShown: false }} name="Page6" component={Page6} />
      <Stack.Screen options={{ headerShown: false }} name="Page7" component={Page7} />
      <Stack.Screen options={{ headerShown: false }} name="Page8" component={Page8} />
      <Stack.Screen options={{ headerShown: false }} name="Favorite" component={FavoriteScreen} />
      <Stack.Screen options={{ headerShown: false }} name="ComingSoon" component={ComingSoonScreen} />
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
