import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';

export const ROOT_STACK_NAVIGATION = {
	HOME: 'Home',
	DETAILS: 'Details'
} as const;

export type RootStackParamList = {
	[ROOT_STACK_NAVIGATION.HOME]: undefined;
	[ROOT_STACK_NAVIGATION.DETAILS]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
	return (
		<Stack.Navigator initialRouteName={ROOT_STACK_NAVIGATION.HOME}>
			<Stack.Screen name={ROOT_STACK_NAVIGATION.HOME} component={HomeScreen} />
			<Stack.Screen name={ROOT_STACK_NAVIGATION.DETAILS} component={DetailsScreen} />
		</Stack.Navigator>
	);
}
