const Gnosis = require('@gnosis.pm/gnosisjs');
const Web3 = require('web3');

const options = {
  ethereum: new Web3(new Web3.providers.HttpProvider('http://localhost:8545')).currentProvider,
  ipfs: {
    host: 'localhost',
    port: 5001,
    protocol: 'http'
  }
};

let gnosisInstance;
let ipfsHash;
let oracle;
let categoricalEvent;
let market;

Gnosis.create(options)
.then(result => {
    gnosisInstance = result;
    // And then, to read it...
    gnosisInstance.resolveEvent(process.argv[2] ,process.argv[3])
    .then(result => {
        console.info(result);
    })
    .catch(error => {
        console.warn(error);
    });
})
.catch(error => {
  console.warn('Make sure that Gnosis Development kit is up and running');
});
