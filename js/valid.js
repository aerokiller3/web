function formValidation() {
    var name = document.validation.name;
    var surName = document.validation.surName;
    var email = document.validation.email;
    var phone = document.validation.phone;
    var date = document.validation.date;
    var time = document.validation.time;
    var payment = document.validation.payment;

    if (allLetter(name)) {
        if (allLetter(surName)) {
            if (validateEmail(email)) {
                if (validatePhone(phone)) {
                    if (validateDate(date)) {
                        if (validateTime(time)) {
                            if (validatePayment(payment)) {

                            }
                        }
                    }
                }
            }
        }
        return false;
    }
}

function validatePhone(phone) {
    let regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if (phone.value.match(regex)) {
        return true;
    } else {
        alert('Неправильный формат номера');
        phone.focus();
        return false;
    }
}

function validateDate(date) {
    let regex = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    if (date.value.match(regex)) {
        return true;
    } else {
        alert('Неправильный формат даты');
        date.focus();
        return false;
    }
}

function validateTime(time) {
    let regex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (time.value.match(regex)) {
        return true;
    } else {
        alert('Неправильный формат времени');
        time.focus();
        return false;
    }
}

function allLetter(name) {
    var letters = /^[А-Яа-я]+$/;
    if (name.value.match(letters)) {
        return true;
    } else {
        alert('Имя и фамилия должны содержать только буквы!');
        name.focus();
        return false;
    }
}

function validateEmail(email) {
    var mailformat = /^[^\s@]+@[^\s@]+$/;
    if (email.value.match(mailformat)) {
        return true;
    } else {
        alert("Неправильный формат электронной почты");
        email.focus();
        return false;
    }
}

function paymentSelect(payment) {
    if (payment.value == "Default") {
        alert('Выберите способ оплаты');
        payment.focus();
        return false;
    } else {
        return true;
    }
}