import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ROOT_STACK_NAVIGATION, RootStackParamList } from '../navigations/stacks/RootStack';

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, typeof ROOT_STACK_NAVIGATION.DETAILS>;

export default function DetailsScreen({ navigation }: DetailsScreenProps) {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Details</Text>
			<Button title="move to back" onPress={() => navigation.goBack()} />
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
