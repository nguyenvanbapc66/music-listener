function getInformation() {

    let singerName = document.getElementById("singer").innerText;
    console.log(singerName)
    getTrendingVideos(singerName);

}

function getTrendingVideos(name) {

    let xhr = new XMLHttpRequest();
    let keyword = '20 bài hát trending của' + name + ' Official Music Video';

    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
        keyword + "&type=video&key=AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4"

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getVideo(this.responseText);
        }
    }

    xhr.send();
}

function getVideo(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)
    }

    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos").innerHTML +=
            ` <iframe title='YouTube video player' width='200' height='200' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
            `frameborder='0' allowFullScreen> </iframe> `

    }
}

// // https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId=UClyA28-01x4z60eWQ2kiNbA&part=snippet,id&order=date&maxResults=20
// https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&forUsername=OnlyC&key=AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4
