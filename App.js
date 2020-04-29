import React,{Component} from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import PostBody from './components/postbody';
import PostImage from './components/postimage';
import User from './components/user';
import LikeCounter from './components/likecounter';


//fonte de dados
const DATA = require('./data/datasource.json')

//função que renderiza cada item
function Item({img,user,body,likes}){
  return(
    <View style={styles.item}>
      <User username={user}/>
      <PostImage imageSource={img}/>
      <LikeCounter likes={likes}/>
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
            ({ item }) => <Item img={item.img} 
                                user={item.user}
                                body={item.body}
                                likes={item.likes} />
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
    marginTop: Constants.statusBarHeight
  },
  item: {
    marginTop: 20
  },
});
