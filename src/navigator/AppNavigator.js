import React from 'react';
import styled from 'styled-components';
import Vicon from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
  // createDrawerNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Icon from '../components/icons/CustomIcon';
// Screens
import { Dashboard, Another, DetailMarketplace } from '../screens';
// Colors
const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

// Home Stack Navigator
const AppHomeStackNavigator = createStackNavigator({
  Dashboard,
  DetailMarketplace,
  Another
});

AppHomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'DetailMarketplace') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Icon
        name="house-outline"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

// Portofolio Stack Navigator
const AppPortofolioNavigotor = createStackNavigator({
  Portofolio: Dashboard
});

AppPortofolioNavigotor.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'DetailMarketplace') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Icon
        name="suitcase"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

// Main Stack Navigator
const AppMainNavigator = createStackNavigator({
  Main: Dashboard
});

AppMainNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'DetailMarketplace') {
    tabBarVisible = false;
  }

  return {
    title: '',
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <ContainerMiddleBottomTab>
        <WrapperMiddleIcon>
          <Icon
            name="hand-holding-up-a-sprout"
            size={30}
            color={focused ? activeColor : inactiveColor}
          />
        </WrapperMiddleIcon>
      </ContainerMiddleBottomTab>
    )
  };
};

const ContainerMiddleBottomTab = styled.View`
  margin-bottom: 20px;
  padding: 10px;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50px;
  border-top-color: #605f60;
`;

const WrapperMiddleIcon = styled.View`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: blue;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;

// Wallet Stack Navigator
const AppWalletNavigator = createStackNavigator({
  Dompet: Dashboard
});

AppWalletNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'DetailMarketplace') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Icon
        name="wallet"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

// Another Stack Navigator
const AppAnotherNavigator = createStackNavigator({
  Lainnya: Dashboard
});

AppAnotherNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === 'DetailMarketplace') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <Vicon
        name="ios-more"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const AppBottomNavigator = createBottomTabNavigator({
  Beranda: AppHomeStackNavigator,
  Portofolio: AppPortofolioNavigotor,
  Main: AppMainNavigator,
  Dompet: AppWalletNavigator,
  Lainnya: AppAnotherNavigator
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
const AppContainer = createAppContainer(AppBottomNavigator);

export default AppContainer;
