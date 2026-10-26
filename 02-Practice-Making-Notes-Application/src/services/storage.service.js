const imageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: "private_oiEjkvwuhR1sPEPg9RtA2JDUbv4="
})

async function uploadFile(buffer){
    const result = await imagekit.client.upload({
        
    })
}