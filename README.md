# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies
   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## create tabs slide to add 
this method is very perfect for navigator i will recommended you.

# import this 
```
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
```
and 
```
cosnt Tab = createMetrialTopTabNavigator()
```

✅ Option 2: Use react-native-tab-view for Fully Custom Swipeable + Bottom UI
If swipeable "slides" at the bottom is the main goal, it’s better to not rely on the navigators and instead use react-native-tab-view directly. Here’s a sample:

📦 Install it first:
```
npm install react-native-tab-view
```
💡 Example: Custom Bottom Swipe Tabs
```
import * as React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Home = () => <View style={styles.scene}><Text>Home Screen</Text></View>;
const Explore = () => <View style={styles.scene}><Text>Explore Screen</Text></View>;
const Profile = () => <View style={styles.scene}><Text>Profile Screen</Text></View>;

export default function SwipeTabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'explore', title: 'Explore' },
    { key: 'profile', title: 'Profile' },
  ]);

  const renderScene = SceneMap({
    home: Home,
    explore: Explore,
    profile: Profile,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => null} // Hide the top tab bar
      />
      <View style={styles.bottomTabs}>
        {routes.map((route, i) => (
          <Text
            key={route.key}
            style={[styles.tabItem, index === i && styles.activeTab]}
            onPress={() => setIndex(i)}
          >
            {route.title}
          </Text>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
  tabItem: {
    padding: 10,
    color: 'gray',
  },
  activeTab: {
    color: 'blue',
        fontWeight: 'bold',
  },
});
```
# if this method is not work to this two method use.
## tabs create to use this code
```
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
```
## how to create tab navigation
if navigatore create on the top to this use 
```
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Or another icon set

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return null; // replace with your screen content
}

function ProfileScreen() {
  return null;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```
# Create slides..
```
npm install --save react-native-snap-carousel
# or
yarn add react-native-snap-carousel
 # add animation.
 npm install react-native-reanimated react-native-gesture-handler
```
# code ...
```
import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const data = [
  { title: 'Slide 1', image: 'https://via.placeholder.com/300x150' },
  { title: 'Slide 2', image: 'https://via.placeholder.com/300x150' },
  { title: 'Slide 3', image: 'https://via.placeholder.com/300x150' },
];

const MyCarousel = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={screenWidth}
      itemWidth={screenWidth * 0.8}
      layout="default"
      loop={true}
      autoplay={true}
      autoplayDelay={1000}
      autoplayInterval={3000}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCarousel;

```
