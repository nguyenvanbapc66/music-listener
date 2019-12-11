
// let nhap = Number(prompt('Bạn muốn làm gì ?  \n Menu: \n 1.Thêm thông tin nghệ sĩ \n 2.Sửa thông tin nghệ sĩ \n 3.Xóa thông tin nghệ sĩ'));

// //Thêm + Sửa + Xóa
// Tên
// Ảnh
// VideoId
// Tiểu sử
// Quốc gia
// Thể loại nhạc: EDM acoustic indie INSTRUMENTAL MUSIC
// ...
// ChannelID:?

// Bấm vào hiện bài hát 
// => kết quả : API channel id 
// search =>  lưu channel id để suy ra danh sách bài hát

// ok, khi thao tác trực tiếp với mảng này thì e chỉ lấy đc dữ liệu của nó thôi, ko thêm, sửa, xóa trực tiếp trong file này đc
// vì thế khi người dùng bắt đầu truy cập thì lưu mảng này vào local :))
// nếu người dùng muốn thêm, sửa, xóa thì chỉ lấy dữ liệu từ local ra và thao tác với nó thôi :))
// hiểu hông ??
// ngay từ đầu, e đưa cái artist lên local luôn
// khi thao tác: thêm, xem, sửa, xóa thì cứ lấy dữ liệu từ local
// còn cái mảng gốc artist trong file này cứ keme nó =))

