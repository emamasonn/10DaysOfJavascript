document.getElementById('btnEql').addEventListener('click', function() {
      let val = document.getElementById('res').innerHTML;
      console.log(val);
      let sig = '';
      let i = 0;
      while(sig == ''){
          if((val[i] != '0')&&(val[i] != '1')){
                sig = val[i];
          }
          i++;
          console.log(val[i]);
      }
      let arr = val.split(sig);
      let val1 = parseInt(arr[0], 2);
      let val2 = parseInt(arr[1], 2);
      switch (sig) {
        case '+':
          document.getElementById('res').innerHTML = (val1 + val2).toString(2);
          break;
        case '-':
          document.getElementById('res').innerHTML = (val1 - val2).toString(2);
          break;
        case '*':
          document.getElementById('res').innerHTML = (val1 * val2).toString(2);
          break;
        case '/':
          document.getElementById('res').innerHTML = parseInt(val1 / val2).toString(2);
          break;
      }
  })


function dataOperation(event){
    let id = event.target.id;
    switch (id) {
        case 'btnSum':
          document.getElementById('res').innerHTML += '+';
          break;
        case 'btnSub':
          document.getElementById('res').innerHTML += '-';
          break;
        case 'btnMul':
          document.getElementById('res').innerHTML += '*';
          break;
        case 'btnDiv':
          document.getElementById('res').innerHTML += '/';
          break;
        case 'btn1':
          document.getElementById('res').innerHTML += '1';
          break;
        case 'btn0':
          document.getElementById('res').innerHTML += '0';
          break;
        case 'btnClr':
          document.getElementById('res').innerHTML = '';
          break;
      }
}


document.getElementById('btnMul').onclick = dataOperation;
document.getElementById('btnSum').onclick = dataOperation;
document.getElementById('btn1').onclick = dataOperation;
document.getElementById('btnDiv').onclick = dataOperation;
document.getElementById('btnSub').onclick = dataOperation;
document.getElementById('btnClr').onclick = dataOperation;
document.getElementById('btn0').onclick = dataOperation;