var date=document.getElementById('date');

var currentDateTime=new Date();

var cDate=appendZero(currentDateTime.getDate());
var cMonth=appendZero(currentDateTime.getMonth()+1);
var cYear=currentDateTime.getFullYear();

var dispDate=cDate+'-'+ cMonth + '-' + cYear

date.innerText="Date  : "+dispDate;

var hr=appendZero(currentDateTime.getHours());

var cMinute=appendZero(currentDateTime.getMinutes());

var period="AM"

var dispTime=hr+':'+cMinute+' '+period;

const time=`${hr}:${cMinute}`

const getTime = convertTo12HourFormat(time);


var timeElement = document.getElementById('time');

timeElement.innerText="Time: "+getTime;

function convertTo12HourFormat(time) {

    let [hour, minute] = time.split(':');
    
    hour = parseInt(hour);

    const period = hour >= 12 ? 'PM' : 'AM';
    
    hour = hour % 12 || 12;
   
    return `${hour}:${minute} ${period}`;
}


const rannum=Math.random();
const random=Math.round(rannum*9000+1000);

var billno=document.getElementById('billno');

billno.innerText="Bill No : "+random;


function GetPrint(){
    window.print();
}


var product=document.getElementById("product")
var quantity=document.getElementById("quantity")
var price=document.getElementById("price")
var additem=document.getElementById("additem")
var billbox=document.querySelector(".boxbox")
var a=1;


additem.addEventListener("click",function(event){
    var div=document.createElement("div")
    this.setAttribute("class",".bill-box1")
    div.innerHTML=`
    <table class="bill-one1">
        <tr>
        <td><p>${a++}</p></td>
        <td><p>${product.value}</p></td>
        <td><p>${quantity.value}</p></td>
        <td><p>${price.value}</p></td>
        <td><p>${quantity.value*price.value}</p></td>
        <td><p><button onclick="deleteitem(event)"><i class="fa-solid fa-trash"></i></button></p></td>
    </tr>
    </table>
</div>`

    billbox.append(div)

    ttoal.innerHTML=(price.value*quantity.value)
    event.preventDefault()
})

function deleteitem(event){

    let deleteItem=event.target.parentElement.parentElement.parentElement.parentElement
        .remove()
        event.preventDefault()
    }


var nameinput=document.getElementById("name")
var mobilenum=document.getElementById("number")
var ttoal=document.querySelector(".to-tal")

function appendZero(value){
    return (value < 10) ? '0'+value: value;
}

