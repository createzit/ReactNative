import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    }, 
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <DirectoryNavigator />
            </View>
        );
    }
}

export default Main;























// import React, { Component } from 'react';
// import Directory from './DirectoryComponent';
// import { CAMPSITES } from '../shared/campsites';
// import CampsiteInfo from './CampsiteInfoComponent';
// import { View } from 'react-native';

// class Main extends Component{
//     constructor(props) {
//         super(props);
    
//         this.state = {
//             campsites: CAMPSITES,
//             selectedCampsite: null
//         };
//     }

//     onCampsiteSelect(campsiteId) {
//         this.setState({selectedCampsite: campsiteId});
//     }

//     render() {
//         return (
//             <View style={{flex: 1}}>
//                 <Directory campsites={this.state.campsites} onPress={campsiteId => this.onCampsiteSelect(campsiteId)} />
//                 <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
//             </View>)
//     }
    
// }
// export default Main;