let artist = [
    {
        'name': 'Sơn Tùng M-TP',
        'tenThat': 'Nguyễn Thanh Tùng',
        'sinhNhat': '05/07/1994',
        'nation': 'Việt Nam',
        'inFor': '<p> Sinh ra và lớn lên tại một vùng quê của tỉnh Thái Bình. Vốn sở hữu “gen di truyền” từ người mẹ của mình, một nghệ sĩ biểu diễn hát chèo tại Nhà hát Thái Bình nên Tùng đã bộc lộ khả năng âm nhạc của mình ngay từ khi còn là một cậu bé mới chập chững những bước đi đầu tiên. <p>Năm 2012, Sơn Tùng quyết định thi tuyển vào Nhạc viện TPHCM, một trong những ngôi trường có tỉ lệ chọi vô cùng “khốc liệt”.Mặc dù giọng hát của Sơn Tùng không có một chút kỹ thuật nào nhưng chỉ với một tháng luyện thi chăm chỉ, quên cả việc ăn ngủ, Sơn Tùng đã đỗ thủ khoa Nhạc viện TPHCM chuyên ngành Thanh nhạc với số điểm 25,5.</p >Ít năm sau, những sản phẩm âm nhạc liên tiếp được chàng trai gốc Thái Bình tung ra thị trường như “Em của ngày hôm qua”, “Chạy ngay đi”, “Lạc trôi”, … đã trở thành những sản phẩm đình đám nhất của thị trường âm nhạc Việt Nam, ngoài ra những sản phẩm này cũng lan tỏa sang cả một số quốc gia khác trên thế giới.</p > ',
        'image': '<img src="https://i.imgur.com/hg6ukiT.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/fQFDONx.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
    // 'j__Q13iAxNk'
    {
        'name': 'Soobin Hoàng Sơn',
        'tenThat': 'Nguyễn Hoàng Sơn',
        'sinhNhat': '10/09/1992',
        'nation': 'Việt Nam',
        'inFor': '<p>Soobin Hoàng Sơn (tên thật Nguyễn Hoàng Sơn, sinh ngày 10/09/1992) là một ca sỹ, nhạc sỹ,rapper ở Việt Nam.Sau khi đoạt ngôi á quân Ngôi sao Việt 2014 và để lại dấu ấn riêng với giải Bạc chung cuộc tại The Remix mùa hai, Soobin Hoàng Sơn bắt đầu tập trung cho con đường ca hát chuyên nghiệp.<p>Từ trước đến nay, giọng ca sinh năm 1992 theo đuổi dòng nhạc RnB và có chỗ đứng nhất định trên thị trường nhạc Việt. Dù vậy, phải đợi đến khi rẽ lối hát pop ballad, vào tháng 10/2016, anh mới có ca khúc hit đầu tiên trong sự nghiệp, Phía sau một cô gái, do nhạc sĩ Tiên Cookie sáng tác. Ca khúc nhanh chóng tạo được cơn sốt và được cộng đồng đón nhận, hưởng ứng nhiệt tình.</p>Tiếp nối thành công của bản hot Phía Sau Một Cô Gái, Soobin tiếp tục cho ra mắt thêm những sản phẩm âm nhạc đầy chất lượng trong năm 2017: Đi Để Trở Về, Đi Và Yêu, Anh Đã Quen Với Cô Đơn.</p>',
        'image': '<img src="https://i.imgur.com/teNUyBC.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/hU3tZ6l.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },

    // '7kP8Qnu2TJ8', 'HK31DrqpztM&bpctr=1572624414'
    // {
    //     'name': 'Amee',
    //     'tenThat': 'Trần Huyền My',
    //     'sinhNhat': '20/03/2000',
    //     'nation': 'Việt Nam',
    //     'inFor': '<p> Cô tên thật Trần Huyền My, đã xuất hiện trong một số MV với vai trò diễn viên, nổi bật nhất là Hongkong1. Trong MV Hongkong1, giọng ca sinh năm 2000 nhận được lời khen cho vẻ ngoài xinh xắn, dễ thương.  <p>Trong sản phẩm Ex’s Hate Me, cô không chỉ tham gia mà còn khoe giọng. Màn ra mắt với tư cách ca sĩ của cô đang gây sốt trên các trang mạng xã hội. Cùng sự lan tỏa của Ex’s Hate Me, thông tin về AMee cũng được tìm kiếm. Ngoại hình xinh xắn, đồng thời, cô chinh phục khán giả với giọng hát trong trẻo, luyến láy ngọt ngào.</p></p>',
    //     'image': '<img src="https://i.imgur.com/rF04dOv.jpg" class="rounded" id="singer1-ava-boder" />',
    //     'anhBackGround': '<img src="https://i.imgur.com/sA8NePp.jpg" class="rounded" id="singer1-cover-boder" />',
    //     'videoId': [],
    //     'thumbnail': [],
    // },

    {
        'name': 'Binz',
        'tenThat': 'Lê Nguyễn Trung Đan',
        'sinhNhat': '24/05/1988',
        'nation': 'Việt Nam',
        'inFor': '<p> Tham gia cộng đồng underground Việt từ năm 2008, Binz đã từng là artist của một số diễn đàn rap như Midsiderap, GVR. Được biết tới rộng rãi hơn trong năm 2010 với mixtape ”M-da Legend” & những sản phẩm  đáng chú ý kết hợp với rapper Cá Chép của Vietdreamerz, người nghe rap nhớ tới Binz là một artist trẻ  miền Trung có giọng hát ngọt ngào, kĩ thuật tốt và luôn mới mẻ.  <p>  Các album của anh: Nếu Như Là Định Mệnh - Bin, Hoài Lâm; Sau Mỗi Đêm Dài - JC Hưng, Binz (2017);  Cơn Mưa Cuối (Single) Hoa Hồng Dại - Binz, KanDy, Ken Tamz; Tết Này Con Về - Isaac Thái, Binz; Chỉ Còn Mình Anh (Single) (2016); Tát Nước Đầu Đình (Single); Điều Bí Mật (Single)-ItsLee, Binz;  Những Bài Hát Hay Nhất Của Binz(2015); Bâng Khuâng (Rap Version); (Single) - JustaTee, Binz (2014);   Crying Over You (Single) JustaTee, Binz (2013); Nếu Như Là Định Mệnh - Hoài Lâm ft. Binz (2017);  HOA HỒNG DẠI - Binz(2017). </p> Năm 2018, Binz cùng Khổng Tú Quỳnh cho ra mắt Single "Sẽ Không Ngốc Nưa", ca khúc đánh dấu sự trở lại của Khổng Tú Quỳnh trên đường đua V-Pop.</p>',
        'image': '<img src="https://i.imgur.com/BkgVMki.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/YIG2aav.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
    {
        'name': 'Đức Phúc',
        'tenThat': 'Nguyễn Đức Phúc',
        'sinhNhat': '15/10/1996',
        'nation': 'Việt Nam',
        'inFor': '<p> Đức Phúc tên đầy đủ là Nguyễn Đức Phúc. Anh là quán quân Giọng hát Việt mùa 3, đang hoạt động nghệ thuật với vai trò ca sĩ do công ty Mỹ Tâm Entertainment quản lý. <p> Sau khi tham gia Giọng hát Việt 2015, Đức Phúc được công chúng yêu thích vì  giọng hát ngọt ngào, cao vút qua những ca khúc như: Ánh Nắng Của Anh, Cũng Đành Thôi, Em Là Tất Cả...  Nhưng anh chàng vẫn tự ti về ngoại hình của mình, ngay sau đó, nam ca sĩ phải nỗ lực rất nhiều để giảm cân. Từ một chàng trai mũm mĩm, sau thời gian cố gắng anh đã sở hữu được thân hình như mong muốn. </p>  Nhưng vẫn chưa dừng lại, Đức Phúc quyết tâm "lột xác" để có vẻ ngoài hoàn hảo hơn.  Sau khi trải qua một cuộc phẫu thuật thẩm mĩ, Đức Phúc đã trở nên lột xác ngoạn mục với hình ảnh điển trai. </p>',
        'image': '<img src="https://i.imgur.com/znRXM2u.jpg" class="rounded" id="singer1-ava-boder" />',
        'anhBackGround': '<img src="https://i.imgur.com/ak15OW6.jpg" class="rounded" id="singer1-cover-boder" />',
        'videoId': [],
        'thumbnail': [],
    },
];

// Đẩy dữ liệu lên localstorage

// localStorage.setItem('key',JSON.stringify(artist));
// console.log(localStorage.getItem('key'));
// Dùng để test
localStorage.clear();

// Chuyển sang dạng string để lưu trên localstorage
for (let i = 0; i < artist.length; i++) {
    localStorage.setItem(`artist${i + 1}`, JSON.stringify(artist[i]));
}
////////////////////////////////////////////////////////////////
// localStorage.setItem("name", "Sơn Tùng M-TP");
// localStorage.setItem("tenThat", "Nguyễn Thanh Tùng");
// localStorage.setItem("sinhNhat", "05/07/1994");
// localStorage.setItem("nation", "Việt Nam");
// localStorage.setItem("inFor", "<p> Sinh ra và lớn lên tại một vùng quê của tỉnh Thái Bình. Vốn sở hữu “gen di truyền” từ người mẹ của mình, một nghệ sĩ biểu diễn hát chèo tại Nhà hát Thái Bình nên Tùng đã bộc lộ khả năng âm nhạc của mình ngay từ khi còn là một cậu bé mới chập chững những bước đi đầu tiên. <p>Năm 2012, Sơn Tùng quyết định thi tuyển vào Nhạc viện TPHCM, một trong những ngôi trường có tỉ lệ chọi vô cùng “khốc liệt”.Mặc dù giọng hát của Sơn Tùng không có một chút kỹ thuật nào nhưng chỉ với một tháng luyện thi chăm chỉ, quên cả việc ăn ngủ, Sơn Tùng đã đỗ thủ khoa Nhạc viện TPHCM chuyên ngành Thanh nhạc với số điểm 25, 5.</p >Ít năm sau, những sản phẩm âm nhạc liên tiếp được chàng trai gốc Thái Bình tung ra thị trường như “Em của ngày hôm qua”, “Chạy ngay đi”, “Lạc trôi”, … đã trở thành những sản phẩm đình đám nhất của thị trường âm nhạc Việt Nam, ngoài ra những sản phẩm này cũng lan tỏa sang cả một số quốc gia khác trên thế giới.</p > ");
// localStorage.setItem("image", '<img src="https://i.imgur.com/hg6ukiT.jpg" class="rounded" width="50" height="50">');
// localStorage.setItem("anhBackGround", '<img src="https://i.imgur.com/fQFDONx.jpg" class="rounded" width="50" height="50">');
// localStorage.setItem("videoId", ['j__Q13iAxNk', 'wnSNyE2hVu4']);
// localStorage.setItem("thumbnail", []);


// console.log(localStorage.length)

//Khởi tạo mảng để chứa dữ liệu lấy từ local storage
var a = [];

function getData() {

    for (let i = 1; i <= localStorage.length; i++) {
        a.push(JSON.parse(localStorage.getItem(`artist${i}`)));
    }

    for (let i = 0; i < a.length; i++) {
        let xhr = new XMLHttpRequest();
        let keyword = '20 bài hát trending của' + a[i].name + ' Official Music Video';
        // console.log(a[i].name)

        let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
            keyword + "&type=video&key=AIzaSyCH5dyd-hWLc72rIxLtnLCOI_7k0PsaDac"
        // AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4
        // AIzaSyCH5dyd-hWLc72rIxLtnLCOI_7k0PsaDac
        // AIzaSyA-Y_AEsinRIRFF73D76sLu4mid4xgqshM

        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                getInfor(this.responseText, a[i]);
                localStorage.setItem(`artist${i + 1}`, JSON.stringify(a[i]))

            }
        }
        xhr.send();
    }
    console.log(a);


    // for (let i = 0; i < a.length; i++) {
    //     localStorage.setItem(`artist${i + 1}`, JSON.stringify(a[i]))
    // }


}

function getDataCurrentArtist(currentArtist) {
    // console.log(currentArtist)
    let xhr = new XMLHttpRequest();
    let keyword = '20 bài hát trending của' + currentArtist.name + ' Official Music Video';
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
        keyword + "&type=video&key=AIzaSyCH5dyd-hWLc72rIxLtnLCOI_7k0PsaDac"
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getInfor(this.responseText, currentArtist);
            localStorage.setItem(`artist${a.length}`, JSON.stringify(currentArtist));
        }
    }
    xhr.send();

    // for (let i = 0; i < a.length; i++) {
    //     localStorage.setItem(`artist${i + 1}`, JSON.stringify(a[i]))
    // }
}


