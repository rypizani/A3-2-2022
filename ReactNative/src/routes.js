import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Candy from './pages/Candy';
import Elevator from './pages/Elevator';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor:'#171626',
                    borderTopWidth:0,
                    bottom:14,
                    left:14,
                    right:14,
                    elevation:0,
                    borderRadius:4,
                    height:60
                }
            }}>
            <Tab.Screen 
                name="Candy"
                component={Candy}
                options={{
                    headerShown:false,
                    tabBarIcon:({focused})=>{
                        if(focused){
                            return <MaterialCommunityIcons name="candy" size={30} color="#AB0013" /> 
                        }
                        return <MaterialCommunityIcons name="candy-outline" size={30} color="#b3192a" />
                    }
                }}
            />
            <Tab.Screen 
                name="Elevator"
                component={Elevator}
                options={{
                    headerShown:false,
                    tabBarIcon:({focused})=>{
                        if(focused){
                            return <MaterialCommunityIcons name="elevator-passenger" size={30} color="#979796" />
                        }
                        return <MaterialCommunityIcons name="elevator-passenger-outline" size={30} color="#7e7e7d" />
                    }
                }}
            />
            
        </Tab.Navigator>
    )
}

export default Routes;