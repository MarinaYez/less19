let numb = prompt('Please enter the number', 1)
while (!Number(numb)) {
    resalt = numb * 12;
     alert(`Your number is incorect please enter corect number ${numb * 12}`)
}
alert(`${numb} by 12 ${numb * 12} equals ${resalt}`);
