import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

function Wallet({ wallet }) {
  return (
    <View>
      <Text>My Wallet</Text>
      <FlatList
        data={wallet}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            {/* Add any other details you want to display */}
          </View>
        )}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Wallet);