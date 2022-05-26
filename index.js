// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

const color = [...new Set(["Yellow", "Pink", "White", "Purple"])];
// console.log(color);
firstUser.color = color;
firstUser.isHavePet = "Yes";

const education = [{}, {}, {}];
education[0].name = "SD 01";
education[0].city = "Jakarta";
education[0].graduate = "2016";
education[1].name = "SMP 02";
education[1].city = "Jakarta";
education[1].graduate = "2019";
education[2].name = "SMA 03";
education[2].city = "Tangerang";
firstUser.education = education;

const restaurant = [...new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"])];
// console.log(restaurant);
firstUser.restaurant = restaurant;

const secondUser = {};
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

const color2 = [...new Set(["Blue", "Black", "Gray"])];
// console.log(color);
secondUser.color = color2;
secondUser.isHavePet = "No";

const education2 = [{}, {}, {}, {}];
education2[0].name = "SD 02";
education2[0].city = "Jakarta";
education2[0].graduate = "2010";
education2[1].name = "SMP 03";
education2[1].city = "Bogor";
education2[1].graduate = "2013";
education2[2].name = "SMA 01";
education2[2].city = "Surabaya";
education2[2].graduate = "2016";
education2[3].name = "Universitas Maju";
education2[3].city = "Tangerang";
secondUser.education = education2;

const restaurant2 = [...new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"])];
// console.log(restaurant);
secondUser.restaurant = restaurant2;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
