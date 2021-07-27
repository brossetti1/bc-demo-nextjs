path = require('path');
fs = require('fs');

STORAGE_FILE = path.resolve(__dirname) + '/storage/chainData.json';

const chainData = fs.readFile(STORAGE_FILE, (err, chainData) => {
  if (err) throw err;
  console.log(chainData)
  return JSON.parse(chainData)
});

const chainHelper = {
  currentBlock: chainData.currentBlock,
  currentTransactions: chainData.currentBlock.transactions,
  blocks: chainData.blocks,
  mempool: chainData.mempool,
}

function findBlock(hashUUID) {
  const block = blocks.find((block) => block.hashUUID === hashUUID)

  if (!block) {
    throw `block with uuid ${uuid} does not exist on the chain`
  }
}

function writeBlockToChain(block) {
  if (!block.solved) { return false } //????


  block.resolve()

  writeChainData({
    ...chainData,
    blocks: {
      ...chainData.blocks,
      ...block
    }
  })
}

function writeChainData(data) {
  fs.writeFile(STORAGE_FILE, data, (err) => {
    if (err) throw err;
    return true;
  });
}

module.exports = {
  chainData,
  chainHelper,
  writeBlockToChain
};
