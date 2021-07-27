const uuidv4 = require("uuid/v4")

class SoloSession {
  constructor() {
    this.client = null;
    this.sessionId = `solo-${uuidv4()}`;
  }

  addClient() {
    this.client = new Client();
  }

  create() {
    // get public key from server for signing; server stores private keys??
  }


  startMining() {

  }

  stopMining() {

  }
}
