import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

 class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('entrou no Item.js metodo render');

    return (
        <View  style={ styles.item }>
          <View style={ styles.barraFoto }>
            <Image source={ {uri: this.props.item.foto } }  style={{width: 100, height: 100}} />
          </View>

          <View style={ styles.barraDetalhe }>
          	<Text style={ styles.tituloDetalhe }>{this.props.item.titulo}</Text>
            <Text style={ styles.valorDetalhe }>R$ {this.props.item.valor}</Text>
            <Text>{this.props.item.local_anuncio}</Text>
            <Text>Dt. da publicação: {this.props.item.data_publicacao}</Text>
          </View>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
    item:{
      flexDirection: 'row',
      borderBottomWidth :2, 
      borderColor:'#CCC',
      paddingBottom: 5,
      paddingTop: 5,
    },
    barraFoto:{
      width: 100, 
      height: 100,
      
    },
    barraDetalhe:{
       padding:5,flex:1
    },    
    tituloDetalhe: {
       fontSize:20, color:'red',fontWeight : 'bold'
    },
    valorDetalhe:{
      fontWeight : 'bold'
    }

});

export default Item;