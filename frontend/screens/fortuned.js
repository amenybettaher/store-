import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Wheel from './wheel'; // Assuming Wheel component is in a separate file

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.wheelRef = React.createRef();
  }

  componentDidMount() {
    // Access the Wheel component instance using the ref
    console.log(this.wheelRef.current);
  }

  render() {
    // Define options object with onRef function
    const options = {
      rewards: ['Reward 1', 'Reward 2', 'Reward 3'], // Example rewards array
      // Other properties like colors, duration, etc. can be added here
      onRef: ref => {
        this.wheelRef.current = ref;
      },
    };

    return (
      <View style={styles.container}>
        {/* Pass options object as prop to the Wheel component */}
        <Wheel options={options} />
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
});

export default ParentComponent;
