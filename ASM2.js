
var arrST = [];
var index = 0;
var count = 0;
var dtb = "?";
var hl = "?";
function add() {
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    var toan = parseFloat(document.getElementById("toan").value);
    var ly = parseFloat(document.getElementById("ly").value);
    var hoa = parseFloat(document.getElementById("hoa").value);

    var objSt = {
        name: name,
        year: year,
        toan: toan,
        ly: ly,
        hoa: hoa,
        dtb: dtb,
        hl: hl
    }
    arrST.push(objSt);
    in_DSSV();
}

function in_DSSV() {
    var table = document.getElementById("mytable");
    table.innerHTML = "";
    count++;
    //console.log(count);

    for (var i = 0; i < arrST.length; i++) {
        var obj = arrST[i];
        var tr = document.createElement("tr");
        table.append(tr);
        tr.id = index;

        var tname = document.createElement("td");
        var tyear = document.createElement("td");
        var ttoan = document.createElement("td");
        var tly = document.createElement("td");
        var thoa = document.createElement("td");
        var tdtb = document.createElement("td");
        var thl = document.createElement("td");

        tr.append(tname);
        tr.append(tyear);
        tr.append(ttoan);
        tr.append(tly);
        tr.append(thoa);
        tr.append(tdtb);
        tr.append(thl);

        tname.innerHTML = obj.name;
        tyear.innerHTML = obj.year;
        ttoan.innerHTML = obj.toan;
        tly.innerHTML = obj.ly;
        thoa.innerHTML = obj.hoa;
        tdtb.innerHTML = obj.dtb
        thl.innerHTML = obj.hl;

    }
    index += 1;
}

function DTB() {

    for (var i = 0; i < arrST.length; i++) {
        arrST[i].dtb = (arrST[i].toan + arrST[i].ly + arrST[i].hoa) / 3;
    }
    in_DSSV();


}

function HL() {
    for (var i = 0; i < arrST.length; i++) {
        if (arrST[i].dtb >= 8) {
            arrST[i].hl = "Giỏi"
        } else if (arrST[i].dtb < 8 && arrST[i].dtb > 5) {
            arrST[i].hl = "Khá"
        } else if (arrST[i].dtb < 5 && arrST[i].dtb > 3) {
            arrST[i].hl = "Trung Bình"
        } else {
            arrST[i].hl = "Yếu"
        }
    }
    in_DSSV();
}


  // tname.id ="tname" + index;
        // tyear.id ="tyear" + index;
        // ttoan.id = "ttoan" + index;
        // tly.id = "tly" + index;
        // thoa.id = "thoa" + index;
        // tdtb.id = "tdtb" + index;
        // thl.id = "thl" + index;

 // count = 1;
    // for (var i = 0; i < index; i++) {
    //     var toan1 = parseFloat(document.getElementById("ttoan" + i).innerHTML);
    //     var ly1 = parseFloat(document.getElementById("tly" + i).innerHTML);
    //     var hoa1 = parseFloat(document.getElementById("thoa" + i).innerHTML);
    //     let tb = document.getElementById("tdtb" + i);

    //     var diemTB = (toan1 + ly1 + hoa1) / 3;
    //     dtb = diemTB.toFixed(2);

    // }
    // add();

            //===========================================================//
            // for(var i = table.rows.length-1; i>0;i--){
            // table.deleteRow(i);
            // }
            //  for (var i = 0; i < arrST.length; i++) {
            // //     var obj = arrST[i];
            // //     var row = table.insertRow();
            // //     var cell1 = row.insertCell(0);
            // //     cell1.innerHTML = obj.name;
            //  }
/* function dtb (){
    var lcb= parseFloat(document.get ElementbyId("lcb").innerText);
    vả table = document.getElementById("mytable");
    for(var i=1; i<table.rows.lenght;i++){
        table.row[i].cell[4].innerText= parseFloat(table.r[i].c[3].innertext)*lcb;
    }
}
*/


