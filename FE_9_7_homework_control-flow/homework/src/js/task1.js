// Your code goes here
const	dataChecker = new Date().getHours();
const	databasePass = 'SuperUser';
const	databaseUser = 'User';

(function	loginForm(){
	let userName;
	let userPassword;
	let x;

	userName = prompt('Enter your name');
	if(userName !== '' && userName !== null){
		x = userName.length;
		if(x < 4){
			alert('I don\'t know any users having name length less than 4 symbols')
		}else if(userName !== databaseUser){
			alert('I don’t know you');
		}else if(userName === databaseUser){
			userPassword = prompt('Enter your password!');
			if(userPassword !== '' && userPassword !== null) {
				if(userPassword === databasePass && dataChecker < 20) {
					alert('Good day!')
				}else if(userPassword === databasePass && dataChecker > 20) {
					alert('Good evening!')
				}else{
					alert('Wrong password');
				}
			}else{
				alert('Canceled');
			}
		}
		}else{
			alert('Canceled');
		}
})();