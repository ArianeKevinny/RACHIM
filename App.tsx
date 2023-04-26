import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Home from './src/screens/home';
import LoginScreen from './src/screens/loginScreen';
import UserRegister from './src/components/userRegister';

const Stack = createNativeStackNavigator();

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

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{title: 'Principal'}}
              component={LoginScreen}
            />
            <Stack.Screen name="Register" component={UserRegister} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{title: 'Principal'}}
            component={Home}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={UserRegister} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
