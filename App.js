import React, {Component,useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from './components/header.js';
import User from './components/user.js';
import PostImage from './components/postimage.js';
import PostBody from './components/postbody.js';

var count = 0;

class App extends Component{

  state = {
    mensagem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper condimentum mi, eget aliquet lorem sodales ut. Nulla ornare convallis consequat. Integer eget dolor turpis. Sed malesuada, lorem sed convallis molestie, orci enim lobortis augue, in egestas nibh justo eget justo. Pellentesque posuere elit enim, et aliquam massa vehicula a. Nam ut augue scelerisque, porttitor eros at, efficitur nunc. Morbi ligula purus, fermentum et tristique id, interdum nec orci. Suspendisse et porta mi.',
    lerolero: 'Caros amigos, a infinita diversidade da realidade única reabilita a condição inicial das condições epistemológicas e cognitivas exigidas. Wittgenstein - o primeiro - redigiu sua obra seminal se baseando no pressuposto de que a complexidade dos estudos efetuados cumpre um papel essencial na formulação da fundamentação metafísica das representações. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a estrutura atual da ideação semântica exige a precisão e a definição do sistema de conhecimento geral. '
  }

  //layout que será gerado para a tela
  render(){
    return (
      <View style={meusEstilos.mainView}>
        <ScrollView>
          
          <Header headerText='FiapGRAM'/>         
          <User username='fulano'/>
          <PostImage        imageSource='https://image.freepik.com/vetores-gratis/colecao-de-infografico-de-coronavirus_23-2148473792.jpg'
            />
          <PostBody bodyText={this.state.mensagem} />



          <User username='lerolero'/>
          <PostImage     imageSource='https://image.freepik.com/fotos-gratis/interface-de-tela-de-tecnologia-futurista_23-2148468690.jpg'
            />
            
            <PostBody bodyText={this.state.lerolero} />


          <User username='minhacomida'/>
          <PostImage          imageSource='https://image.freepik.com/vetores-gratis/ilustracao-de-grelha-de-hamburguer-no-quadro-negro_62951-26.jpg'/>
            <PostBody bodyText={this.state.lerolero} />


        </ScrollView>
      </View>
    );
  }

}
export default App


//sobre o flexbox

//flexDirection -> row,column
//flex -> prioridade de espaçamento entre elementos

//alignItems -> ajuste do eixo secundário
//flex-start, center, flex-end, e stretch. 

//justifyContent -> distribuição descendente
//flex-start,center, flex-end, space-around, e space-between

const meusEstilos = StyleSheet.create({
  mainView: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30
  }
});
