function getInformation1() {

    let singerName = document.getElementById("singer1").innerText;
    console.log(singerName)
    // document.getElementById("20-songs").innerText += ' '+ singerName; 
    getTrendingVideos(singerName);

}

function getInformation2() {

    let singerName = document.getElementById("singer2").innerText;
    getTrendingVideos(singerName);

}

function getInformation3() {

    let singerName = document.getElementById("singer3").innerText;
    getTrendingVideos(singerName);

}

function getInformation4() {

    let singerName = document.getElementById("singer4").innerText;
    getTrendingVideos(singerName);

}



function getTrendingVideos(name) {

    let xhr = new XMLHttpRequest();
    let keyword = '20 bài hát trending của' + name + ' Official Music Video';

    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        keyword + "&type=video&key=AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4"

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if(name === 'Sơn Tùng M-TP'){
            getVideo1(this.responseText);
            }
            else if(name === 'Soobin Hoàng Sơn'){
                getVideo2(this.responseText);
            }
            else if(name === 'Phan Mạnh Quỳnh'){
                getVideo3(this.responseText);
            }
            else if(name === 'Binz'){
                getVideo4(this.responseText);
            }
        }
    }

    xhr.send();
}

function getVideo1(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)
    }
    
    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos1").innerHTML +=

            ` <iframe title='YouTube video player' width='200' height='200' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
            `frameborder='0' allowFullScreen> </iframe> `

    }
}

function getVideo2(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)
    }

    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos2").innerHTML +=

            ` <iframe title='YouTube video player' width='200' height='200' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
            `frameborder='0' allowFullScreen> </iframe> `

    }
}

function getVideo3(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)
    }

    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos3").innerHTML +=

            ` <iframe title='YouTube video player' width='200' height='200' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
            `frameborder='0' allowFullScreen> </iframe> `

    }
}

function getVideo4(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)
    }

    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos4").innerHTML +=

            ` <iframe title='YouTube video player' width='200' height='200' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
            `frameborder='0' allowFullScreen> </iframe> `

    }
}