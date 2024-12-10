import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Profile" component={ProfileScreen} />
		</Drawer.Navigator>
	);
}
