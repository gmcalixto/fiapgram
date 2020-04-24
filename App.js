import React,{Component} from 'react';
import { Text, View, StyleSheet,FlatList,SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header'
import PostBody from './components/postbody'
import PostImage from './components/postimage'
import User from './components/user'

//fonte de dados
const DATA= require('./data/posts.json')

//função que gera cada elemento
function Item({img,user,body}){
  return(
    <View style={styles.item}>
      <PostImage imageSource={img}/>
      <User username={user}/>
      <PostBody bodyText={body}/>
    </View>
  );
}

class App extends Component{
  render(){
    return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={
            ({item}) => <Item img={item.img} 
                              user={item.user}
                              body={item.body} />
        }
        ListHeaderComponent={<Header headerText='FIAPGram'/>}
        stickyHeaderIndices={[0]}
        />
    </SafeAreaView>
    )
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  item: {
    padding: 10
  }
});
