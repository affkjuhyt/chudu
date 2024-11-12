import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeTabView from './HomeTabView';
import DetailList from './DetailList';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen() {
  return (
      // <HomeTabView />
      <View>
        <Button
          title ='Store Data'
          onPress={() => {
            storage('myName', 'Thien Linh')
          }}
        />
        <Button
          title='Get Data'
          onPress={() => {
            getData('myName')
          }}
        />
      </View>
  )
}

function DetailsScreen() {
  return (
    <DetailList />
  )
}

const storage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
    console.log("Data is stored successfully")
  } catch {
    console.error('Error when store data: ', error)
  }
}

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      console.log("Data is: ", value)
      return value
    }
  } catch {
    console.error('Error when get data: ', error)
  }
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  // const [todoText, setTodoText] = useState('');
  // const [todoList, setTodoList] = useState([]);

  // function textInputChanged(textChanged) {
  //   setTodoText(textChanged)
  // }

  // function addTodo() {
  //   setTodoList([...todoList, todoText]);
  //   setTodoText('');
  // }

  return (
    // <View style={styles.container}>
    //   <View style={styles.inputContainer}>
    //     <TextInput onChangeText={textInputChanged} style={styles.textInput} placeholder='Your todo' />
    //     <Button onPress={addTodo} title='Add todo' />
    //   </View>
    //   <View style={styles.todoList}>
    //     {todoList.map((todo, index) => {
    //       return (
    //         <Text key={index}>{todo}</Text>
    //       )
    //     })}
    //   </View>

    //   {/* <FlexBox /> */}
    // </View>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Details') {
              iconName = 'list-alt'
            }

            return <Icon name={iconName} size={20} color={color} />
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Details' component={DetailsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const FlexBox = () => {
  return (
    <View style={{ padding: 50, flexDirection: 'row', height: 300, justifyContent: 'space-between', alignItems: 'stretch'}}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1
      }}>
        <Text>1</Text>
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        flex: 2
      }}>
        <Text>2</Text>
      </View>

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        flex: 1
      }}>
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 100,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 50,
    flex: 1
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
    marginRight: 8,
    width: '70%'
  },
  todoList: {
    flex: 6,
  }
});
