const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data = null) {
    if (data) {
      this.fromData(data)
    } else {
      this.timestamp = Date.now();
      this.transactions = [];
      this.nonce = 0;
      this.solved = false;
      this.minerUUID = null;
      this.coinbaseSet = false;
    }
  }

  hash() {
    const transactioJson = JSON.stringify(this.transactions);
    const hashable = `${this.timestamp} ${nonce} ${transactioJson}`

    return SHA256(hashable).toString();
  }

  fromData(jsonData) {
    this.timestamp = data.timestampe;
    this.transactions = data.transactions;
    this.nonce = data.nonce;
    this.solved = true;
    this.transactionVolume = data.transactionVolume;
    this.transactionCount = data.transactionCount;
    this.minerUUID = data.minerUUID;
  }

  serialize() {
    // optional??
    // {
    //   merkleRoot: null,
    //
    // }

    return JSON.stringify({
      hashUUID: this.hash(),
      timestamp: this.timestamp,
      minerUUID: this.muuid,
      transactions: this.transactions,
      transactionCount: this.transactions.length,
      transactionVolume: this.transactions.reduce((total, tx) => total += tx),
      nonce: this.nonce,
    })
  }

  addTransaction(transaction) {
    if (!this.coinbaseSet) {
      transaction.coinbase = true;
    }
    this.transactions.push(transaction)
  }

  execute() {
    this.transactions.forEach((transaction) => transaction.execute())
  }

  setMiner(id) {
    this.muuid = uuid
  }
}

module.exports = Block
