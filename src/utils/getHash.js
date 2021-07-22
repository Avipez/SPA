console.log(location.hash.slice(1).split("/")[1]|| "/")

const getHash = () => location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";
console.log(`OA ${getHash()}`)
export default getHash;