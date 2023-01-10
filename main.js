let age = prompt('How old are you?',1)
if (+age <= 17){
  confirm('Do you stady at school?')
} else if (17 < +age && +age < 25){
    confirm("Do you study at university?");
} else if (+age >= 25 && +age < 60){
    confirm("Do you have a job?");
} else{
    confirm("What are you doing?");
}
