// примері работі - все через консоль лог
console.log("lessons");
// --------------
// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.
// Функція оголошує два параметри:
// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.
// --------------
// function isEnoughCapacity(products, containerSize) {
//   const salary = Object.values(products);
//   let totalValue = 0;
//   for (let i = 0; i < salary.length; i++) {
//     totalValue += salary[i];
//   }
//   return !(totalValue > containerSize);
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
// --------------
// --------------
// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.
// --------------
// /**
//  *
//  *
//  * @param {*} days
//  * @return {*}
//  */
// function calcAverageCalories(days) {
//   if (days.length === 0) {
//     return 0;
//   }
//   let aveCalories = 0;
//   for (const day of days) {
//     aveCalories += day.calories;
//   }
//   return aveCalories / days.length;
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180
// --------------
// --------------
// Об’єкт profile описує профіль користувача на ігровій платформі. У його властивостях зберігається ім’я профілю username та кількість активних годин playTime, проведених у грі.
// const profile = {
//     username: "Jacob",
//   playTime: 300,
// };
// Доповни об’єкт profile методами для роботи з його властивостями.
// Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.
// Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// --------------
// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"
// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"
// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"
// --------------
// --------------
// Доповни код так, щоб у змінній evenNumbers був масив парних чисел із масиву numbers, а у змінній oddNumbers — масив непарних.
// ---- filter ----------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter((number) => number % 2 == 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// --------------
// --------------
// -- filter map toSorted ------------
// Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// console.log("MIN_BOOK_RATING- ", MIN_BOOK_RATING);
// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
// --------------
// --------------
// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// -------------------
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((acc, user) => acc + user.balance, 0);
// };

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// --------------
// --------------
// ЗАДАЧА 1
// Напишіть скрипт,для обєкта user в послідовності:

//  добавляє поле mood із значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення  premium на false
// виводить отримане обєкта user в форматі ключ:значення використовуючи  Object.keys() и for...of

//  const user = {
//    name: "Mango",
//    age: 20,
//    hobby: "html",
//    premium: true,
// };

// ЗАДАЧА 2
// У вас є обєкт , у якому зберігаються зарплати нашої команди.
// Напишіть код , для підрахунку всіх зарплат і збережіть результат в змінні sum
// Повинно получитись 390, якщо обєкт salaries пустий , то результат буде 0
// ЩОБ МОЖНА БУЛО ПЕРЕВИКОРИСТОВУВАТИ ЛОГІКУ, ТОМУ ПИШЕМО ФУНКЦІЮ

//  const salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130,
//  };

// ЗАДАЧА 3
// Створи обєкт calculator(калькулятор) з 3-ма методами:
// read()- запитує 2 значення у юзера і зберігає їх як значення обєкта;
// sum() -повертає суму збережених значень;
// mult() -перемножує значення збережені і повертає результат;

//  const calculator = {
//  a: null,
//  b: null,

//   read() {},

//   sum() {},

//   mult() {},
// };

// calculator.read();
// console.log(`sum`, calculator.sum());
// console.log(`mult`, calculator.mult());
// --------------
// --------------

