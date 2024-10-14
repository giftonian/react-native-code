// alert("alert from external file")
import { apiKey, abc as message } from "./util.js"; // See, aliasing the abc named export
// import * as util from "./util.js" // grouping all exports into util object => util.apiKey

/*function logText(txt) {
    console.log("Here is the text:" + txt)
}*/

console.log("API KEY = " + apiKey)