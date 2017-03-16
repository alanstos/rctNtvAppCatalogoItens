import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListItens from './src/components/ListItens';

export default class rctNtvAppCatalogoItens extends Component {

  render() {
    return (
        <ListItens />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('rctNtvAppCatalogoItens', () => rctNtvAppCatalogoItens);
