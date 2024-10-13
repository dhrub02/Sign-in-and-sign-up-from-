function openForm(formName) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-content');
    forms.forEach(form => form.style.display = 'none');

    // Remove the active class from all buttons
    const tabs = document.querySelectorAll('.tablinks');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected form and add active class to the clicked button
    document.getElementById(formName).style.display = 'block';
    document.querySelector(`.tablinks[onclick="openForm('${formName}')"]`).classList.add('active');
}

// By default, display the login form
document.getElementById('login').style.display = 'block';
