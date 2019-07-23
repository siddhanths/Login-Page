// Email Validation
function emailValidator(emailAddress){
	var emailObj = {emailSuccess: false, emailText: 'Not a Valid Email'}, emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (emailAddress) {
		emailObj.emailSuccess = false;
		if(emailFilter.test(emailAddress)){
			emailObj.emailSuccess = true;
			emailObj.emailText = 'Valid Email Address'
		}
	}

	return emailObj;
}

// Password Validation
function passwordValidator(password){

	var passwordObj = {
		passwordSuccess: true,
		pwLengthSuccess: false,
		pwLCSuccess: false,
		pwUCSuccess: false,
		pwSCSuccess: false,
		pwDigSuccess: false
	};

	var lowerCaseFilter = /(?=.*[a-z])/;
	var upperCaseFilter = /(?=.*[A-Z])/;
	var specialCharFilter = /[!@#$%^&*()-+={}\|/?<>,.~`_]/;
	var digitFilter = /(?=.*\d)/;

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
		emailText: 'Not a Valid Email',
		emailSuccess: false,
		noErrors: false,
		passwordObj: {
			passwordSuccess: false,
			pwLengthSuccess: false, // Setting Password Length Success Criteria to False
			pwLCSuccess: false,  // Setting Password Lower Case Success Criteria to False
			pwUCSuccess: false,  // Setting Password Upper Case Success Criteria to False
			pwSCSuccess: false,  // Setting Password Special Character Success Criteria to False
			pwDigSuccess: false  // Setting Password Digits Success Criteria to False
		}
	},
	methods: {
		formSubmit: function(event){
			event.preventDefault();
		},
		process: function(){
			this.emailSuccess = emailValidator(this.email).emailSuccess;
			this.emailText = emailValidator(this.email).emailText;
			this.passwordObj = passwordValidator(this.password);

			if(this.email && this.password && this.emailSuccess && this.passwordObj.passwordSuccess){
				this.noErrors = true;
			}else{
				this.noErrors = false;
			}
		}
	}
})