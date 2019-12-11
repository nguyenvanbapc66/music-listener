//Lấy dữ liệu từ localstorage xuống để so sánh
let a = [];
for (let i = 1; i <= localStorage.length; i++) {
    a.push(JSON.parse(localStorage.getItem(`artist${i}`)));
}

function xacDinh(e) {
    console.log(e)
    console.log(e.target.dataset.artistName);
    for (let i = 0; i < a.length; i++) {
        if (e.target.dataset.artistName === a[i].name) {
            localStorage.setItem('clickedArtist',i+1);
            window.location.href= "Detail-Artist.html";
        }
    }
}