const presidents = [
  {
    first: "George",
    last: "Washington",
    bornData: 1732,
    diedData: 1799,
    startPresData: 1789,
    endPresData: 1797,
    presNumber: 1,
    presParty: "None",
  },
  {
    first: "John",
    last: "Adams",
    bornData: 1735,
    diedData: 1826,
    startPresData: 1797,
    endPresData: 1801,
    presNumber: 2,
    presParty: "Federalist",
  },
  {
    first: "Thomas",
    last: "Jefferson",
    bornData: 1743,
    diedData: 1826,
    startPresData: 1801,
    endPresData: 1809,
    presNumber: 3,
    presParty: "Democratic-Republican",
  },
  {
    first: "James",
    last: "Madison",
    bornData: 1751,
    diedData: 1836,
    startPresData: 1809,
    endPresData: 1817,
    presNumber: 4,
    presParty: "Democratic-Republican",
  },
  {
    first: "James",
    last: "Monroe",
    bornData: 1758,
    diedData: 1831,
    startPresData: 1817,
    endPresData: 1825,
    presNumber: 5,
    presParty: "Democratic-Republican",
  },
  {
    first: "John Quincy",
    last: "Adams",
    bornData: 1767,
    diedData: 1848,
    startPresData: 1825,
    endPresData: 1829,
    presNumber: 6,
    presParty: "Democratic-Republican",
  },
  {
    first: "Andrew",
    last: "Jackson",
    bornData: 1767,
    diedData: 1845,
    startPresData: 1829,
    endPresData: 1837,
    presNumber: 7,
    presParty: "Democratic",
  },
  {
    first: "Martin",
    last: "Van Buren",
    bornData: 1782,
    diedData: 1862,
    startPresData: 1837,
    endPresData: 1841,
    presNumber: 8,
    presParty: "Democratic",
  },
  {
    first: "William Henry",
    last: "Harrison",
    bornData: 1773,
    diedData: 1841,
    startPresData: 1841,
    endPresData: 1841,
    presNumber: 9,
    presParty: "Whig",
  },
  {
    first: "John",
    last: "Tyler",
    bornData: 1790,
    diedData: 1862,
    startPresData: 1841,
    endPresData: 1845,
    presNumber: 10,
    presParty: "Whig",
  },
  {
    first: "James",
    last: "Polk",
    bornData: 1795,
    diedData: 1849,
    startPresData: 1845,
    endPresData: 1849,
    presNumber: 11,
    presParty: "Democratic",
  },
  {
    first: "Zachary",
    last: "Taylor",
    bornData: 1784,
    diedData: 1850,
    startPresData: 1849,
    endPresData: 1850,
    presNumber: 12,
    presParty: "Whig",
  },
  {
    first: "Millard",
    last: "Fillmore",
    bornData: 1800,
    diedData: 1874,
    startPresData: 1850,
    endPresData: 1853,
    presNumber: 13,
    presParty: "Whig",
  },
  {
    first: "Franklin",
    last: "Pierce",
    bornData: 1804,
    diedData: 1869,
    startPresData: 1853,
    endPresData: 1857,
    presNumber: 14,
    presParty: "Democratic",
  },
  {
    first: "James",
    last: "Buchanan",
    bornData: 1791,
    diedData: 1868,
    startPresData: 1857,
    endPresData: 1861,
    presNumber: 15,
    presParty: "Democratic",
  },
  {
    first: "Abraham",
    last: "Lincoln",
    bornData: 1809,
    diedData: 1865,
    startPresData: 1861,
    endPresData: 1865,
    presNumber: 16,
    presParty: "Republican",
  },
  {
    first: "Andrew",
    last: "Johnson",
    bornData: 1808,
    diedData: 1875,
    startPresData: 1865,
    endPresData: 1869,
    presNumber: 17,
    presParty: "National Union",
  },
  {
    first: "Ulysses S.",
    last: "Grant",
    bornData: 1822,
    diedData: 1885,
    startPresData: 1869,
    endPresData: 1877,
    presNumber: 18,
    presParty: "Republican",
  },
  {
    first: "Rutherford B.",
    last: "Hayes",
    bornData: 1822,
    diedData: 1893,
    startPresData: 1877,
    endPresData: 1881,
    presNumber: 19,
    presParty: "Republican",
  },
  {
    first: "James A.",
    last: "Garfield",
    bornData: 1831,
    diedData: 1881,
    startPresData: 1881,
    endPresData: 1881,
    presNumber: 20,
    presParty: "Republican",
  },
  {
    first: "Chester A.",
    last: "Arthur",
    bornData: 1829,
    diedData: 1886,
    startPresData: 1881,
    endPresData: 1885,
    presNumber: 21,
    presParty: "Republican",
  },
  {
    first: "Grover",
    last: "Cleveland",
    bornData: 1837,
    diedData: 1908,
    startPresData: 1885,
    endPresData: 1889,
    presNumber: 22,
    presParty: "Democratic",
  },
  {
    first: "Benjamin",
    last: "Harrison",
    bornData: 1833,
    diedData: 1901,
    startPresData: 1889,
    endPresData: 1893,
    presNumber: 23,
    presParty: "Republican",
  },
  {
    first: "Grover",
    last: "Cleveland",
    bornData: 1837,
    diedData: 1908,
    startPresData: 1893,
    endPresData: 1897,
    presNumber: 24,
    presParty: "Democratic",
  },
  {
    first: "William",
    last: "McKinley",
    bornData: 1843,
    diedData: 1901,
    startPresData: 1897,
    endPresData: 1901,
    presNumber: 25,
    presParty: "Republican",
  },
  {
    first: "Theodore",
    last: "Roosevelt",
    bornData: 1858,
    diedData: 1919,
    startPresData: 1901,
    endPresData: 1909,
    presNumber: 26,
    presParty: "Republican",
  },
  {
    first: "William Howard",
    last: "Taft",
    bornData: 1857,
    diedData: 1930,
    startPresData: 1909,
    endPresData: 1913,
    presNumber: 27,
    presParty: "Republican",
  },
  {
    first: "Woodrow",
    last: "Wilson",
    bornData: 1856,
    diedData: 1924,
    startPresData: 1913,
    endPresData: 1921,
    presNumber: 28,
    presParty: "Democratic",
  },
  {
    first: "Warren G.",
    last: "Harding",
    bornData: 1865,
    diedData: 1923,
    startPresData: 1921,
    endPresData: 1923,
    presNumber: 29,
    presParty: "Republican",
  },
  {
    first: "Calvin",
    last: "Coolidge",
    bornData: 1872,
    diedData: 1933,
    startPresData: 1923,
    endPresData: 1929,
    presNumber: 30,
    presParty: "Republican",
  },
  {
    first: "Herbert",
    last: "Hoover",
    bornData: 1874,
    diedData: 1964,
    startPresData: 1929,
    endPresData: 1933,
    presNumber: 31,
    presParty: "Republican",
  },
  {
    first: "Franklin D.",
    last: "Roosevelt",
    bornData: 1882,
    diedData: 1945,
    startPresData: 1933,
    endPresData: 1945,
    presNumber: 32,
    presParty: "Democratic",
  },
  {
    first: "Harry S.",
    last: "Truman",
    bornData: 1884,
    diedData: 1972,
    startPresData: 1945,
    endPresData: 1953,
    presNumber: 33,
    presParty: "Democratic",
  },
  {
    first: "Dwight D.",
    last: "Eisenhower",
    bornData: 1890,
    diedData: 1969,
    startPresData: 1953,
    endPresData: 1961,
    presNumber: 34,
    presParty: "Republican",
  },
  {
    first: "John F.",
    last: "Kennedy",
    bornData: 1917,
    diedData: 1963,
    startPresData: 1961,
    endPresData: 1963,
    presNumber: 35,
    presParty: "Democratic",
  },
  {
    first: "Lyndon B.",
    last: "Johnson",
    bornData: 1908,
    diedData: 1973,
    startPresData: 1963,
    endPresData: 1969,
    presNumber: 36,
    presParty: "Democratic",
  },
  {
    first: "Richard",
    last: "Nixon",
    bornData: 1913,
    diedData: 1994,
    startPresData: 1969,
    endPresData: 1974,
    presNumber: 37,
    presParty: "Republican",
  },
  {
    first: "Gerald",
    last: "Ford",
    bornData: 1913,
    diedData: 2006,
    startPresData: 1974,
    endPresData: 1977,
    presNumber: 38,
    presParty: "Republican",
  },
  {
    first: "Jimmy",
    last: "Carter",
    bornData: 1924,
    diedData: new Date().getFullYear(), //жив
    startPresData: 1977,
    endPresData: 1981,
    presNumber: 39,
    presParty: "Democratic",
  },
  {
    first: "Ronald",
    last: "Reagan",
    bornData: 1911,
    diedData: 2004,
    startPresData: 1981,
    endPresData: 1989,
    presNumber: 40,
    presParty: "Republican",
  },
  {
    first: "George H. W.",
    last: "Bush",
    bornData: 1924,
    diedData: 2018,
    startPresData: 1989,
    endPresData: 1993,
    presNumber: 41,
    presParty: "Republican",
  },
  {
    first: "Bill",
    last: "Clinton",
    bornData: 1946,
    diedData: new Date().getFullYear(), //жив
    startPresData: 1993,
    endPresData: 2001,
    presNumber: 42,
    presParty: "Democratic",
  },
  {
    first: "George W.",
    last: "Bush",
    bornData: 1946,
    diedData: new Date().getFullYear(), //жив
    startPresData: 2001,
    endPresData: 2009,
    presNumber: 43,
    presParty: "Republican",
  },
  {
    first: "Barack",
    last: "Obama",
    bornData: 1961,
    diedData: new Date().getFullYear(), //жив
    startPresData: 2009,
    endPresData: 2017,
    presNumber: 44,
    presParty: "Democratic",
  },
  {
    first: "Donald",
    last: "Trump",
    bornData: 1946,
    diedData: new Date().getFullYear(), //жив
    startPresData: 2017,
    endPresData: 2021,
    presNumber: 45,
    presParty: "Republican",
  },
  {
    first: "Joe",
    last: "Biden",
    bornData: 1942,
    diedData: new Date().getFullYear(), //жив
    startPresData: 2021,
    endPresData: new Date().getFullYear(), //жив
    presNumber: 46,
    presParty: "Democratic",
  },
];

