import { browserName, browserVersion } 
from "react-device-detect"


export function deviceCheck(){
console.log(`${browserName} 
${browserVersion}`);}