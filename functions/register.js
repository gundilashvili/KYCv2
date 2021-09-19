const Web3 = require('web3') 
const HDWalletProvider = require("@truffle/hdwallet-provider")
const config =  require('../config.json')  
const provider = new HDWalletProvider({ mnemonic: { phrase: config.mnemonic}, providerOrUrl: config.bsc_rpc_testnet}) 
const web3   = new Web3(provider)  
 
const contractAddress = config.contract_address_testnet 
const contractABI = require('../ABI/KYC_ABI_TESTNET')
const checkStatus = require('./checkStatus')


module.exports =  register = async ( recordID, uuidv4, level, recordType ) => {
    try{ 
         
        const accounts = await web3.eth.getAccounts()
        const account = accounts[0]

        console.log(`Registering account an account [${recordID}]`)
        const KYC =  await new web3.eth.Contract( contractABI, contractAddress)
        const txn = await KYC.methods.register(recordID, uuidv4, level, recordType).send({ from: account})
        console.log('Hash:', txn.transactionHash)
        checkStatus(recordID)

    }catch(e){
        console.log(e.message)
    }
}  
 