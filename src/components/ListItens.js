import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import axios from 'axios';

import Item from './Item';

 class ListItens extends Component {

 	constructor(props) {
 		super(props);
 		this.state = { listaItens: [] };
 		console.log('construtor....');
 	}

 	componentWillMount() {
 		console.log('will mount....');

		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		  .then( (response) => {
		    	
		    	this.setState( { listaItens: response.data });
		    	console.log(response);
			})
		.catch( (error) => {
		    console.log(error);
		}); 		
 	}	

  render() {
  	console.log('render....')
    return (
        <ScrollView>
          
          { 
            this.state.listaItens.map( (item) => 
              (<Item key={item.titulo} item={item}></Item>) 
            ) 
          }

        </ScrollView>
    );
  }
}

export default ListItens;