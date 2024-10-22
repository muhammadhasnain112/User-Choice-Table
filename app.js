var usernum = +prompt("Enter Your Table Number")
var startnum = +prompt('Enter Your Starting Number')
var endnum = +prompt('Enter Yuor Ending Number')


for (var i = startnum ; i <=endnum; i++){
    document.write(`${usernum} x ${i} = ${usernum*i}<br>`)
}