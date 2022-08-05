

        const listUser = [{
           
        }]

document.querySelector('#click').onclick = function(){
    
         const email = document.querySelector('#logemail').value;
         const pass = document.querySelector('#logpass').value;
         const param = document.querySelector('.demo');  
         
         
         let regEmail = /^\w+@gmail\.com$/i;
         let test = true;

            if(email == "" && pass == ""){
                param.innerHTML = "Vui lòng nhập email và password!";
                return;
    
             }if(email == ""){
                param.innerHTML = "Vui lòng nhập email!";
                return;
             }if(pass == ""){
                param.innerHTML = "Vui lòng nhập password!";    
                return;
             }
             else {
                if(email.match(regEmail)){
                    window.location = ('../spck/home.html')
                }else{
                    param.innerHTML = "Emai không hợp lệ!";    

                }

             }
             

             
         
       


        


}