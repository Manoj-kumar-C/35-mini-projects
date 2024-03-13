import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './screens/WelcomeScreen'; // Import your WelcomeScreen component
import SoundsNavigation from './navigation/SoundsNavigation';
import BottomTabNavigator from './navigation/BottomTabNavigation';
import RootNavigation from './navigation/RootNavigation';



export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching user data, checking authentication)
    // Set showWelcome to false when the task is complete
    const simulateAsyncTask = async () => {
      // Simulate a delay (you can replace this with your actual asynchronous task)
      await new Promise(resolve => setTimeout(resolve, 4000));

      // Set showWelcome to false to hide the welcome screen
      setShowWelcome(false);
    };

    simulateAsyncTask();
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      {showWelcome ? <WelcomeScreen /> : <RootNavigation />}
    </>
  );
}



// Register App Components 
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
