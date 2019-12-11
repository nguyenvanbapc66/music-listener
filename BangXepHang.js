getTrending();

function getTrending(t) {
    let xhr = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&regionCode=vn&key=AIzaSyCepC9SX6DixNi4cvc81jr266aaFxQfS2w"

    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            showTrend(this.responseText);

        }
    }
    xhr.send();
}


function showTrend(json) {
    let trend = JSON.parse(json);
    let item = trend.items;
    let bxh = document.getElementById("BangXepHang");
    let s = ''

    for (let i = 0; i < item.length; i++) {
        let bai = item[i];
        let snippet = bai.snippet;
        let title = snippet.title;
        let thumbnails = snippet.thumbnails;
        let defthumb = thumbnails.high;
        let url = defthumb.url;


        s += `<!-- video thumbnail  -->
        <div class="videothumbnail">
            <!-- add tooltip -->
            <span data-toggle="tooltip" data-placement="top" title="Click to listen on youtube">

                <!-- an vao toggle ra modal  -->
                <!-- them id vao the img  -->
                <img class="thumbnail vungChon"  data-toggle="modal" data-target="#myModal" src="${url}" alt="${title}" data-id="${bai.id}">
                </span>
                <!-- thay description cua thumbnail  -->
                <span class="desc vungChon" target="_top" data-toggle="modal" data-target="#myModal" data-id="${bai.id}" title="${title}">${title}</span>

        </div>`



    }
    bxh.innerHTML = s;
    $('[data-toggle="tooltip"]').tooltip();
}



//Play youtube in modal style
$(window).on("load", function() {

    let $videoSrc;
    $(document).on('click', '.vungChon', (function() {
        $videoSrc = $(this).data("id");
    }));


    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function() {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function() {
        // a poor man's stop video


        $("#video").attr('src', $videoSrc);


    })

});

// function cua button to top 
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//function back

function goBack() {
    window.history.back();
}