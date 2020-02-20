import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
  {
    Main,
    Product,
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
