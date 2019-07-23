// Function to test Email Validation
function emailValidator(emailAddress){
	var emailObj = {emailSuccess: false, emailText: 'Not a Valid Email Address'}, 
	emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // regex to test email pattern
	if (emailAddress) {
		emailObj.emailSuccess = false;
		if(emailFilter.test(emailAddress)){
			emailObj.emailSuccess = true;
			emailObj.emailText = 'Valid Email Address'
		}
	}

	return emailObj;
}

// Function to test Password Validation
function passwordValidator(password){

	var passwordObj = {
		passwordSuccess: true,
		pwLengthSuccess: false, // Setting Password Length Success Criteria to False
		pwLCSuccess: false,  // Setting Password Lower Case Success Criteria to False
		pwUCSuccess: false,  // Setting Password Upper Case Success Criteria to False
		pwSCSuccess: false,  // Setting Password Special Character Success Criteria to False
		pwDigSuccess: false  // Setting Password Digits Success Criteria to False
	};

	var lowerCaseFilter = /(?=.*[a-z])/; // regex to test for lower case letters
	var upperCaseFilter = /(?=.*[A-Z])/; // regex to test for upper case letters
	var specialCharFilter = /[!@#$%^&*()-+={}\|/?<>,.~`_]/; // // regex to test for special characters
	var digitFilter = /(?=.*\d)/; // regex to test for numbers

	if(password){
		passwordObj.passwordSuccess = false;
		if(password.length > 7)
			passwordObj.pwLengthSuccess = true;

		if(upperCaseFilter.test(password))
			passwordObj.pwUCSuccess = true;

		if(lowerCaseFilter.test(password))
			passwordObj.pwLCSuccess = true;

		if(specialCharFilter.test(password))
			passwordObj.pwSCSuccess = true;

		if(digitFilter.test(password))
			passwordObj.pwDigSuccess = true;

		if(passwordObj.pwLengthSuccess && passwordObj.pwUCSuccess && passwordObj.pwLCSuccess && passwordObj.pwSCSuccess && passwordObj.pwDigSuccess) 
			passwordObj.passwordSuccess = true;
	}
	return passwordObj;
}

// Initiating VueJS Model
var vm = new Vue({
	el: '#app',
	data: {
		email: '',
		password: '',
		emailObj: {
			emailSuccess: false, 
			emailText: 'Not a Valid Email Address'
		},
		passwordObj: {
			passwordSuccess: false,
			pwLengthSuccess: false, // Setting Password Length Success Criteria to False
			pwLCSuccess: false,  // Setting Password Lower Case Success Criteria to False
			pwUCSuccess: false,  // Setting Password Upper Case Success Criteria to False
			pwSCSuccess: false,  // Setting Password Special Character Success Criteria to False
			pwDigSuccess: false  // Setting Password Digits Success Criteria to False
		},
		noErrors: false
	},
	methods: {
		formSubmit: function(event){
			event.preventDefault(); // Preventing refresh when Submit Button is clicked
			// Form Submit code can be added here
		},
		process: function(){
			this.emailObj = emailValidator(this.email);
			this.passwordObj = passwordValidator(this.password);

			if(this.email && this.password && this.emailObj.emailSuccess && this.passwordObj.passwordSuccess){
				this.noErrors = true;
			}else{
				this.noErrors = false;
			}
		}
	}
})