// getData();
// Hiển thị thông tin từng nghệ sĩ ra màn hình
function displayInfor() {
    document.getElementById('table-content').innerHTML = ''
    for (let i = 0; i < a.length; i++) {
        document.getElementById('table-content').innerHTML +=
            '<tr> <th scope="row">' + (i + 1) + '</th> <td>' + a[i].name +
            '</td><td>' + a[i].tenThat +
            '</td><td>' + a[i].sinhNhat +
            '</td><td>' + a[i].nation +
            '</td><td>' + a[i].inFor +
            '</td><td>' + a[i].image +
            '</td><td>' + a[i].anhBackGround +
            '</td><td class = "vid-ids">' + a[i].videoId +
            '</td><td class = "anh-vid">' + 
            a[i].thumbnail +
            '<td><button class="btn btn-primary" data-artist-name = "' + a[i].name + '" onclick="suaInfor(event)"> Sửa </button>' +
            '<button class="btn btn-info" data-artist-name = "' + a[i].name + '" onclick = "xoaInfor(event)"> Xóa </button>' +
            '<button class="btn btn-warning myButton" data-artist-name = "' + a[i].name + '" onclick = "bangChiTiet(event)"> Chi tiết </button>  </td> </tr>'

    }
}


// Lấy videoID và thumbnail theo nghệ sĩ tương ứng  
function getInfor(json, currentArtist) {

    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];
    let anhVideo = [];
    // console.log(video);
    // console.log(ds[0].snippet.thumbnails.high.url);

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)      // Lấy id của video
        anhVideo.push(ds[i].snippet.thumbnails.high.url)     // Lấy url của thumbnail 
    }

    for (let j = 0; j < videoIDs.length; j++) {
        currentArtist.videoId.push(videoIDs[j]);
    }

    for (let j = 0; j < anhVideo.length; j++) {
        currentArtist.thumbnail.push(anhVideo[j]);
    }

    console.log('Video của ' + currentArtist.name, videoIDs)
    displayInfor();
}

