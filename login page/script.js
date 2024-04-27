/*function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('forgetPasswordContainer').style.display = 'none';
    document.getElementById('todosContainer').style.display = 'none'; // Hide todos container
}

function logoutUser() {
    // Clear user session or perform any necessary logout actions
    // For demonstration purposes, clearing localStorage is used



    // Redirect to the login page
    showLogin();
}

function getUserDataFromLocalStorage() {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
        return storedUserData;
    } else {
        return null;
    }
}

function saveUserDataToLocalStorage(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}


function loginUser() {
    const storedUserData = getUserDataFromLocalStorage();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
        Swal.fire({
            title: "Login Successful!",
            //text: "You clicked the button!",
            icon: "success"
        });
        //alert('Login successful!');
        // Hide login container and show todos container
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('signupContainer').style.display = 'none';
        document.getElementById('forgetPasswordContainer').style.display = 'none';
        document.getElementById('todosContainer').style.display = 'block';
    } else if (username === "" && password === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter username and password.",
            //footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        //alert('Invalid username or password.');
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Unsuccessful! Invalid username or password.",
            //footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}


function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('forgetPasswordContainer').style.display = 'none';
    document.getElementById('todosContainer').style.display = 'none'; // Hide todos container
}
// main.js

// ... (previous code)

function signupUser() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        // Display a message below the input box that passwords don't match
        document.getElementById('passwordMismatchMessage').style.display = 'block';
        return;
    }

    // Hide the password mismatch message
    document.getElementById('passwordMismatchMessage').style.display = 'none';

    // Save user data in localStorage
    const userData = {
        username,
        password
    };
    saveUserDataToLocalStorage(userData);

    alert('User registered successfully!');

    // Redirect to the login page
    showLogin();
}


function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('forgetPasswordContainer').style.display = 'none';
    document.getElementById('todosContainer').style.display = 'none'; // Hide todos container
}*/