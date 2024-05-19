    const form = document.getElementById('signupForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    //ayusin mo yung innerText
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        // errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success')
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        // errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if(usernameValue === '') {
            setError(username, 'Username is required');
            console.log("uname");
            return;
        } else {
            setSuccess(username);
        }

        if(emailValue === '') {
            setError(email, 'Email is required');
            console.log("email");
            return;

        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
            console.log("email2");
            return;
        } else {
            setSuccess(email);
        }

        if(passwordValue === '') {
            setError(password, 'Password is required');
            console.log("pass");
            return;
        } else if (passwordValue.length < 8 ) {
            setError(password, 'Password must be at least 8 character.')
            console.log("passShort");
            return;
        } else {
            setSuccess(password);
        }

        // redirect to log in page
    };
