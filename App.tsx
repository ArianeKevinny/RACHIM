/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthRoutes from './src/routes'
import MyTabs from './src/routes/myTabs'
import Drawer from './src/routes/drawer';


function App(): JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs />
      <Drawer />
    </NavigationContainer>
  );
}

export default App;
