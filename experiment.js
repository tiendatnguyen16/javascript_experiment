const obj = {
    "name": "Dat",
    "age": 39
};

console.log(Object.keys(obj));

const stringWithVars = pm.variables.replaceIn("Hi, my name is {{$randomFirstName}}");
console.log(stringWithVars);

const str = '0123456';

console.log(str.substring(1, 3));
// Expected output: "12"

console.log(str.substring(1));
// Expected output: "123456"
//>>> không đưa ra end index <> lấy từ thằng start index đến hết string.

let text = "Hello world!";
let result = text.substring(1, 4);

const faker = require('faker');
const randomHex = faker.internet.color();
const hexWithoutHash = randomHex.substring(1);

pm.sendRequest({
    url: `https://www.thecolorapi.com/id?hex=${hexWithoutHash}`,
    method: 'GET',
}, function (err, res) {
    if (err) {
        console.error(err);
        return;
    }

    const responseJson = res.json();

    const payload = {
        hex: randomHex,
        rgb: responseJson.rgb.value,
        name: responseJson.name.value
    };

    pm.environment.set("payload", JSON.stringify(payload));
});
