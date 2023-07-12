import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from 'react-native';
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
          borderColor: '#ededed',
          paddingHorizontal: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon name="heart-outline" color={'#2fb9d4'} size={20} />
          <Text style={styles.text7}>Like 1</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon name="comment-text-outline" color={'#2fb9d4'} size={20} />
          <Text style={styles.text7}>Comments 3</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  let [search, setSearch] = useState(false);
  let [text, setText] = useState('');

  return (
    <>
      <StatusBar animated={true} backgroundColor="white" />
      <View style={styles.container}>
        {search ? (
          <>
          <View style={{borderBottomWidth:5,
            borderColor:"#ededed",}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingHorizontal: 25,
              alignItems: 'center',
              marginTop:10,
              paddingBottom:10
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                borderRadius: 15,
                gap:5,
                backgroundColor: '#ededed',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <Icon name="magnify" color={'#b5b5b5'} size={25} />
              <TextInput
                placeholder='Search'
                placeholderTextColor={"#b5b5b5"}
                style={{flex: 1, color: 'black', fontSize: 16, height: 40}}
                onChangeText={text => setText(text)}
                value={text}
              />
              <Pressable onPress={()=>setText("")}>
                <Icon name="close-circle" color={'#b5b5b5'} size={20} />
              </Pressable>

            </View>
            <Pressable onPress={() => {setSearch(false); setText("")}}>
              <Text style={{fontSize:16, fontWeight:'500',color:"#d3d3d3"}}>Cancel</Text>
            </Pressable>
          </View>
          {
            text &&
            <Text style={[styles.text5, {paddingVertical:20}]}>
              Sorry, there are no search keywords
            </Text>
          }
          </View>
          <Text style={[styles.text6,{paddingHorizontal:30,marginTop:20}]}>You might also interested in...</Text>
          </>
        ) : (
          <>
            <View style={styles.header}>
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'flex-end'}}>
                <Text style={styles.text}>Community</Text>
                <Pressable onPress={() => setSearch(true)}>
                  <Icon name="magnify" color={'#b5b5b5'} size={25} />
                </Pressable>
              </View>
              <Icon name="account-circle" color={'#b5b5b5'} size={35} />
            </View>
            <View style={styles.tabs}>
              <View
                style={{flexDirection: 'row', gap: 25, alignItems: 'flex-end'}}>
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
                style={{
                  flexDirection: 'row',
                  gap: 30,
                  justifyContent: 'center',
                }}>
                <Icon name="emoticon-cool-outline" color={'white'} size={50} />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.text4}>Your experience will be of</Text>
                  <Text style={styles.text4}>great help to someone.</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  marginTop: 15,
                  borderRadius: 10,
                }}>
                <Text style={styles.text5}>Ask your questions!</Text>
              </View>
            </View>
          </>
        )}
        <ScrollView>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <View style={{alignItems:"center"}}>
            <Text style={[styles.text5,{fontSize:16,borderWidth:1, width:"50%", borderRadius:10, marginVertical:15,borderColor:'#2fb9d4'}]}>Load More Result</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const CameraScreen = () => {
  return <View style={styles.container}></View>;
};

const CommunityScreen = () => {
  return <View style={styles.container}></View>;
};

const ConsultationScreen = () => {
  return <View style={styles.container}></View>;
};

const MyPageScreen = () => {
  return <View style={styles.container}></View>;
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
              iconName = 'chat-processing';
            } else if (route.name === 'Consultation') {
              iconName = 'plus-box';
            } else if (route.name === 'MyPage') {
              iconName = 'account';
            }

            return <Icon style={{marginBottom:-10}} name={iconName} color={color} size={size} />;
          },
          headerShown: false,
        })}
        tabBarOptions={{
          activeTintColor: '#2fb9d4',
          inactiveTintColor: '#b5b5b5',
          
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
    color: '#313131',
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
