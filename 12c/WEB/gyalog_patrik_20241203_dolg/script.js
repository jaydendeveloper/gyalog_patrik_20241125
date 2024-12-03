function maskify(cc) {
    const ccArr = [...cc];
    let str = "";
    ccArr.forEach((char, index) => {
        let lastFourStart = ccArr.length-4;
        if (index < lastFourStart) {
            str += "#";
        } else {
            str += char;
        }

    })

    return str;
}

function isTriangle(a,b,c)
{
    if(a <= 0 || b <= 0 || c <= 0){
        return false;
    }

    const s = (a+b+c)/2;
    const A = Math.sqrt(s*(s-a)*(s-b)*(s-c));

    if(A > 0){
        return true;
    }

   return false;
}

function timeConvert(num) { 

    let secs = "0";
    let mins = "0";
        
    if(num > 0){
    secs = num % 60;
    mins = Math.floor(num / 60);
    }
        
    if(secs < 10){
        secs = `0${secs}`;
    }
        
    if(mins < 10){
        mins = `0${mins}`;
    }
        
    return `${mins}:${secs}`;
}

function createArrayOfTiers(num) {
  
    const arr = [];
    const numStr = num.toString();
    for(let i = 1; i <= numStr.length; i++){
      let str = "";
      for(let j = 0; j < i; j++){        
        str += numStr[j];
      }
      arr.push(str);
    }
  
    return arr;
}