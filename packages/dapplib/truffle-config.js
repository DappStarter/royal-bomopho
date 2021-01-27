require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stomach dash remember unlock half kangaroo army giggle'; 
let testAccounts = [
"0x941b38cecdc7917a80ef0c4f0646c47a9da15473004f598517ad7f798c321a22",
"0x7e123008614e5a96e3438de09be5c3784f537465b942c48b660b55196d9e9849",
"0xd27e4b2302df217df4e7bf0a1236d46c59b95e7cbfa41b388886002bdb9ab401",
"0x3acf87c56a3ca114e54e5b3b5593aac2a1d32a6e3a7297e9cecf80750d5cb51c",
"0x29f26eead5107f6a7445da80ce893e83373223046cf9721c7c5f74e8d6bca04a",
"0x2297218d6179fc1c647093f0799d68cf8501ff51e66e64852cd431d4348d8da9",
"0xabf80224c23d5a675e2b573de19dc0cbbc641ca9a27cf8592e9c65a8b1a90fe2",
"0x05afc4189e9d1069c1b0bd0b2644e76b3e154597afac32855c557491cb7bb7c5",
"0x05023d16d929df1fc1f7ad9b9bc2c47a14317f9fbada821439b0f68344fd22d5",
"0x1401a7043d7f864564e5e1d405d426155f7eb4a787978b6b76bbaed03c9c1c05"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
