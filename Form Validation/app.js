function validate(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.replace('error' , 'success')
    }
    else{
        document.getElementById('username').classList.add('error')   
    }
}