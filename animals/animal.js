const split = require('lodash/split');
const reduce = require('lodash/reduce');
const isString = require('lodash/isString');

/**
 * Base class for all Animals. Contains basic data and methods for handing "language"
 *
 * @class Animal
 */
class Animal {
    /**
     * Creates an instance of Animal.
     *
     * @param {String} sound The sound the animal will intersperse into messages.
     * @memberof Animal
     */
    constructor(sound) {
        sound = sound ? "" + sound : ''; // Coerce sound into a string
        this.animalSound = sound ? ' ' + sound.toString().trim() : '';
    }

    /**
     * Generates a message in "animal" language. Mixing the animal sound into message words.
     *
     * @param {String} message The orignial message
     * @returns A processed message with interspersed animal sounds.
     * @memberof Animal
     */
    speak(message) {
        // Regex containing the elements to be used as word delimiters (lookahead pattern to keep the delimiters in the array).
        const delimiterPattern = /([\s,_.:;})\]])/;

        message = message ? "" + message : ''; // Coerce message into a string

        if (message && !isString(message) && !('toString' in message)) {
            throw new TypeError('The message cannot be converted to a string');
        }

        // Split the original message into words (using Regex to find delimiters)
        const parts = split(message.toString().trim(), delimiterPattern);

        // Process each word. Add animal sound to each word and add original delimiters to message.
        const finalMessage = reduce(parts, (result, part) => {
            // Ignore empty array elements
            if (part != '') {
                // If it's a delimiter, just add it to the final message.
                if (delimiterPattern.test(part)) {
                    result = result.concat(part);
                }
                else { // It's a word, add it and concatenate the animal sound to the final message.
                    result = result.concat(part, this.animalSound);
                }
            }

            return result;
        }, '');

        return finalMessage;
    }
}

module.exports = Animal;