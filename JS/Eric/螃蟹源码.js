var xxtea = require('xxtea-node');

var prefix = `29hgfhdfv78344`;

function stormEncrypt(data,uid){
    return new Buffer(xxtea.encrypt(xxtea.toBytes(data), xxtea.toBytes(prefix + uid))).toString('base64');
}

function stormDecrypt(data,uid){
    return xxtea.toString(xxtea.decrypt(data, xxtea.toBytes(prefix + uid)));
}

module.exports={stormEncrypt, stormDecrypt}
