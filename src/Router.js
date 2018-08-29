import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Scanner from './components/Scanner'
import { Icon } from 'native-base';

const TabIcon = ({ selected, title }) => {
    return (
      <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
    );
  };


const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar >
        <Scene 
        key='tabbar'
        tabs
        tabBarStyle={{ backgroundColor: '#FFFFFF' }} 
        >
          <Scene key="scanner" title="Scanner" icon={TabIcon}>
            <Scene
            key='scanner'
            component={Scanner}
            />
          </Scene>   
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