// ----------------------
console.log(presidents);
// сортировка по году рождения президентов
function sortByYearsBorn(array) {
  const newArray = array.toSorted((a, b) => a.bornData - a.bornData);
  return newArray;
}
// -------
//
/**
 *средняя продолжительность жизни
 * @return {*} в консоле функция со средним возрастом президентов
 */
const aveYearsPresident = (array) => {
  let a = 0;

  a = array.reduce((acc, item) => {
    return acc + (item.diedData - item.bornData);
  }, 0);
  //   console.log("всего проссумировали ", a);

  return a / array.length;
};
console.log(
  `средний возраст ${presidents.length} президентов США- 
  ${aveYearsPresident(presidents)}`
);
/**
 * фильтр президентов которые родились между заданным промежутком годов
 * @param {*} arr принимает массив с рождениями
 * @param {*} bornMin минимальный год
 * @param {*} bornMax максимальный год
 */
const bornIn = (arr, bornMin, bornMax) => {
  const newArr = arr.filter(
    (item) => item.bornData < bornMax && item.bornData >= bornMin
  );
  console.log(`Выбранные президенты США с ${bornMin} по ${bornMax} по номерам`);
  console.log(newArr);
  console.log(
    `средний возраст выбранных ${
      newArr.length
    } президентов США- ${aveYearsPresident(newArr)}`
  );
  return newArr;
};
bornIn(presidents, 1700, 1900);

