const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error()
    message = message.toUpperCase().split("")
    key = key.toUpperCase().split("")
    let result = []
    let keyLetterIndexes = []
    let temp = 0
    for (let i = 0; i < key.length; i++) {
      keyLetterIndexes.push(key[i].charCodeAt(0) - "A".charCodeAt(0))
    }
    for (let k = 0; k < message.length; k++) {
      let char = message[k].charCodeAt() - "A".charCodeAt()

      if (char > 25 || char < 0) {
        result.push(message[k])
      } else {
        result.push(
          String.fromCharCode(
            ((char + keyLetterIndexes[temp % key.length]) % 26) + 65
          )
        )
        temp++
      }
    }

    if (this.direct) {
      result = result.join("")
    } else {
      result = result.reverse().join("")
    }

    return result
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error()
    encryptedMessage = encryptedMessage.toUpperCase().split("")
    key = key.toUpperCase().split("")
    let result = []
    let keyLetterIndexes = []
    let temp = 0
    for (let i = 0; i < key.length; i++) {
      keyLetterIndexes.push(key[i].charCodeAt(0) - "A".charCodeAt(0))
    }

    for (let k = 0; k < encryptedMessage.length; k++) {
      let char = encryptedMessage[k].charCodeAt() - "A".charCodeAt()
      if (char > 25 || char < 0) {
        result.push(encryptedMessage[k])
      } else {
        result.push(
          String.fromCharCode(
            ((char - keyLetterIndexes[temp % key.length] + 26) % 26) + 65
          )
        )
        temp++
      }
    }

    if (this.direct) {
      result = result.join("");
    } else {
      result = result.reverse().join("");
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
