
'use strict'
let money = prompt("Ваш бюджет на месяц?", '600000')
let time = prompt("Введите дату в формате YYYY-MM-DD", '2019-05-05')

let appData= {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
}

for (let i=0; i<2; i++){
    let a = prompt("Insert monthly expense ", 'school'),
        b = prompt("How much it will cost", '50000');

    if(typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a!='' && b != ''){
        console.log('done');
        appData.expenses[a]=b;
    }
        

}
console.log(appData);