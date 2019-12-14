const Animal = require('./animal');

/**
 * Class for handling Lions behaviour and properties
 *
 * @class Lion
 * @extends {Animal}
 */
class Lion extends Animal {
    /**
     *Creates an instance of Lion.
     * @param {String} sound An optional sound. Defaults to 'roar'
     * @memberof Lion
     */
    constructor(sound) {
        super(sound ? sound : 'roar');
    }
}

module.exports = Lion;