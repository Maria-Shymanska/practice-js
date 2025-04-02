// const num = [1, 5, 6, 10, 8];

// const result = num.map((el) => el);
// const arrow = () => {
//   return 5;
// };
// console.log(arrow());

// console.log(result);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const studentsName = students
//   .map((student) => {
//     return student.score;
//   })
//   .reduce((acc, score) => {
//     return acc + score;
//   }, 0);

// console.log(studentsName);

// 1. Створи новий масив, де кожен елемент буде помножений на 3.

// 1. варіант неявне повернення (implicit return)

// const numbers = [2, 4, 6, 8, 10];

// const result = numbers.map((num) => num * 3);
// console.log(result);

// 2. варіант якщо додаєш {}, тоді повернення стає явним (explicit return), і return обов’язково потрібен.

// const numbers = [2, 4, 6, 8, 10];
// const result = numbers.map((num) => {
//   return num * 3;
// });

// console.log(result);

// 2. Створи новий масив, який міститиме довжину кожного слова.(перший варіант)
// const words = ["apple", "banana", "kiwi", "grape"];

// const length = words.map((word) => word.length);
// console.log(length);

// 2.варіант
// const words = ["apple", "banana", "kiwi", "grape"];

// const result = words.map((word) => {
//   return word.length;
// });
// console.log(result);

// 3. Перетвори їх у відсотки (наприклад, 0.5 → "50%").

// const numbers = [0.1, 0.5, 0.75, 1];

// const result = numbers.map((number) => {
//   return number * 100 + "%";
// });
// console.log(result);

// 4.Створи новий масив, що містить тільки назви продуктів.
// const products = [
//   { name: "Laptop", price: 1500 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 100 },
// ];

// const result = products.map((product) => {
//   return product.name;
// });

// console.log(result);

// 5. Перетвори їх у формат "DD/MM/YYYY".

// const dates = ["2024-04-01", "2024-05-15", "2024-06-30"];

// const formattedDate = dates.map((date) => {
//   const [year, month, day] = date.split("-");
//   return `${year}/${month}/${day}`;
// });

// console.log(formattedDate);

// 6. Створи новий масив, де кожне слово починається з великої літери.

// const words = ["hello", "world", "map", "javascript"];

// const result = words.map((word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// });
// console.log(result);

// 7. Створи новий масив, де ціни всіх товарів будуть подвоєні.

// const items = [
//   { name: "Book", price: 20 },
//   { name: "Pen", price: 5 },
//   { name: "Notebook", price: 15 },
// ];

// const result = items.map((item) => item.price * 2);
// console.log(result);

// 8. Перетворити числа у бінарний формат (5 → "101"). Бінарні числа — це числа, записані в двійковій системі числення, яка використовує лише дві цифри: 0 і 1.

// const numbers = [5, 10, 15, 20];

// const result = numbers.map((num) => num.toString(2));

// console.log(result);

// 9. Створи новий масив, додавши кожному користувачу унікальний ID (наприклад, id: 1, id: 2 …).

// const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

// const result = users.map((user, index) => ({
//   id: index + 1,
//   name: user.name,
// }));
// console.log(result);

// 10. Перетворити градуси Фаренгейта в Цельсій
// Дано масив температур у Фаренгейтах:

// const fahrenheit = [32, 68, 86, 104];

// const celsius = fahrenheit.map((f) => (((f - 32) * 5) / 9).toFixed(1));

// console.log(celsius);
