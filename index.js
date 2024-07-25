//Task 1

let depositMessage;
let withdrawMessage;

const bankAccount = {
  ownerName: "Daniel Gusto",
  accountNumber: 1234,
  balance: 100,

  deposit() {
    depositMessage = Number(
      prompt("На яку кількість грошей, ви хочете поповнити рахунок?")
    );

    this.balance = this.balance + depositMessage;

    if (isNaN(depositMessage)) {
      alert("Ви ввели не суму чисел.");
    } else {
      if (depositMessage !== null) {
        alert(`Рахунок поповнено на суму: ${depositMessage} грн`);
        alert(`Ваш баланс становить: ${this.balance} грн`);
      } else {
        alert("Операцію скасовано!");
      }
    }
  },

  withdraw() {
    withdrawMessage = Number(
      prompt("Яку кількість грошей ви хочете зняти з рахунку?")
    );
    this.balance = this.balance - withdrawMessage;

    if (isNaN(withdrawMessage)) {
      alert("Ви ввели не суму чисел.");
    } else {
      if (depositMessage !== null) {
        alert(`З рахунку було знято: ${withdrawMessage} грн`);
        alert(`Ваш баланс становить: ${this.balance} грн`);
      } else {
        alert("Операцію скасовано!");
      }
    }
  },

  checkAccount() {
    const checkMessage = Number(prompt("Введіть свій номер гаманця:"));

    if (checkMessage !== this.accountNumber) {
      alert("Неправильно введений номер гаманця!");
    } else {
      const depositAction = confirm("Чи хочете ви поповнити свій рахунок?");

      if (depositAction === true) {
        this.deposit();
      } else {
        const withdrawAction = confirm("Чи хочете ви зняти гроші з рахунку?");

        if (withdrawAction === true) {
          this.withdraw();
        } else {
          alert("Операції було скасовано!");
        }
      }
    }
  },
};

bankAccount.checkAccount();

//Task 2

const weather = {
  temperatureMessage: prompt("Введіть вашу температуру повітря:"),
  humidity: "34%",
  windSpeed: "3,3 км/год",

  checkTemperature() {
    let checkingTemperature;

    if (this.temperatureMessage < 0) {
      checkingTemperature = true;
    } else if (this.temperatureMessage >= 0) {
      checkingTemperature = false;
    }

    if (checkingTemperature === true) {
      alert("Температура нижче 0 градусів Цельсія");
    }

    switch (checkingTemperature) {
      case true:
        alert("Температура нижче 0 градусів Цельсія");
        break;

      case false:
        alert("Температура вище або дорівнює 0 градусів Цельсія");
        break;

      default:
        alert("Ви неправильно ввели температуру повітря!");
    }

    return checkingTemperature;
  },
};

weather.checkTemperature();

//Task 3

const nameMessage = prompt("Введіть своє ім'я:");
const emailMessage = prompt("Введіть свою електронну пошту, але в ній має бути знак '@'.");
const passwordMessage = prompt("Введіть пароль для вашого акаунту, який буде містити від 4 до 20 символів:");

const user = {
  name: "Flaningo",
  email: "flamingo1234@gmail.com",
  password: 123000,

  login(emailMessage, passwordMessage) {
    if (emailMessage === this.email && passwordMessage === this.password) {
      alert("Ви змогли зайти у свій кабінет.");
    } else {
      alert("Електронна пошта або пароль були введені неправильно!");
    }
  },
};

user.login();

//Task 4

const movie = {
  title: "Володар кілець",
  director: "Пітер Джексон",
  year: "2001 - 2003",
  rating: 6.5,
  colorOfTitle: "Black",

  checkMovie() {
    let checkedMovie;

    if (this.rating > 8) {
      checkedMovie = true;
    } else {
      checkedMovie = false;
    }

    return checkedMovie;
  },
};

alert(`Назва фільму: ${movie.title}`);
alert(`Режисер: ${movie.director}`);
alert(`Рік випуску: ${movie.year}`);
alert(`Рейтинг: ${movie.rating}`);

if (movie.checkMovie(true)) {
  movie.colorOfTitle = "Green";
} else {
  movie.colorOfTitle = "Black";
}






