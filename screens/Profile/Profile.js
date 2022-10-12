import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const Profile = props => {
  const gotoscreen = () => {
    props.navigation.navigate('ProfileEdit');
  };
  return (
    <SafeAreaView>
      <Text>Hello Profile</Text>
      <Button title="Go to profile edit" onPress={gotoscreen} />
    </SafeAreaView>
  );
};

export default Profile;
