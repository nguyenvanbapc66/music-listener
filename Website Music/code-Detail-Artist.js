

// Lấy dữ liệu từ localStorage
let a = '';
a = JSON.parse(localStorage.getItem(`artist${localStorage.getItem('clickedArtist')}`));

console.log(JSON.parse(localStorage.getItem('artist2')))
console.log(a);


document.getElementById("name").innerHTML = a.name;
document.getElementById("real-name").innerHTML = 'Tên thật: ' +'' + a.tenThat;
document.getElementById("birthday").innerHTML = 'Sinh nhật: '+'' + a.sinhNhat;
document.getElementById("nation").innerHTML = 'Quốc gia: ' +'' + a.nation;
document.getElementById("singer1-cover-boder").innerHTML = a.anhBackGround;
document.getElementById("singer1-ava-boder").innerHTML = a.image;
document.getElementById("infor").innerHTML = a.inFor;


if (a.name === 'Sơn Tùng M-TP') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/embed/knW7-x7Y7RE" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/FN7ALfpGxiI" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/Llw9Q6akRo4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/qGRU3sRbaYw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/32sYGCOYJUM" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/LCyo565N_5w" width="350" height="200"  frameborder="0" allowFullScreen class="spacing"></iframe>' +  
        '<iframe src="https://www.youtube.com/embed/5Jm9g0YdGDU" width="350" height="200"  frameborder="0"  class="spacing" allowfullscreen></iframe>' +
        '<iframe src="https://www.youtube.com/embed/-vtBgNxMyZI" width="350" height="200" frameborder="0"  allowFullScreen class="spacing"></iframe>'+
        '<iframe src="https://www.youtube.com/embed/Thf6-faRGI4" width="350" height="200"  frameborder="0" class="spacing" allowfullscreen></iframe>'
}

else if (a.name === 'Amee') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/watch?v=YXkp77tR9vw" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=-mDjSuS-Fiw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=I3RICWXA_3U" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=ZwDxaM5VBJM" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=95ahbau-rJk" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe  src="https://www.youtube.com/watch?v=iE52-XXnQqs" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=_UCb4U82tTk"  width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=30KI5SuECuc" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=8oa9i2_p7K4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>'
}

else if (a.name === 'Soobin Hoàng Sơn') {
    document.getElementById('ds-bai-hat').innerHTML =
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/7kP8Qnu2TJ8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/dOZ1gK5YFBI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/wnSNyE2hVu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/j__Q13iAxNk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/z5Jc7KiTLbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/nIjreHymcWU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/X7sSE3yCNLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/Mtiz26WdeKA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>' +
    '<iframe width="350" height="200" src="https://www.youtube.com/embed/G6towqFgoZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"class="spacing" allowfullscreen></iframe>'
}



