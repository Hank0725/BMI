const btn  = document.querySelector(".button");
const list = document.querySelector(".list");
const OutData =  [];

//監聽btn執行函式
btn.addEventListener("click",Cal,false);
list.addEventListener("click",ToDel,false);
//使用函式計算BMI數值
function Cal(e) {
  e.preventDefault();
  const Kg   = document.querySelector(".inputKg").value;
  const Cm   = document.querySelector(".inputCm").value;
  let BMI  = (Kg/(Cm/100*Cm/100));
  BMI = BMI.toFixed(2);
  if (BMI <= 18.5) {
    status = "過輕"
  }
  else if(BMI > 18.5 && BMI <= 24){
    status = "正常範圍"
  } 
  else if(BMI > 24 && BMI <= 27  ){
    status = "過重"
  } 
  else if(BMI > 27 && BMI <= 30){
    status = "輕度肥胖"
  } 
  else if(BMI > 30 && BMI <= 35){
    status = "中度肥胖"
  } 
  else if(BMI > 35){
    status = "重度肥胖"
  } 
  var data = {
    height:Cm,
    weight:Kg,
    bmi:BMI,
    status:status};
  OutData.push(data);
  update(OutData);
  localStorage.setItem('LocalData',JSON.stringify(OutData)); 
  
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