function search() {
    document.getElementById('table-content').innerHTML = ''
    let input = document.getElementById("tim-kiem").value;
    console.log(input);
    let i = 0;

    while (i < a.length) {
        let currentArtist = a[i];
        // if ( currentArtist.name.toLowerCase().includes(input.toLowerCase()) ) {
        if (currentArtist.name.toLowerCase().search(input.toLowerCase()) >= 0) {
            document.getElementById('table-content').innerHTML +=
                '<tr> <th scope="row">' + (i + 1) + '</th> <td>' + currentArtist.name +
                '</td><td>' + currentArtist.tenThat +
                '</td><td>' + currentArtist.sinhNhat +
                '</td><td>' + currentArtist.nation +
                '</td><td>' + currentArtist.inFor +
                '</td><td>' + currentArtist.image +
                '</td><td>' + currentArtist.anhBackGround +
                '</td><td class = "vid-ids">' + currentArtist.videoId + '<br/>' +
                '</td><td class = "anh-vid">' +
                currentArtist.thumbnail +
                '<td><button class="btn btn-primary" data-artist-name = "' + currentArtist.name + '" onclick="suaInfor(event)"> Sửa </button>' +
                '<button class="btn btn-info" data-artist-name = "' + currentArtist.name + '" onclick = "xoaInfor(event)"> Xóa </button>' +
                '<button class="btn btn-warning" class = "MyButton" +  data-artist-name = "' + currentArtist.name + '" onclick = bangChiTiet(event)> Chi tiết </button>  </td> </tr>'

        }
        i++;

    }
}


