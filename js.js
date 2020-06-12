let anh1 = document.getElementById('pic1');
let anh2 = document.getElementById('pic2');
let anh3 = document.getElementById('pic3');
let anh4 = document.getElementById('pic4');
let anh5 = document.getElementById('pic5');

function bamNut1() {
    if (anh1.src.match('anh1')){
        anh1.src = 'img/anh2_part1.jpg';
        anh1.value = "so2";
    }else if (anh1.src.match('anh2')){
        anh1.src = 'img/anh3_part1.jpg';
        anh1.value = "so3";
    }else {
        anh1.src = 'img/anh1_part1.jpg';
        anh1.value = "so1";
    }
}
function bamNut2() {
    if (anh2.src.match('anh1')){
        anh2.src = 'img/anh2_part2.jpg';
        anh2.value = "so2";
    }else if (anh2.src.match('anh2')){
        anh2.src = 'img/anh3_part2.jpg';
        anh2.value = "so3";
    }else {
        anh2.src = 'img/anh1_part2.jpg';
        anh2.value = "so1";
    }
}
function bamNut3() {
    if (anh3.src.match('anh1')){
        anh3.src = 'img/anh2_part3.jpg';
        anh3.value = "so2";
    }else if (anh3.src.match('anh2')){
        anh3.src = 'img/anh3_part3.jpg';
        anh3.value = "so3";
    }else {
        anh3.src = 'img/anh1_part3.jpg';
        anh3.value = "so1";
    }
}
function bamNut4() {
    if (anh4.src.match('anh1')){
        anh4.src = 'img/anh2_part4.jpg';
        anh4.value = "so2";
    }else if (anh4.src.match('anh2')){
        anh4.src = 'img/anh3_part4.jpg';
        anh4.value = "so3";
    }else {
        anh4.src = 'img/anh1_part4.jpg';
        anh4.value = "so1";
    }
}
function bamNut5() {
    if (anh5.src.match('anh1')){
        anh5.src = 'img/anh2_part5.jpg';
        anh5.value = "so2";
    }else if (anh5.src.match('anh2')){
        anh5.src = 'img/anh3_part5.jpg';
        anh5.value = "so3";
    }else {
        anh5.src = 'img/anh1_part5.jpg';
        anh5.value = "so1";
    }
}
function kiemtra() {
    if (anh1.src.match('anh1')){
        if (anh2.src.match('anh1')){
            if (anh3.src.match('anh1')){
                if (anh4.src.match('anh1')){
                    if (anh5.src.match('anh1')){
                        alert('Được nhớ !!!!!');
                    }
                }
            }
        }
    }else if (anh1.src.match('anh2')){
        if (anh2.src.match('anh2')){
            if (anh3.src.match('anh2')){
                if (anh4.src.match('anh2')){
                    if (anh5.src.match('anh2')){
                        alert('Đẹp zaiiii');
                    }
                }
            }
        }
    }else if (anh1.src.match('anh3')){
        if (anh2.src.match('anh3')){
            if (anh3.src.match('anh3')){
                if (anh4.src.match('anh3')){
                    if (anh5.src.match('anh3')){
                        alert('Tọe vờiiiii');
                    }
                }
            }
        }
    }

}
