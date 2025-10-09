let inputPasswordOne = document.getElementById('password');

let inputUserEmail = document.getElementById('useremail');

let buttonOpen = document.querySelector('.btn-form-open');

let form = document.querySelector('.form-form2');

// функция для проверки поля
function validateField(input) {
  if (input.value.trim() === "") {
    input.style.border = "2px solid #114ca5";
    return false;
  } else {
    input.style.border = ""; // убираем подсветку
    return true;
  }
}

buttonOpen.addEventListener('click', function (e) {
  e.preventDefault(); // чтобы форма не перезагружала страницу

  let isEmailValid = validateField(inputUserEmail);
  let isPass1Valid = validateField(inputPasswordOne);


  // если хоть одно поле пустое
  if (!isEmailValid || !isPass1Valid) {
    buttonOpen.textContent = "Заполните все поля";
    buttonOpen.style.color = "white";
    buttonOpen.style.width = "170px";
    buttonOpen.style.marginLeft = '8vh';
    return;
  }

  // если всё заполнено и пароли одинаковы
  if (form && form.checkValidity()) {
      buttonOpen.textContent = "Отправка...";
     buttonOpen.textContent = "Заполните все поля";
     buttonOpen.style.color = "white";
     buttonOpen.style.width = "170px";
     buttonOpen.style.marginLeft = '8vh';
     return;
  }
});

// убираем подсветку при фокусе
[inputUserEmail, inputPasswordOne].forEach(
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