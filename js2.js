function bamNut1() {
    let anh1 = document.getElementById('pic1').value;
    if (anh1.src.match('anh1_part')){
        anh1.src = 'img/anh2_part1.jpg';
    }else if (anh1.src.match('anh2_part')){
        anh1.src = 'img/anh3_part1.jpg';
    }else {
        anh1.src = 'img/anh1_part1.jpg';
    }
}
function bamNut2() {
    let anh2 = document.getElementById('pic2').value;
    if (anh2.src.match('anh1_part')){
        anh2.src = 'img/anh2_part2.jpg';
    }else if (anh2.src.match('anh2_part')){
        anh2.src = 'img/anh3_part2.jpg';
    }else {
        anh2.src = 'img/anh1_part2.jpg';
    }
}
function bamNut3() {
    let anh3 = document.getElementById('pic3').value;
    if (anh3.src.match('anh1_part')){
        anh3.src = 'img/anh2_part3.jpg';
    }else if (anh3.src.match('anh2_part')){
        anh3.src = 'img/anh3_part3.jpg';
    }else {
        anh3.src = 'img/anh1_part3.jpg';
    }
}
function bamNut4() {
    let anh4 = document.getElementById('pic4').value;
    if (anh4.src.match('anh1_part')){
        anh4.src = 'img/anh2_part4.jpg';
    }else if (anh4.src.match('anh2_part')){
        anh4.src = 'img/anh3_part4.jpg';
    }else {
        anh4.src = 'img/anh1_part4.jpg';
    }
}
function bamNut5() {
    let anh5 = document.getElementById('pic5').value;
    if (anh5.src.match('anh1_part')){
        anh5.src = 'img/anh2_part5.jpg';
    }else if (anh5.src.match('anh2_part')){
        anh5.src = 'img/anh3_part5.jpg';
    }else {
        anh5.src = 'img/anh1_part5.jpg';
    }
}