function themNgheSi() {
    alert('Thêm thành công!');
    let name = document.getElementById('name').value
    let realName = document.getElementById('real-name').value
    let birthDay = document.getElementById('birthday').value
    let nation = document.getElementById('nation').value
    let image = document.getElementById('portrait').value
    let anhNen = document.getElementById('background').value
    let thongTin = document.getElementById('infor').value

    a.push({
        'name': name,
        'tenThat': realName,
        'sinhNhat': birthDay,
        'nation': nation,
        'inFor': thongTin,
        'image': '<img class="rounded" id="singer1-ava-boder"  src=" ' + image + '">',
        'anhBackGround': '<img class="rounded" id="singer1-cover-boder src=" ' + anhNen + '">',
        'videoId': [],
        'thumbnail': [],
    })

    // await getData()
    getDataCurrentArtist(a[a.length - 1])
    console.log(a[a.length - 1])

    // Xóa dữ liệu trong thanh input sau khi lưu xong
    document.getElementById('name').value = '';
    document.getElementById('real-name').value= '';
    document.getElementById('birthday').value= '';
    document.getElementById('nation').value= '';
    document.getElementById('portrait').value= '';
    document.getElementById('background').value= '';
    document.getElementById('infor').value= '';

    // for (let i = 0; i < a.length; i++) {
    //     localStorage.setItem(`artist${i + 1}`, JSON.stringify(a[i]))
    // }

}



function suaInfor(e) {
    let name = prompt('Bạn hãy nhập tên của ca sĩ:');
    let realName = prompt('Bạn hãy nhập tên nhật của ca sĩ:');
    let birthDay = prompt('Bạn hãy nhập sinh nhật của ca sĩ:');
    let thongTin = prompt('Bạn hãy nhập thông tin của ca sĩ: \n Ex: <p>Content</p>');
    let nation = prompt('Bạn hãy nhập quốc tịch của ca sĩ:');
    let image = prompt('Bạn hãy nhập link ảnh chân dung của ca sĩ :');
    let anhNen = prompt('Bạn hãy nhập link ảnh nền của ca sĩ :');
    for (let i = 0; i < a.length; i++) {
        if (e.target.dataset.artistName === a[i].name) {
            var viTri = i;
            console.log(viTri)
            a[i].name = name;
            a[i].tenThat = realName;
            a[i].sinhNhat = birthDay;
            a[i].nation = nation;
            a[i].inFor = thongTin;
            a[i].image = image;
            a[i].anhBackGround = anhNen;
            a[i].videoId = [];
            a[i].thumbnail = [];
        }
    }
    console.log(a);
    // Lấy dữ liệu cho ca sĩ vừa sửa
    getDataCurrentArtist(a[viTri]);
    displayInfor();

}

