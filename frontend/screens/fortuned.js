import React, { Component } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import Wheel from './wheel'; // Assuming Wheel component is in a separate file

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.wheelRef = React.createRef();
    this.state = {
      winner: null,
    };
  }

  componentDidMount() {
    // Access the Wheel component instance using the ref
    console.log(this.wheelRef.current);
  }

  spinWheel = () => {
    // Call the _onPress method of the Wheel component to spin the wheel
    if (this.wheelRef.current) {
      this.wheelRef.current._onPress();
    }
  };

  handleWinner = (winner, winnerIndex) => {
    // Update state with the winner's information after the spin completes
    this.setState({ winner: winner });
  };

  render() {
    // Define options object with onRef and getWinner functions
    const options = {
      rewards: ['Reward 1', 'Reward 2', 'Reward 3'], // Example rewards array
      // Other properties like colors, duration, etc. can be added here
      onRef: ref => {
        this.wheelRef.current = ref;
      },
      getWinner: this.handleWinner,
    };

    return (
      <View style={styles.container}>
        {/* Pass options object as prop to the Wheel component */}
        <Wheel options={options} />
        {/* Button to spin the wheel */}
        <Button title="Spin Wheel" onPress={this.spinWheel} />
        {/* Display winner's text in a festive style */}
        {this.state.winner && (
          <Text style={styles.winnerText}>{this.state.winner}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff69b4', // Pink color for Fiesta style
    marginTop: 20,
    textAlign: 'center',
    textShadowColor: '#ff69b4',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default ParentComponent;
