(function() {
    const section = document.querySelector('.seventh-section');
    const formInputs = document.querySelectorAll('.form__group__input');
    const form = document.querySelector('.form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successWindow = section.querySelector('.success-window');
    successWindow.querySelector('.success-window__wrapper__refresh')
        .addEventListener('click', refresh);
    
    let data = {
        name: '',
        organization: '',
        email: ''
    }
    
    submitBtn.addEventListener('click', submit);
    form.addEventListener('submit', submit);

    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].addEventListener('focus', clearError);
        formInputs[i].addEventListener('input', input);
        data[formInputs[i].name] = formInputs[i].value;
    }

    function input(e) {
        data[e.target.name] = e.target.value
    }

    function clearError(e) {
        e.target.classList.remove('form__group__input--error');
        e.target.nextElementSibling && (e.target.nextElementSibling.style.display = 'none');
    }

    function showError(input) {
        input.classList.add('form__group__input--error');
        input.nextElementSibling && (input.nextElementSibling.style.display = 'block');
    }

    function submit() {
        let error = false;
        for (let i = 0; i < formInputs.length; i++) {
            if (!data.name && formInputs[i].name === 'name' || !data.email && formInputs[i].name === 'email') {
                error = true;
                showError(formInputs[i])
            }
        }

        if (error) {
            return;
        }

        submitBtn.innerHTML = '<img class="loading-indicator" src="assets/loading-indicator.svg" alt="">';

        setTimeout(() => {
            section.querySelector('.section--half-splitted__item:first-of-type').style.display = 'none';
            section.querySelector('.section--half-splitted__item:nth-of-type(2)').style.display = 'none';
            successWindow.style.display = 'block';
        }, 1000);
    }

    function refresh() {
        data = {
            name: '',
            organization: '',
            email: ''
        };

        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].value = data[formInputs[i].name];
        }

        section.querySelector('.section--half-splitted__item:first-of-type').style.display = 'block';
        section.querySelector('.section--half-splitted__item:nth-of-type(2)').style.display = 'block';
        submitBtn.innerHTML = 'Отправить запрос';
        successWindow.style.display = 'none';
    }
})()