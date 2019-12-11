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

function goBack() {
    window.history.back();
}

function goForward() {
    window.history.forward();
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
//add tooltip
$('[data-toggle="tooltip"]').tooltip();