import React, {Component} from 'react';
import api from '../services/api';

import {Text, View} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Looknet Digital',
  };

  state = {
    counter: 0,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const {docs} = response.data;

    this.setState({counter: docs.length});
  };

  render() {
    return (
      <View>
        <Text>Página de Produtos: {this.state.counter}</Text>
      </View>
    );
  }
}
