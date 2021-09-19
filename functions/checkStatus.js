const Web3 = require('web3')  
const config =  require('../config.json')   
const web3 = new Web3(config.bsc_rpc_testnet)

const contractAddress = config.contract_address_testnet 
const contractABI = require('../ABI/KYC_ABI_TESTNET')


module.exports =  checkStatus = async ( recordID ) => {
    try{  

        console.log(`Getting status for [${recordID}]`)
        const KYC =  await new web3.eth.Contract( contractABI, contractAddress)
        const status = await KYC.methods.checkStatus(recordID).call()
 
        console.log('Status: ', status['0'])
        console.log('Record type: ', status['1'])
 
    }catch(e){
        console.log(e.message)
    }
}  
 