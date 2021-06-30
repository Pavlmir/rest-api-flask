const app = new Vue({
    el: '#app',
    data: {
        message: "",
        name: "",
        phone: "",
        email: "",
        regExpName: /[a-zа-яё]+/i, // буквы от a-z, а-я
        regExpPhone: /\+7\(\d{3}\)\d{3}-\d{4}/, // +7 (три цифры) три цифры - 4 цифры
        regExpEmail: /[a-z]+[a-z0-9]+\.?-?[a-z0-9]+@[a-z]+\.[a-z]+/i,
        validClass: "valid-err",
        showErrorName: false,
        showErrorPhone: false,
        showErrorEmail: false
    },
    methods: {
        validation(text, regExp) {
            if (text.match(regExp) && text.match(regExp)[0] === text) {
                return false; // ok
            } else {
                return true; // err
            }
        },
        getValidClass(showError) {
            if (showError) {
                return "valid-err";
            } else {
                return "valid-ok";
            }
        },
    },
    mounted() {

    },
});