import keycode from 'keycode';

export default class Keyboard {
    static isKey(event, key, callback) {
        if (keycode(event) === key) {
            callback();
        }
    }

    static on(key, callback) {
        const listener = event => this.isKey(event, key, callback);

        window.addEventListener('keyup', listener);

        return listener;
    }

    static off(listener) {
        window.removeEventListener('keyup', listener);
    }
}