function xoaInfor(e) {
    for (let i = 0; i < a.length; i++) {
        if (e.target.dataset.artistName === a[i].name) {
            a.splice(i, 1);
            localStorage.removeItem(`artist${i + 1}`);
        }
    }
    displayInfor();
    console.log(e.target.dataset.artistName);

}

// Code dùng J-query
// function bangChiTiet(e) {
//     // Get the modal
//     let modal = document.getElementById("myModal");

//     // Get the button that opens the modal
//     // let btn = document.getElementById("myBtn");
//     // console.log(btn)
//     // Get the <span> element that closes the modal
//     let span = document.getElementsByClassName("close")[0];

//     // When the user clicks the button, open the modal 
//     $(document).on('click', ".btn", function () { modal.style.display = "block" })
//     // btn.onclick = function () {
//     //     modal.style.display = "block";
//     // }

//     // When the user clicks on <span> (x), close the modal
//     span.onclick = function () {
//         modal.style.display = "none";
//     }

//     // document.getElementById("id-video").innerHTML = '';
//     // document.getElementById("anh-video").innerHTML = '';

//     document.getElementById("content-expansion").innerHTML = '';

//     for (let i = 0; i < artist.length; i++) {
//         if (e.target.dataset.artistName === artist[i].name) {
//             // console.log(artist[i].videoId)
//             let listVideo = artist[i].videoId;
//             // console.log(listVideo.length)
//             for (let j = 0; j < listVideo.length; j++) {
//                 document.getElementById("content-expansion").innerHTML += '<tr> <th scope="row">' + (j + 1) + '</th>' + '<td>' + listVideo[j] + '</td>' + `<td id= anh-video${j} ` + '> </td> </tr>';
//             }

//             let listAnhVideo = artist[i].thumbnail;
//             for (let k = 0; k < listAnhVideo.length; k++) {
//                 document.getElementById('anh-video' + k).innerHTML += listAnhVideo[k];
//                 console.log(listAnhVideo[k])
//             }
//         }
//     }

//     //Get data from class vid-ids ,  anh-vid
//     console.log(e.target.dataset.artistName)


//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function (e) {
//         if (e.target == modal) {
//             modal.style.display = "none";
//         }
//     }
// }



function bangChiTiet(e) {

    for (let i = 0; i < a.length; i++) {
        localStorage.setItem(`artist${i + 1}`, JSON.stringify(a[i]))
    }

    // Get the modal
    // console.log(artist)
    console.log(a)
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    // $(document).on('click', ".btn", function () { modal.style.display = "block" })


    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    document.getElementById("content-expansion").innerHTML = '';

    for (let i = 0; i < a.length; i++) {
        if (e.target.dataset.artistName === a[i].name) {
            // console.log(artist[i].videoId)
            let listVideo = a[i].videoId;
            // console.log(listVideo.length)
            for (let j = 0; j < listVideo.length; j++) {
                document.getElementById("content-expansion").innerHTML += '<tr> <th scope="row">' + (j + 1) + '</th>' + '<td>' + listVideo[j] + '</td>' + `<td id= anh-video${j} ` + '> </td> </tr>';
            }

            let listAnhVideo = a[i].thumbnail;
            for (let k = 0; k < listAnhVideo.length; k++) {
                document.getElementById('anh-video' + k).innerHTML += '<td><img class="anh-thumbnail"  src=" ' + listAnhVideo[k] + '"</td>' ;
                console.log(listAnhVideo[k])
            }
        }
    }

    //Get data from class vid-ids ,  anh-vid
    console.log(e.target.dataset.artistName)

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    }
}


function themTable() {
    // // Get the modal
    let modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";

    // Get the <span> element that closes the modal
    let span2 = document.getElementsByClassName("close2")[0];
    let submit = document.getElementById("submit-add");

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
        modal2.style.display = "none";
    }

    submit.onclick = function () {
        modal2.style.display = "none";
        themNgheSi();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
}


