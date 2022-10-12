import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const Home = props => {
  const GoToProductScreen = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <SafeAreaView>
      <Text>Hello Home</Text>
      <Button title="Go To Product Screen" onPress={GoToProductScreen} />
    </SafeAreaView>
  );
};

export default Home;
