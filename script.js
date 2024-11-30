




function contacntform() {
    let fname = document.querySelector(".name")
    let email = document.querySelector(".email")
    let phone = document.querySelector(".phone")
    let password = document.querySelector(".pass")
    let text = document.querySelector(".text")
    let btn = document.getElementById("button");


    function showError(input) {
        input.style.border = "1px solid red";
        input.nextElementSibling.classList.remove("hidden")
    }

    function showSuccess(input) {
        input.style.border = "1px solid green";
        input.nextElementSibling.classList.add("hidden"); // Remove error icon
    }

    function validation() {
        const userfname = fname.value.trim();
        const useremail = email.value.trim();
        const userpassword = password.value.trim();
        const userphonenum = phone.value.trim();
        const usertext = text.value.trim();

        let isValid = true;

        // Validate First Name
        if (userfname === "" || userfname.length < 5) {
            showError(fname);
            isValid = false;
        } else {
            showSuccess(fname);
        }

        // Validate Last Name
        if (usertext === "" || usertext.length < 20) {
            showError(text);
            isValid = false;
        } else {
            showSuccess(text);
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (useremail === "" || !emailRegex.test(useremail)) {
            showError(email, );
            isValid = false;
        } else {
            showSuccess(email, );
        }

        // Validate Password
        const specialCharRegex = /[!@#$%^&*]/;
        if (userpassword === "" || userpassword.length < 7 || !specialCharRegex.test(userpassword)) {
            showError(password);
            isValid = false;
        } else {
            showSuccess(password);
        }

        // Validate Phone Number
        if (userphonenum === "" || userphonenum.length !== 11 || isNaN(userphonenum)) {
            showError(phone);
            isValid = false;
        } else {
            showSuccess(phone);
        }

        

        // Final Check
        if (!isValid) {
            alert("Please fill all the fields correctly!");
        }

        return isValid;
    }

    // Attach Event Listener
    document.querySelector("form").addEventListener("input", (e) => {
        const input = e.target;

        // Dynamically remove error as user types
        if (input === fname) {
            if (input.value.trim() !== "" && input.value.trim().length >= 5) {
                showSuccess(input);
            }
        }
        if (input === text) {
            if (input.value.trim() !== "" && input.value.trim().length >= 5) {
                showSuccess(input);
            }
        }
        if (input === email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(input.value.trim())) {
                showSuccess(input);
            }
        }
        if (input === password) {
            const specialCharRegex = /[!@#$%^&*]/;
            if (input.value.trim().length >= 7 && specialCharRegex.test(input.value.trim())) {
                showSuccess(input);
            }
        }
        if (input === phone) {
            if (input.value.trim().length === 11 && !isNaN(input.value.trim())) {
                showSuccess(input);
            }
        }
       
    });

    btn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        if (validation()) {
            
            alert("Form submitted successfully!");
        }
    });

}

contacntform();


