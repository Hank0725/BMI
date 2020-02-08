const btn  = document.querySelector(".button");
const list = document.querySelector(".list");
const circle = document.querySelector(".circle");
const reset = document.querySelector(".smallcircle");
const result = document.querySelector(".result");
const resultcircyle = document.querySelector(".resultcircyle");
const inputKg = document.querySelector(".inputKg");
const inputCm = document.querySelector(".inputCm");
const OutData = JSON.parse(localStorage.getItem('LocalData')) || [];

//監聽btn執行函式
btn.addEventListener("click",Cal,false);
list.addEventListener("click",ToDel,false);
reset.addEventListener("click",Reset,false);
//使用函式計算BMI數值
function Cal(e) {
  e.preventDefault();
  let str  = "";
  const Kg   = document.querySelector(".inputKg").value;
  const Cm   = document.querySelector(".inputCm").value;
  let BMI  = (Kg/(Cm/100*Cm/100));
  BMI = BMI.toFixed(2);
  if(Kg === "" || Cm === ""  ){
    alert("請輸入身高和體重數字"); 
    return;}
  
  if (BMI <= 18.5) {
    status = "過輕"
    str += '<div class="result" style="display:block" id="circlelightfat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  }
  else if(BMI > 18.5 && BMI <= 24){
    status = "正常範圍"
    str += '<div class="result" style="display:block" id="circleideafat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  } 
  else if(BMI > 24 && BMI <= 27  ){
    status = "過重"
    str += '<div class="result" style="display:block" id="circletoofat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  } 
  else if(BMI > 27 && BMI <= 30){
    status = "輕度肥胖"
    str += '<div class="result" style="display:block" id="circleveryfat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  } 
  else if(BMI > 30 && BMI <= 35){
    status = "中度肥胖"
    str += '<div class="result" style="display:block" id="circlesuperfat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  } 
  else if(BMI > 35){
    status = "重度肥胖"
    str += '<div class="result" style="display:block" id="circlelbigfat"><p class="circyleBMI">'+BMI+'</br>BMI值'+'<p><div class="smallcircle"><a href=""><img src="https://github.com/Hank0725/BMI/blob/master/BMI/icons_loop.png?raw=true"></a></div></div><p class="outside">'+status+'</p>';
  } 
  
  var data = {
    height:Cm,
    weight:Kg,
    bmi:BMI,
    status:status};
  
  OutData.push(data); 
  update(OutData);
  localStorage.setItem('LocalData',JSON.stringify(OutData)); 
  resultcircyle.innerHTML = str ;
  changeBtn();
 }

//利用函式列出BMI各種數值
function update(OutData){
  list.innerHTML = "";
  str = '';
  var dt = new Date();
  var day = dt.getDate();
  var month = dt.getMonth()+1;
  var year = dt.getFullYear();
  var datalen = OutData.length;
  for (i=0;i<datalen;i++){
    if(OutData[i].bmi <= 18.5){
      str += '<tr>'+
           '<th id="lightfat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>' +year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }else if(OutData[i].bmi > 18.5 && OutData[i].bmi <= 24){
      str += '<tr>'+
           '<th id="idealfat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>' +year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }else if(OutData[i].bmi > 24 && OutData[i].bmi <= 27){
      str += '<tr>'+
           '<th id="toofat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>' +year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }else if(OutData[i].bmi > 27 && OutData[i].bmi <= 30){
      str += '<tr>'+
           '<th id="veryfat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>' +year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }
    else if(OutData[i].bmi > 30 && OutData[i].bmi <= 35){
      str += '<tr>'+
           '<th id="superfat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>' +year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }
    else if(OutData[i].bmi > 35){
      str += '<tr>'+
           '<th id="bigfat">'+ OutData[i].status+'</th>'+
           '<td><small>BMI:</small>'+ OutData[i].bmi+'</td>'+
           '<td><small>體重:</small>' + OutData[i].weight +'</td>'+
           '<td><small>身高:</small>' + OutData[i].height+'</td>'+
           '<td>'+year+'-'+month+'-'+day+'</td>'+
           '<td><a href="#"  data-num='+i+'>刪除</a></td>'+
           '</tr>';
    }
     list.innerHTML =  str;
   }
}

//利用Delete按鈕刪減
function ToDel(e){
  e.preventDefault();
   if(e.target.nodeName !== "A"){
     return
   };
  var det = e.target.dataset.num;
  OutData.splice(det,1);
  localStorage.setItem("LocalData",JSON.stringify(OutData));
  update(OutData);
}

/*----------  更新按鈕  ----------*/
function changeBtn() {
  btn.style.display = 'none';
  result.style.display =  'block';
}


/*----------  清空，重設輸入內容  ----------*/
function Reset() {
  circle.style.display = 'block';
  result.removeAttribute('class');
  circyleBMI.removeAttribute('class');
  smallcircle.removeAttribute('class');
  outside.removeAttribute('class');
  
  inputKg.value = '';
  inputCm.value = '';
}