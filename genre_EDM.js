//Play youtube in modal style
$(document).ready(function() {

    // Gets the video src from the data-id on each img tag

    let $videoSrc;
    // $('.vungChon').click(function() {
    //     $videoSrc = $(this).data("id");
    // });
    // console.log($videoSrc);
    $(document).on('click', '.vungChon', function() {
        $videoSrc = $(this).data('id');
    });


    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
})

function getVideo() {
    let xhr = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=high%20trip%20drop&type=video&key=AIzaSyC25wlU4AKd7qLgIVmugro1ZWZYbjUm4ZI&fbclid=IwAR1qnautC1LOm8tNUtC1peKRzckeC9xnObcmMlR0Dj8X_xFdEfw87MzBbKo";
    xhr.open("GET", url);
    xhr.onreadystatechange = function(result) {
        if (this.readyState === 4 && this.status === 200) {
            let object = JSON.parse(this.responseText);
            // console.log(object);
            let image = '';
            let name = '';
            let id = '';
            let total = '';
            for (let j = 0; j < object.items.length; j++) {
                id = object.items[j].id.videoId;
                name = object.items[j].snippet.title;
                image = object.items[j].snippet.thumbnails.high.url;
                total += `<div class="videothumbnail">
                            <span data-toggle="tooltip" data-placement="top" title="Click to listen on youtube">

                                <img class="thumbnail vungChon" data-toggle="modal" data-target="#myModal" src="${image}" alt="${name}" data-id="${id}">
                                <span class="desc vungChon" target="_top" data-toggle="modal" data-target="#myModal" data-id="${id}">${name}</span>

                            </span>
                        </div>`;
            }
            document.getElementById("txtvideo").innerHTML = total;
            $('[data-toggle="tooltip"]').tooltip();

        }
    }
    xhr.send();
}
getVideo();

function goBack() {
    window.history.back();
}
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