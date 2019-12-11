
// API key : AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4

function sendRequestToYoutube() {
    let xhr = new XMLHttpRequest();
    let keyword = '';
    keyword = document.getElementById("search-box").value; //Lay value trong input

    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        keyword + "&type=video&key=AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4"

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText)
            let a = JSON.parse(this.responseText);
            console.log(a);
            console.log(a.items[0].id.videoId);
            getVideo(this.responseText);
            document.getElementById("search-box").value = '';  // Xoa value trong input
    }
}

    xhr.send();
}

function getVideo(json) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];

    for(let i = 0 ;i < ds.length ; i++){
        videoIDs.push(ds[i].id.videoId)  
    }
 
    for (let i = 0; i < videoIDs.length; i++) {
        document.getElementById("list-videos").innerHTML +=
        ` <iframe title='YouTube video player' width='300' height='300' src="https://www.youtube.com/embed/` + videoIDs[i] + `"` +
                `frameborder='0' allowFullScreen> </iframe> ` 

    }

}
