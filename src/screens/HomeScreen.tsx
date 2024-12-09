import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROOT_STACK_NAVIGATION, RootStackParamList } from '../navigations/stacks/RootStack';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, typeof ROOT_STACK_NAVIGATION.HOME>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Home</Text>
			<Button title="move to details screen" onPress={() => navigation.navigate(ROOT_STACK_NAVIGATION.DETAILS)} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
