import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator(
  {
    Main,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#228B22',
      },
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
      },
      headerTintColor: '#FFF',
    },
  },
);
