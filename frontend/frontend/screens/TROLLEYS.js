import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

class Trolleys extends Component {
  constructor(props) {
    super(props);
    // Initial state with an empty array for trolleys
    this.state = {
      trolleys: [],
    };
  }

  renderTrolleyItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      {/* Add more details or actions as needed */}
    </View>
  );

  render() {
    return (
      <View>
        <Text>Trolleys</Text>
        <FlatList
          data={this.state.trolleys}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderTrolleyItem}
        />
      </View>
    );
  }
}

export default Trolleys;
