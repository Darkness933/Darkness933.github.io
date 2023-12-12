function scrollToTarget() {
    const targetBlock = document.getElementById('galery');
    if (targetBlock) {
        targetBlock.scrollIntoView({ behavior: 'smooth' });
    }
}

function goMain() {
    window.location.href = './index.html';
    
    // window.close();
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Показати або приховати кнопку при прокрутці
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Прокрутити наверх при кліку на кнопку
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

function showForm(showFormId, hideFormId) {
    var showForm = document.getElementById(showFormId);
    var hideForm = document.getElementById(hideFormId);

    showForm.style.display = "block";
    hideForm.style.display = "none";
}



// Додайте цей скрипт у ваш HTML-файл або включіть його в окремий файл script.js

document.addEventListener("DOMContentLoaded", function () {
    // Кнопка "Увійти"
    var loginBtn = document.getElementById("LogIn");
    // Кнопка "Зареєструватися"
    var signUpBtn = document.getElementById("signUp");

    // Модальне вікно для входу
    var loginModal = document.getElementById("loginModal");
    // Кнопка закриття для входу
    var closeLoginBtn = document.getElementById("closeLoginBtn");

    // Модальне вікно для реєстрації
    var registerModal = document.getElementById("registerModal");
    // Кнопка закриття для реєстрації
    var closeRegisterBtn = document.getElementById("closeRegisterBtn");

    // Відобразити модальне вікно для входу при кліку на кнопку "Увійти"
    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    // Відобразити модальне вікно для реєстрації при кліку на кнопку "Зареєструватися"
    signUpBtn.addEventListener("click", function () {
        registerModal.style.display = "block";
    });

    // Закрити модальне вікно для входу при кліку на кнопку закриття
    closeLoginBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Закрити модальне вікно для реєстрації при кліку на кнопку закриття
    closeRegisterBtn.addEventListener("click", function () {
        registerModal.style.display = "none";
    });

    // Закрити модальні вікна при кліку на позачергову область
    window.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
});
