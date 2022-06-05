import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Edit from './src/screens/edit';
import Create from './src/screens/create';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff"
  }
}

export default function App() {
  const user = false; //Not authenticated
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user
            ?
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Edit" component={Edit} />
              <Stack.Screen name="Create" component={Create} />
            </>
            :
            <>
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>

  );
}
