import React, {Component} from 'react';
import {Text, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class PostImage extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <Image
            source={{uri:this.props.imageSource}}
            style={{width: '100%',
                   height: 250,
                   resizeMode:'contain',
                   justifyContent:'center'}}
            />
    );


  }
}

PostImage.propTypes = {imageSource: PropTypes.string.isRequired};