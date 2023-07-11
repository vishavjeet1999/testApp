import React from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

let Question = () => {
  return (
    <View style={styles.messageCard}>
      <View style={{flexDirection: 'row', gap: 15, paddingHorizontal: 30}}>
        <Text style={styles.text6}>Vet</Text>
        <Text style={styles.text6}>California</Text>
        <Text style={styles.text7}>24 Feb 2022</Text>
      </View>
      <Text style={[styles.text3, {paddingHorizontal: 30, marginBottom: 5}]}>
        Q. Lorem ipsum is simply dummy text of the printing and typing industry?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          borderTopWidth: 1,
          borderBottomWidth: 3,
          paddingVertical: 10,
          borderColor: '#d3d3d3',
          paddingHorizontal: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon name="heart-outline" color={'#2fb9d4'} size={20} />
          <Text style={styles.text7}>Like 1</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon name="comment-text-outline" color={'#2fb9d4'} size={20} />
          <Text style={styles.text7}>Comment 3</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="white" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'flex-end'}}>
            <Text style={styles.text}>Community</Text>
            <Icon name="magnify" color={'grey'} size={25} />
          </View>
          <Icon name="account-circle" color={'grey'} size={35} />
        </View>
        <View style={styles.tabs}>
          <View style={{flexDirection: 'row', gap: 25, alignItems: 'flex-end'}}>
            <Text style={styles.text2}>Cases</Text>
            <Text
              style={[
                styles.text3,
                {
                  borderBottomWidth: 2,
                  borderColor: '#2fb9d4',
                  paddingHorizontal: 5,
                },
              ]}>
              Q&A
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{flexDirection: 'row', gap: 30, justifyContent: 'center'}}>
            <Icon name="emoticon-cool" color={'white'} size={50} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text4}>Your experience will be of</Text>
              <Text style={styles.text4}>great help to someone.</Text>
            </View>
          </View>
          <View
            style={{backgroundColor: 'white', marginTop: 15, borderRadius: 10}}>
            <Text style={styles.text5}>Ask your questions!</Text>
          </View>
        </View>
        <ScrollView>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </ScrollView>
      </View>
    </>
  );
};

const CameraScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const CommunityScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const ConsultationScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const MyPageScreen = () => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Camera') {
              iconName = 'camera';
            } else if (route.name === 'Community') {
              iconName = 'comment-text-multiple';
            } else if (route.name === 'Consultation') {
              iconName = 'plus-box';
            } else if (route.name === 'MyPage') {
              iconName = 'account';
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          headerShown: false
        })}
        tabBarOptions={{
          activeTintColor: '#2fb9d4',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Consultation" component={ConsultationScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: '#2fb9d4',
    fontWeight: '500',
    fontSize: 22,
  },
  text2: {
    fontSize: 20,
    color: '#bebebe',
    fontWeight: '500',
    fontSize: 16,
  },
  text3: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  text4: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  text5: {
    fontSize: 20,
    color: '#2fb9d4',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 7,
  },
  text6: {
    fontSize: 14,
    color: '#2fb9d4',
    fontWeight: '500',
  },
  text7: {
    color: '#bebebe',
    fontWeight: '500',
    fontSize: 14,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabs: {
    paddingHorizontal: 30,
    paddingTop: 25,
  },
  card: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#2fb9d4',
  },
  messageCard: {
    paddingTop: 20,
    gap: 10,
    backgroundColor: 'white',
  },
});

export default App;
