import AsyncStorageModule from '@react-native-async-storage/async-storage';
import { view } from './storybook.requires';

const AsyncStorage = AsyncStorageModule?.default ?? AsyncStorageModule;

const storage =
	AsyncStorage?.getItem && AsyncStorage?.setItem
		? {
				getItem: AsyncStorage.getItem,
				setItem: AsyncStorage.setItem,
			}
		: undefined;

const StorybookUIRoot = view.getStorybookUI(
	storage
		? {
				storage,
			}
		: {}
);

export default StorybookUIRoot;
