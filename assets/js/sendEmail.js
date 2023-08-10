function sendMail(contactForm) {
    emailjs.send('kaspars.mazurs@gmail.com', 'template_tlod5re', {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                contactForm.reset(); // Reset the form fields
                window.location.href = '/thank_you.html'; // Redirect to the thank you pag
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}