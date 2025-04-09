// 10 task with method filter()
// 🧠 1. Відфільтрувати парні числа. Залишити тільки парні числа.

// const numberFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sum = numberFilter.filter((value) => value % 2 === 0);
// console.log(sum);

// 🧠 2. Знайти користувачів з віком понад 18. Задача: Залишити тільки користувачів, яким 18 або більше.

// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "David", age: 30 },
// ];

// const ageUser = users.filter((user) => user.age >= 18);
// console.log(ageUser);

// 🧠 3. Видалити порожні рядки з масиву. Залишити тільки непорожні рядки.

// const strings = ["hello", "", "world", "", "JS", ""];

// const result = strings.filter((el) => el !== "");
// console.log(result);

// 4. Залишити унікальні значення. Задача: Залишити лише унікальні значення (без повторів).
// 💡 Підказка: можна використовувати indexOf або Set.

// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const result = numbers.filter((value, index, array) => {
//   return array.indexOf(value) === index;
// });

// console.log(result);

// 🧠 5. Фільтрувати позитивні числа. Залишити тільки числа більші за 0.

// const nums = [-3, 0, 2, -5, 8, 10];

// const result = nums.filter((num) => num > 0);
// console.log(result);

//  6. Залишити тільки email-и з доменом gmail
// const emails = [
//   "user1@gmail.com",
//   "user2@yahoo.com",
//   "user3@gmail.com",
//   "user4@ukr.net",
// ];

// const result = emails.filter((email) => email.endsWith("gmail.com"));
// console.log(result);

// 8. Залишити слова довжиною більше 5 символів

// const words = ["apple", "banana", "kiwi", "strawberry", "fig"];

// const result = words.filter((word) => word.length > 5);

// console.log(result);

// 🧠 9. Видалити null та undefined. Залишити тільки "існуючі" значення (не null, не undefined).

// const values = [0, null, 42, undefined, "", "hello"];

// const result = values.filter((value) => value !== undefined && value !== null);
// console.log(result);

//Залиших, у кого isActive: true.

// const users = [
//   { name: "Anna", isActive: true },
//   { name: "Mark", isActive: false },
//   { name: "Lena", isActive: true },
// ];

// const result = users.filter((user) => user.isActive);

// console.log(result);
