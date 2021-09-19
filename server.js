const { v4: uuidv4 } = require('uuid')
const checkStatus = require('./functions/checkStatus')
const register = require('./functions/register')
const registerMultiple = require('./functions/registerMultiple')

 
const init = async () => {
    try{
   
        // Check status of record ID
        await checkStatus('0x8b9ed7f2f870f97bbe080fae3f20cda0c499ffc9')



        // Register single record ID 
        await register("0xb5dab3fc4c12907bd259009c6c88aaee741afffd",  uuidv4(), "1", "AD")


        // Register multiple record IDs
        await registerMultiple([ 
            ["0xbe78c3fbceb85ea3b4092f2422e73fd28a3f0d61" , "2F1C8F27-5743-4E0A-A810-075A4179FA95" , 1, "AD"],
            ["0x8b9452d6f0fb09eb993905449fdf194127467a91" , "5943557E-B514-429A-BF66-021786F511AE" , 2, "AD"],
            ["0x6104a3a414a49ad7fd362a50e38abbd4ef0dd877" , "1A80948B-DC47-4622-908F-3F185A7C6CD3" , 3, "AD"],
            ["0x65fcdbd828da05a5a3e3ea71900c94e38d676c5f" , "B20E4213-8CBC-41EF-8B04-B869405FFF80" , 4, "AD"],
            ["0x090d17279268618dfec98bffd7ba1d63cf48a6fb" , "AFB562F7-2D1C-434A-B752-BB64DA625014" , 5, "AD"],
            ["0xb5dab3fc4c12907bd259009c6c88aaee741afffd" , "71A1A4CD-203D-4EE2-AA2D-1B24CBC1B511" , 6, "AD"],
            ["0x46300514b01facaed4ebbfc36c7695391fc65bf4" , "9F16BAFC-4524-4312-A6BB-01EF33697401" , 7, "AD"],
            ["0xdff7b4acc05d7185a85fbbffd329f421728e3bd7" , "A537F45A-55D7-4331-A2AA-4B2A3077F8A1" , 8, "AD"],
            ["0xaccc8844729f1271d75fdd1564eb943f4ce6e530" , "2C65B793-BAE2-4E4B-AF3E-DF6DDC08A6B1" , 9, "AD"],
            ["0xdcd16c955b6f876a0824cf1a13100ae22d6558c3" , "CEB870AF-4CD2-4F43-A48D-1AFEB4EB23AD" , 10, "AD"],
            ["0x8b9ed7f2f870f97bbe080fae3f20cda0c499ffc9" , "563FF7A5-A3D8-4C13-BAB7-9C85EA256267" , 11, "AD"],
            ["0x2b63de9910cd4fff1b1e5cec5e7e1605ac84b21e" , "0DD22C43-1982-4703-91A5-B0B23B219BDE" , 12, "AD"],
            ["0x625a4a2bbbcc6f40efd34fd5f3679c0246d96638" , "C25209CD-B4D1-4B85-834D-0468B91A5314" , 13, "AD"],
            ["0xb371ce76a420ed9fdb3c1334aba1d9649a5cf469" , "77C5F88E-AA04-486D-9DEB-F560BA20F944" , 14, "AD"],
            ["0x66cc7c38fb59b9893a5e935fb7e1deff9f0c62da" , "BD32A68B-63D4-45BA-9DA5-B639E8DE6535" , 15, "AD"],
            ["0x0107be12fee6004cad44b7113eba26b1a9a32f78" , "2D03CAEF-F690-4380-9C9A-EC75897895B8" , 16, "AD"],
            ["0x861fd8c3ec9c341f1786b4da21cad60c47cb5918" , "34DFE39A-D02C-452C-86DA-EE92C48581BF" , 17, "AD"],
            ["0x71aaecd9a8fb6e8d1980d82c65b9c3b21a9964c9" , "2FE0D18C-CE30-4151-9CA6-137A73FDE653" , 18, "AD"],
            ["0x7bde12c4d8d6c22cf3d2f1e8e4d22df3404338c0" , "5C1CDEA5-D695-4694-97D3-07ECA745A78B" , 19, "AD"],
            ["0x2076e3285309c351c1fecee81f1b87b1bd12cab0" , "DD3CC327-B8E8-4CE6-B624-254C96CC71D0" , 20, "AD"],
        ])


    }catch(e){
        console.log(e)
    }
}
init()