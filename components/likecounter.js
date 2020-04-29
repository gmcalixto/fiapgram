import React, {Component,useState} from 'react';
import {Text,TouchableOpacity,Image} from 'react-native';
import PropTypes from 'prop-types';


export default class LikeCounter extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  state={
    likes: this.props.likes
  }

  //renderização do componente
  render(){
    return(
          <TouchableOpacity
        style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  marginLeft: 10,
                  padding: 10}}
                  
        onPress={() => this.updateLike()}>
                    <Image 
                      source={require('../images/like.png')}/>
                      <Text> </Text>
                      <Text>{this.state.likes}</Text>
        </TouchableOpacity>
      
    );

  }
  updateLike(){
      var newValue = this.state.likes + 1;
      this.setState({likes: newValue})
    }
}

LikeCounter.propTypes = {likes: PropTypes.number.isRequired};