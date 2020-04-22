import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class PostBody extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <Text style={{width:'100%',
                    padding: 10,
                    textAlign:'justify',
                    fontSize: 10}}>{this.props.bodyText}</Text>
    );


  }
}

PostBody.propTypes = {bodyText: PropTypes.string.isRequired};