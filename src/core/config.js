const STATUSES = {
  confirmed: 'confirmed',
  unconfirmed: 'unconfirmed',
}

const STATUSES_VALUES = Object.keys(STATUSES);

// 1 of every 16 blocks - 0123456789abcdef
// TODO add an adjusting difficulty on block height?
const TARGET_DIFFICULTY = BigInt("0x00" + "F".repeat(63));

module.exports = {
  STATUSES,
  STATUSES_VALUES,
  TARGET_DIFFICULTY
}
