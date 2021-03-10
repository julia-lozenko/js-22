/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;

// playlist.rating = 10;

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

/*
 * Короткая запись свойств
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username,
//   email,
// };

// console.log(signupData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);


// const myCrazyObject = {
//   name: 'A ridiculous object',
//  'some array': [7, 9, { purpuse: 'confusion', number: 123 }, 3.3],
//  'random animal': 'Banana Shark',
// };

// console.log(myCrazyObject['some array'][2].number);

// let {
//   ['some array']: [, , { number }],
// } = myCrazyObject;
// console.log(number);

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// const arr = [1, [1, 2, [3, 4]], [2, 4]];

// console.log(arr.join(',').split(','));

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// Пиши код ниже этой строки

for (let i = 0; i < orders.length; i+=1) { 
  const order = i + 1;
 
  console.log(order);

}



//   return messages.push(
//     `Готовим ${this.dish} для ${this.email}. Ваш заказ ${this.order}й в очереди.`,
//   );
// }

// const messages = [];
