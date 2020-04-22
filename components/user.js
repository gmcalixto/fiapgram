import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class User extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <Text style={{width:'100%',
                   margin: 5,
                   textAlign: 'left',
                   fontSize: 15,
                   fontStyle:'italic'}}>{this.props.username}</Text>
    );


  }
}

User.propTypes = {username: PropTypes.string.isRequired};