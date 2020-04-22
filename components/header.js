import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends React.Component {

  //construtor para uso do props
  constructor(props){
    super(props);
  }

  //renderização do componente
  render(){
    return(
      <Text style={{width:'100%',
                    borderWidth: 2,
                    padding: 10,
                    fontSize: 20,
                    textAlign:'left',
                    backgroundColor:'pink'}}>{this.props.headerText}</Text>
    );


  }
}

Header.propTypes = {headerText: PropTypes.string.isRequired};