/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   changeName(newName) {
//     console.log('this внутри changeName: ', this);

//     this.name = newName;
//   },
//   addTrack(track) {
//     this.tracks.push(track);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// console.log(playlist.getTrackCount());

// playlist.changeName('Новое имя');

// playlist.addTrack('новый трек 1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('новый трек 2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);

// // console.log(playlist);

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];


// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const valuesArr = [];
//   for (const product of products) {

//     // console.log(product);
    
//     const keys = Object.keys(product);

//     // console.log(keys);

//     if (keys.includes(propName)) {
//       valuesArr.push(product[propName]);
//     }
//   }
//   // console.log(valuesArr);
//   return valuesArr;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName)
//       totalPrice = product.price * product.quantity;
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Радар'));

// function findMatches(arr, ...args) {
//   const matches = []; // Не изменяй эту строку

//   const arrOfAllArgs = [...arr];
//   console.log('arrOfAllArgs', arrOfAllArgs);
//   const restArgs = [...args];


//   for (const arg of arrOfAllArgs) {

//     console.log("arg", arg);

//     if (restArgs.includes(arg)) {
//       matches.push(arg);
//     }
    
//     }


//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 4, 2, 5));

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        return `Зелье ${potionName} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potionName);
  },

  removePotion(potionName) {
    let potionIndex = -1;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potion.name === potionName) {
        potionIndex = i;
        break;
      }
    }

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    let potionIndex = -1;
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        potionIndex = i; // 3
        break;
      }
    }

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    let potion = this.potions[potionIndex];
    potion.name = newName;

    this.potions.splice(potionIndex, 1, potion);
  },
  // Пиши код выше этой строки
};
