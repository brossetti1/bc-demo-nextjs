const { STATUSES } = require('../config');

class Transaction {
  constructor(feeReward) {
    this.feeReward = feeReward
    this.status = STATUSES.unconfirmed
  }
}
