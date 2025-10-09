let inputPasswordOne = document.getElementById('password');
let inputPasswordTwo = document.getElementById('repeat-password');

let inputUserName = document.getElementById('username');
let inputUserEmail = document.getElementById('useremail');

let buttonRegistr = document.querySelector('.btn-form-regist');
let buttonOpen = document.querySelector('.btn-form-open');

let form = document.querySelector('.form-form');

// функция для проверки поля
function validateField(input) {
  if (input.value.trim() === "") {
    input.style.border = "2px solid #114ca5";
    return false;
  } else {
    input.style.border = ""; // убираем подсветку, если всё ок
    return true;
  }
}

buttonRegistr.addEventListener('click', function (e) {
  e.preventDefault(); // чтобы форма не перезагружала страницу

  let isNameValid = validateField(inputUserName);
  let isEmailValid = validateField(inputUserEmail);
  let isPass1Valid = validateField(inputPasswordOne);
  let isPass2Valid = validateField(inputPasswordTwo);

  // если хоть одно поле пустое
  if (!isNameValid || !isEmailValid || !isPass1Valid || !isPass2Valid) {
    buttonRegistr.textContent = "Заполните все поля";
    buttonRegistr.style.color = "white";
    buttonRegistr.style.width = "170px";
    buttonRegistr.style.marginLeft = '8vh'
    return;
  }

  // проверка паролей
  if (inputPasswordOne.value !== inputPasswordTwo.value) {
    inputPasswordTwo.style.border = "2px solid red";
    buttonRegistr.textContent = "Пароли не совпадают!";
    return;
  } else {
    inputPasswordTwo.style.border = "";
  }

  // если всё заполнено и пароли одинаковы
  if (form.checkValidity()) {
    buttonRegistr.textContent = "Отправка...";
  }
});

// убираем подсветку при фокусе
[inputUserName, inputUserEmail, inputPasswordOne, inputPasswordTwo].forEach(
  (input) => {
    input.addEventListener("focus", function () {
      input.style.border = "";
    });
  }
);

// скрытие пароля
let inputButtonEye = document.querySelectorAll('.toggle-pass');
let imgButtonEye = document.querySelector('.eye');

inputButtonEye.forEach(button => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      this.querySelector('img').src = 'img/eye_1.png';
    } else {
      input.type = 'password';
      this.querySelector('img').src = 'img/eye_2.png';
    }
  });
});

/*
inputButtonEye.addEventListener ('click', function changeButtonImg(){
    const input = this.previousElementSibling;

    if(input.type === 'password'){
        input.type = 'text';
    }
});
*/