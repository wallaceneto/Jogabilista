import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './styles';
import TabBar from '../../components/TabBar';

const Settings: React.FC = () => {
  const style = useStyles();

  return (
    <View style={{ flex: 1 }}>
      <View style={style.container}>
        <Text style={style.title}>Settings</Text>
      </View>

      <TabBar tab={3} />
    </View>
    );
}

export default Settings;