// // import { apiKey, testes } from "./util.js"; // import by variabel | name import
// import { apiKey, testes as tostos } from "./util.js"; // import by variabel | name import
// import test from "./util.js" // import default
// import * as a from "./util.js" // multiple import 

// import { use } from "react";

// import { use } from "react";

// console.log(test);
// // console.log(testes);
// console.log(apiKey);


// console.log(a.testes);
// console.log(a.default);
// console.log(a.apiKey);
// console.log(tostos);

// const abc = (a, b) => a * b;
// console.log(abc(2, 4));


// const user = {
//     name: "Martin",
//     age: 23,
//     greet() {
//         console.log("hallo  ");
//         console.log(this.age);
//     }
//     //   greet: () => {
//     //     console.log("hallo  ");
//     //     // console.log(this.age);
//     // }
// }
// console.log(user);
// console.log("user name :" + user.name);
// console.log(user.age);
// console.log(user.greet());

// class userObject {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log("hi~!");
//     }
// }

// const user1 = new userObject("martin", 3);
// console.log(user1);
// console.log(user1.greet());



// list

const hobbies = [
    "sport", "cooking", "footbal", "basket"
]

console.log(hobbies[1]);
hobbies.push("mancing");
const index = hobbies.findIndex((item) => {
    return item === "mancing";
});
console.log(index);


const editedHobies = hobbies.map((item) => item + "!");
console.log(editedHobies);

const editedHobiesObject = hobbies.map((item) => ({ text: item }));

console.log(editedHobiesObject);
// apakah ada error dengan keyboard saya


// destructuring list
const userNameData = ["Mart", "In"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];
const [firstname, lastname] = userNameData;
console.log(firstname + " " + lastname);

// destructuring object

const { name: test1, namabe } = { name: "agus", namabe: "Bowo" };

console.log(test1 + " " + namabe);


function order(orderObject) {
    console.log(orderObject.nama);
    console.log(orderObject.kuantity);
}
// lebih baik pakai ini
function order1({ nama, kuantity }) {
    console.log(nama);
    console.log(kuantity);
}
order({ nama: "artin", kuantity: 4 });
order1({ nama: "artin", kuantity: 4 });



// spread operator
// list
const array1 = ["satu", "dua", "tiga"];
const array2 = ["empat", "lima", "enam"];
const array3 = [array1, array2]; // menghasilkan dua array [array2, array2]
const array4 = [...array1, ...array2]; // menghasilkan 1 array ]
console.log(array3);
console.log(array4);


// berlaku juga untuk Object
const object1 = {
    name: "Zuliana",
    gelar: "Mba"
};
const object2 = {
    asal: "temanggung",
    alumni: "UGM",
    ...array2,
    ...object1
};

console.log(object2);


// const nilai = prompt('masukan nilai 1-100');
// if (nilai >= 80) {
//     console.log("anda lulus dengan sangat baik");
// }
// else if (nilai >= 60) {
//     console.log("anda lulus baik");
// }
// else {
//     console.log("anda ridak lulus");
// }


for (let angka in array4) {
    console.log(angka);
}



// primitive vales vs references value


const readonlyList = [1, 2];
readonlyList.push(3);//walaupun const tapi bisandiubah karen akita mengubah nilainya bukan alamatnya
console.log("masuk sini");

// readonlyList = [];//tidak bisa karena merubah alamatnya
console.log("masuk sini2");

function f() {
    console.log(Array.prototype.join.call(arguments, "-"));
}

f("a", "b"); // 'a+b'
