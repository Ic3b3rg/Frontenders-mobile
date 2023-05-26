import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UseAsyncStorageParams<T> = {
  key: string;
  initialValue?: T;
}

type UseAsyncStorage<T> = {
  value: T | undefined;
  setValue: (value: T) => void;
  removeValue: () => void;
}

const useAsyncStorage = <T>({ key, initialValue }: UseAsyncStorageParams<T>): UseAsyncStorage<T> => {
  const [value, setValue] = useState<T | undefined>(initialValue);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue !== null) {
          setValue(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.error(e);
      }
    };

    getData();
  }, [key]);

  const setAndStoreValue = async (newValue: T) => {
    try {
      setValue(newValue);
      const jsonValue = JSON.stringify(newValue);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const removeValue = async () => {
    try {
      setValue(undefined);
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(e);
    }
  };

  return { value, setValue: setAndStoreValue, removeValue };
};

export default useAsyncStorage;