// процент партий президентов
function percentParty(array) {
  let massiv = array.map((arr) => arr.presParty);
  console.log(massiv);

  const newArr = massiv.reduce((acc, item) => {
    if (item in acc) {
      acc[item] += 1;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
  console.log(newArr);
  const addObjMass = Object.entries(newArr);
  console.log(addObjMass);
  const percent = 0;
  const NewData = addObjMass.map(([party, count], percent) => {
    {
      party, count, percent;
    }
  });
  console.log(NewData);
}

console.log("party");
percentParty(presidents);
console.log("процент партий президентов");
// #1
// Сделайте калькулятор, который будет находить площадь и периметр квадрата.
console.log("задача 1");
function calc(data) {
  console.log(
    `площадь квардарта со стороной ${data} - ${data * data}, а периметр - ${
      data * 4
    }`
  );
}
calc(23);

// #2
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.
console.log("задача 2");
function Delitel(numA, numB) {
  let delitel = numA < numB ? numA : numB;

  for (let i = delitel; i > 0; i--) {
    if (numA % i === 0 && numB % i === 0) {
      console.log(`наибольший делитель - ${i}`);
      break;
    }
  }
}
Delitel(18456, 448935);

// #3
// Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.
console.log("задача 3");
function delimoe(numA, numB) {
  let delitel = numA < numB ? numB : numA;
  for (let i = delitel; i < delitel * 100; i++) {
    if (i % numA === 0 && i % numB === 0) {
      console.log(`наименьшее число - ${i}`);
      break;
    }
  }
}
delimoe(18455, 448935);

// #4
// Если задано число n, вернуть количество положительных нечетных чисел меньше n
console.log("задача 4");
function nechet(numb) {
  let nechNum = [];
  for (let i = numb - 1; i > 0; i--) {
    if (i % 2 === 1) {
      nechNum.push(i);
    }
  }
  console.log("количество положительных нечетных чисел-", nechNum.length);
}
nechet(7);

// #5
// Создать массив, который будет содержать только уникальные значения исходного массива:
// const fruits = ["Apple", "Banana", "Grapes", "Apple", "Apple", "Banana", "Pineapple", "Grapes", "Kiwi", "Apple"];
console.log("задача 5");
function UniqArr() {
  const fruits = [
    "Apple",
    "Banana",
    "Grapes",
    "Apple",
    "Orange",
    "Mango",
    "Kiwi",
    "Pineapple",
    "Grapes",
    "Kiwi",
    "Apple",
  ];

  const newArr = fruits.reduce((acc, fruit) => {
    acc[fruit] = 1;
    return acc;
  }, {});

  const newMass = Object.keys(newArr);
  console.log(newMass);
}
UniqArr();
console.log("---------- nen geyrn Utys");
function inp(a, b) {
  const result = [];
  for (let i = 1; i <= a && i <= b; i += 1)
    if (a % i === 0 && b % i === 0) {
      result.push(i);
    }
  return result;
}
console.log(inp(20, 10));

//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"

// function letMeSeeYourName(callback) {
//   const userName = prompt("введіть ім*я");
//   if (!userName) {
//     return alert("ви не ввели ім*я");
//   }
//   callback(userName);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }
// letMeSeeYourName(greet);

//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     };
//     callback(product);
// }

// showProduct(product){
//     console.log(product);
// };

// makeProduct("Samsung", 100500, showProduct);

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: false,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// Отримати масив імен всіх користувачів (поле name).

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));

// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor) та за статтю (поле gender)

// const getUserSorted = (users, eyeColor, gender) => {
//   return users.filter(
//     (user) => user.eyeColor === eyeColor && user.gender === gender
//   );
// };

// console.log(getUserSorted(users, "brown", "female"));

// Отримати масив імен тільки неактивних користувачів віком від min до max і які мають зазначеного друга

// const getNamesInactiveUsersWithFriend = (users, age, friend) => {
//   return users.reduce((acc, user) => {
//     const isTrue =
//       user.isActive === false &&
//       user.age >= age &&
//       user.friends.includes(friend);
//     if (isTrue) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
// };
// console.log(getNamesInactiveUsersWithFriend(users, 20, "Jordan Sampson"));
