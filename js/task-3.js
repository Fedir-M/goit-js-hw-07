console.log("=========================")
console.log("Задача 3. Конструктор рядків")
console.log("===========================")

//TODO Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

//TODO Оголоси наступні методи класу:

//TODO getValue() — повертає поточне значення приватної властивості value.
//TODO padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
//TODO padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
//TODO padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості  value об'єкта, який викликає цей метод.

//! жесть! намучался с пониманием этого пункта --> Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється. Не мог понять, где этот объект, который создается.

class StringBuilder {
    #value;

    constructor(initialValue) {
      this.#value = initialValue;
    }

      getValue() {
        return this.#value;
      }

      padEnd(str) {
        this.#value += str;
      }

      padStart(str) {
        this.#value = str + this.#value;
          }
          padBoth(str) {
            this.#value = str + this.#value + str;
          }
}

//* Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="