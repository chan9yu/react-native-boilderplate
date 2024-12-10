import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigation from './navigations/RootNavigation';

export default function App() {
	return (
		<GestureHandlerRootView style={styles.container}>
			<SafeAreaProvider>
				<NavigationContainer>
					<RootNavigation />
				</NavigationContainer>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
