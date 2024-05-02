let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");

function remainingYear(m) {
  m = m-1;
  let z = Math.floor(m / 4);
  m=m-z;
  return (z*2)+(m*1);
}
function leapYear(val) {
  if(val % 4 == 0)
  {
    if(val % 100 == 0)
    {
        if(val % 400 == 0)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    else
    {
      return 1;
    }
  }
  else{
    return 0;
  }
}

function completeYear(n) {
  let x = n % 100;
  n = n - x;
  if(x != 0)
  {
    x = remainingYear(x);
  }
  else{
     x= 0;
  }

  let y = n % 400;
  if(y==100)
  {
    return (5+x);
  }
  else if(y==200)
  {
    return (3+x);
  }
  else if(y==300)
  {
   return (1+x);
  }
  else
  {
   return (0+x);
  }
}

function monTh(n,a) {
  a=leapYear(a);
  let y = 0;
  for(let i=1;i<n;i++)
  {
    if(i<=7)
    {
      if(i%2==0 && i==2)
      {
        if (a == 1)
        {
          y=y+29;
        }
        else{
          y=y+28;
        }
      }
      else if(i%2 == 0 && i!=2)
      {
        y=y+30;
      }
      else{
        y=y+31;
      }
    }
    else{
      if(i%2 == 0)
      {
        y=y+31;
      }
      else{
        y=y+30;
      }
    }
  }
  return y;
}

function fun() {
  let date = document.getElementById("date").value;
let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;




let val2 = leapYear(year);
if(val2 == 1)
{
   msg.innerText = `${year} is a Leap-Year`;
}
else{
    msg.innerText = `${year} is not a Leap-Year`;   
}

if (month > 12 || date > 31)
{
  msg2.innerText = "Invalid Date or Month";
} 
else
{
let res = parseInt(completeYear(year))+parseInt(monTh(month , year)) + parseInt(date);




if(year %100 == 0)
{
  if(val2 == 1)
  {
    res = res - 2;
  }
  else
  {
    res = res - 1;
  }
}

res = res % 7;

if(res == 0)
{
msg2.innerText = "Day - Sunday";
}
else if(res == 1)
{
msg2.innerText = "Day - monday";
}
else if(res == 2)
{
msg2.innerText = "Day - tuesday";
}
else if(res == 3)
{
msg2.innerText = "Day - wednesday";
}
else if(res == 4)
{
msg2.innerText = "Day - thursday";
}
else if(res == 5)
{
msg2.innerText = "Day - friday";
}
else
{
msg2.innerText = "Day - Sutarday";
}
}
}
btn.addEventListener("click",fun);



