import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const Members = props => {
  return (
    <SafeAreaView>
      <Text>Hello Members</Text>
      <Button
        title="goto memberdetail"
        onPress={() => props.navigation.navigate('MemberDetail')}
      />
    </SafeAreaView>
  );
};

export default Members;
