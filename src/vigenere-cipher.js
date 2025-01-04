const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
/*class VigenereCipheringMachine {
  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
*/
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.#process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.#process(encryptedMessage, key, false);
  }

  #process(text, key, isEncrypting) {
    text = text.toUpperCase();
    key = key.toUpperCase();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textLength = text.length;
    const keyLength = key.length;

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < textLength; i++) {
      const char = text[i];

      if (alphabet.includes(char)) {
        const textCharIndex = alphabet.indexOf(char);
        const keyCharIndex = alphabet.indexOf(key[keyIndex % keyLength]);

        const newIndex = isEncrypting
          ? (textCharIndex + keyCharIndex) % 26
          : (textCharIndex - keyCharIndex + 26) % 26;

        result += alphabet[newIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}
module.exports = {
  VigenereCipheringMachine
};
