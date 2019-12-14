const Animal = require('./animal');

/**
* Class for handling Tigers behaviour and properties
*
* @class Tiger
* @extends {Animal}
*/
class Tiger extends Animal {
    /**
     *Creates an instance of Tiger.
     * @param {String} sound An optional sound. Defaults to 'grrr'
     * @memberof Tiger
     */    
    constructor(sound) {
        super(sound ? sound : 'grrr');
    }
}

module.exports = Tiger;