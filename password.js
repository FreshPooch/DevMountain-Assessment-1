let password = 'aslfjld@dlfjlkk010'; 

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

if (password.length < 10) {
  console.log('Password is too short!'); 
}
else if (password.length > 20) {
  console.log('Password is too long!')
}
else if (/[a-zA-Z]/.test(password) === false) {
  console.log('Password does not contain a letter!'); 
}
else if(/\d/.test(password) === false) {
  console.log('Password does not contain a number!'); 
}
else if(password.includes(' ')) {
  console.log('Invalid character!')
}
else if(specialChars.test(password) === false) {
  console.log('Must contain a special character!'); 
}
else {
  console.log(`  ____        _        ____       ____                      U  ___ u    ____       ____           ____     ____     U _____ u     _        _____   U _____ u   ____      _    
  U|  _"\ u U  /"\  u   / __"| u   / __"| u   __        __     \/"_ \/ U |  _"\ u   |  _"\       U /"___| U |  _"\ u  \| ___"|/ U  /"\  u   |_ " _|  \| ___"|/  |  _"\   U|"|u  
  \| |_) |/  \/ _ \/   <\___ \/   <\___ \/    \"\      /"/     | | | |  \| |_) |/  /| | | |      \| | u    \| |_) |/   |  _|"    \/ _ \/      | |     |  _|"   /| | | |  \| |/  
   |  __/    / ___ \    u___) |    u___) |    /\ \ /\ / /\ .-,_| |_| |   |  _ <    U| |_| |\      | |/__    |  _ <     | |___    / ___ \     /| |\    | |___   U| |_| |\  |_|   
   |_|      /_/   \_\   |____/>>   |____/>>  U  \ V  V /  U \_)-\___/    |_| \_\    |____/ u       \____|   |_| \_\    |_____|  /_/   \_\   u |_|U    |_____|   |____/ u  (_)   
   ||>>_     \\    >>    )(  (__)   )(  (__) .-,_\ /\ /_,-.      \\      //   \\_    |||_         _// \\    //   \\_   <<   >>   \\    >>   _// \\_   <<   >>    |||_     |||_  
  (__)__)   (__)  (__)  (__)       (__)       \_)-'  '-(_/      (__)    (__)  (__)  (__)_)       (__)(__)  (__)  (__) (__) (__) (__)  (__) (__) (__) (__) (__)  (__)_)   (__)_)  
  (Password Created!)`);
}
