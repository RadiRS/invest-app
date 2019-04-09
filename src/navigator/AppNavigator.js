import {
  createStackNavigator,
  // createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
// Components
// import DrawerNavigator from '../components/drawer/DrawerNavigator';
// Screens
import { Dashboard, Another } from '../screens';

// Home Stack Navigator
const AppHomeStackNavigator = createStackNavigator({
  Dashboard,
  Another
});

// App Drawer Navigator
// const AppDrawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: AppHomeStackNavigator
//     },
//     Profile: {
//       screen: AppProfileStackNavigator
//     }
//   },
//   {
//     drawerPosition: 'left',
//     drawerType: 'slide',
//     drawerWidth: 400,
//     contentComponent: DrawerNavigator,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToogleRoute: 'DrawerToggle'
//   }
// );

// App Container
const AppContainer = createAppContainer(AppHomeStackNavigator);

export default AppContainer;
