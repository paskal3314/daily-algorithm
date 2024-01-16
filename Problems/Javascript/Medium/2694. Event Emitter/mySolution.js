// Beats 98.21%
class EventEmitter {
    constructor() {
        this.callbackMap = {};
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        
        if(!this.callbackMap[eventName]) {
            this.callbackMap[eventName] = [];
        }
        this.callbackMap[eventName].push(callback);

        return {
            unsubscribe: () => {
                const index = this.callbackMap[eventName].findIndex(cb => cb === callback);
                if(index !== -1) {
                    this.callbackMap[eventName].splice(index, 1);
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const result = [];
        if(!this.callbackMap[eventName]) {
            return [];
        }
        const n = this.callbackMap[eventName].length || 0;
        for(let i=0; i<n; i++) {
            result.push(this.callbackMap[eventName][i](...args));
        }
        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */