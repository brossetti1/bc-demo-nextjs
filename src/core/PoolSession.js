const MAX_CLIENTS = 5.5
const MIN_CLIENTS = 3

class PoolSession {
  constructor() {
    this.clients = [];
    this.sessionId = `pool-${uuidv4()}`;
  }

  addClient() {
    const randomCount = Math.floor(Math.random() * (MAX_CLIENTS - MIN_CLIENTS) + MIN_CLIENTS);

    for (let index = 0; index < randomCount; index++) {
      const client = new Client();
      this.clients.push(client);
    }
  }

  create() {
    // get public key from server for signing; server stores private keys??
  }

  startMining() {

  }

  stopMining() {

  }
}
