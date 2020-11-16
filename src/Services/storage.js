import AsyncStorage from '@react-native-community/async-storage';

const store = async (key, value) => {
    try {
        const res = await AsyncStorage.setItem(key, JSON.stringify(value))
        return res ? true : false
    } catch (e) {
        return false
    }
};

const get = async (key) => {
    try {
        const res = await AsyncStorage.getItem(key)
        return res ? JSON.parse(res) : null
    } catch (e) {
        return null
    }
};

const remove = (key) => {
    try {
        const res = await AsyncStorage.removeItem(key)
        return res ? true : false
    } catch (e) {
        return false
    }
};


export default {
    store,
    get,
    remove
}