//----------------------------------- Nhân Viên ----------------------------------//
var arrEmployee = [];

document.write("<h1>Nhân Viên</h1> <br>")
 var div ; //= document.createElement("div");
//     $("body").append(div);
//     $(div).addClass("nv row");
//$(div).attr('id', 'nv1');
var p;
var x;
var a = 0;
var img;

fetch('http://localhost:8080/staffs')
    .then(function (response) {
        let result = response.json().then(commits => {
            console.log(commits);

            commits.forEach(element => {
                //console.log(element.id);
                var objE = {
                    id: element.id,
                    name: element.name,
                    doB: element.doB,
                    Hsl: element.salaryScale,
                    NBD: element.startDate
                }
                arrEmployee.push(objE);

            });
            function taoThe(){
                p = document.createElement("p");
                    p.classList.add('khung' + i);
                    $(p).addClass("col-xs-2");
                    $(div).append(p);
                    var obj = arrEmployee[i];
                    x = $('.khung' + i);
                    x.text(obj.name);
                    a++;
                    img = $("<img>");
                    $(img).addClass("img1");
                    $(p).append(img);
                    $(".img1").attr('src' ,'https://img.meta.com.vn/Data/image/2021/10/08/hinh-anh-luffy-dep-6.jpg')

            }
            for (var i = 0; i < arrEmployee.length; i++) {
                if(a==0){
                    div = document.createElement("div");
                    $("body").append(div);
                    $(div).addClass("nv row");
                    taoThe();
                } else if (a!=0 && a < 5) {
                    taoThe();
                }
                else {
                    taoThe(); 
                    a = 0;
                    
                }

            }
            // document.getElementsByClassName("nv").style.display = "flex";
        })


    })


    .catch(error => {
        alert(error);
    });




//----------------------------------- Phòng Ban ----------------------------------//
// fetch('http://localhost:8080/departments')
//     .then(function (response) {
//         let result = response.json().then(commits => console.log(commits));
//     })
//     .catch(error => {
//         alert(error);
//     });


// //----------------------------------- ID ---------------------------------------//
// fetch('http://localhost:8080/departments/{id}')
//     .then(function (response) {
//         let result = response.json().then(commits => console.log(commits));
//     })
//     .catch(error => {
//         alert(error);
//     });
// //----------------------------------- Lương ----------------------------------//
// fetch('http://localhost:8080/staffsSalary')
//     .then(function (response) {
//         let result = response.json().then(commits => console.log(commits));
//     })
//     .catch(error => {
//         alert(error);
//     });
//----------------------------------- Hết ----------------------------------//