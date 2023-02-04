
//==============================table==========================//
var t = $('<table>');
$(t).addClass("mytable");
$(".body1").append(t);


var tr = $("<tr>");
$(t).append(tr);

var tname = $("<td>");
var tyear = $("<td>");
var ttoan = $("<td>");
var tly = $("<td>");
var thoa = $("<td>");
var tdtb = $("<td>");
var thl = $("<td>");

$(tr).append(tname);
$(tr).append(tyear);
$(tr).append(ttoan);
$(tr).append(tly);
$(tr).append(thoa);
$(tr).append(tdtb);
$(tr).append(thl);

tname.text("Name");
tyear.text("Year");
ttoan.text("Toan");
tly.text("Ly");
thoa.text("Hoa");
tdtb.text("ĐTB");
thl.text("HL");

$(t).css({
    
    "width": "100%"
});
$(t).attr("cellspacing", 0);
$(t).attr("cellpadding","3%");

$("td").css({
    "border-color": "black",
    "border-style": "solid",
});


//=====================================kết thúc table===============================//

// var arrST = [];
// var dtb = "?";
// var hl = "?";
const button1 = $("#add");
const button2 = $("#dtb");
const button3 = $("#hl");
//===========================add======================//
button1.click(function(){
console.log(1);
})
//==========================kết thúc==================//

//===tính điểm trung bình=============================//
button2.click(function(){
    console.log(1);
})
//==========================kết thúc===================//

//========================xét học lực==================//
button3.click(function(){
    console.log(1);
})
//==========================kết thúc===================//

//     var name = document.getElementById("name").value;
//     var year = document.getElementById("year").value;
//     var toan = parseFloat(document.getElementById("toan").value);
//     var ly = parseFloat(document.getElementById("ly").value);
//     var hoa = parseFloat(document.getElementById("hoa").value);

//     var objSt = {
//         name: name,
//         year: year,
//         toan: toan,
//         ly: ly,
//         hoa: hoa,
//         dtb: dtb,
//         hl: hl
//     }
//     arrST.push(objSt);
//     in_DSSV();
// }

// function in_DSSV() {

    




//     // var table = document.getElementById("mytable");
//     // table.innerHTML = "";

//     // for (var i = 0; i < arrST.length; i++) {
//     //     var obj = arrST[i];
//     //     var tr = document.createElement("tr");
//     //     table.append(tr);

//     //     var tname = document.createElement("td")1;
//     //     var tyear = document.createElement("td")1;
//     //     var ttoan = document.createElement("td")1;
//     //     var tly = document.createElement("td")1;
//     //     var thoa = document.createElement("td")1;
//     //     var tdtb = document.createElement("td")1;
//     //     var thl = document.createElement("td")1;

//     //     tr.append(tname);
//     //     tr.append(tyear);
//     //     tr.append(ttoan);
//     //     tr.append(tly);
//     //     tr.append(thoa);
//     //     tr.append(tdtb);
//     //     tr.append(thl);

//     //     tname.innerHTML = obj.name;
//     //     tyear.innerHTML = obj.year;
//     //     ttoan.innerHTML = obj.toan;
//     //     tly.innerHTML = obj.ly;
//     //     thoa.innerHTML = obj.hoa;
//     //     tdtb.innerHTML = obj.dtb
//     //     thl.innerHTML = obj.hl;

//     // }

// }

// function DTB() {

//     for (var i = 0; i < arrST.length; i++) {
//         arrST[i].dtb = (arrST[i].toan + arrST[i].ly + arrST[i].hoa) / 3;
//     }
//     in_DSSV();


// }

// function HL() {
//     for (var i = 0; i < arrST.length; i++) {
//         if (arrST[i].dtb >= 8) {
//             arrST[i].hl = "Giỏi"
//         } else if (arrST[i].dtb < 8 && arrST[i].dtb > 5) {
//             arrST[i].hl = "Khá"
//         } else if (arrST[i].dtb < 5 && arrST[i].dtb > 3) {
//             arrST[i].hl = "Trung Bình"
//         } else {
//             arrST[i].hl = "Yếu"
//         }
//     }
//     in_DSSV();
// }
