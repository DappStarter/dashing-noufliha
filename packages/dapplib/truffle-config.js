require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note rifle upgrade grid globe foam secret'; 
let testAccounts = [
"0x614a7a66aaf6cfa10d05cffa4b3208effbed2fac3240597ce1de9979a6c8bed2",
"0x65e19616385c12f4d270aebd6dc90f28c1e307d4bea7cf8d0b23c9d4bcce0f61",
"0xe03cd3df3e9e3901e208b4d5547e7ea6283db706d2e0582848986ecd17e73bfb",
"0x3c08c04f29ce29f5060cd0c69a9ef65609bc6b1e2f9b9ecd241a15e4e0063844",
"0x0c27760635da18945afa2f186dd68c74c9f50238780b6e57ab59ff2fba05ef72",
"0x6f0fde9314cbfd66c867322339bdbe781723981d5f9c413826bec66613e86a7a",
"0x5f9fe051998515e85910900a23a88a1f6df1922328e19362b860e5a77d35e9fe",
"0x3c4f787b7dab24e0d946a8c02a2c1dd622bdc88e1594749c33a174796ef161d0",
"0xd6ba6823988891c6e8f80ea687e0cdef5d820a925eb0eff5169b201e5af9dd57",
"0xca6d1958354269ea3d4b17b6c349da8faffee8ccc8490c8ba6c70f4761714eb3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
