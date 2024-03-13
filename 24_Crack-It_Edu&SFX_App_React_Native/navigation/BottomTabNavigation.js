// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseScreen from '../screens/course/CourseScreen';
import SupportScreen from '../screens/support/Support';
import SoundNaviScreen from '../screens/SoundNaviScreen';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SoundNaviScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Support" component={SupportScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
