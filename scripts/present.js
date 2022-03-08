var to = 'to You!';
var gift_image_url = 'gift.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function(e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-open');
    }, false);
    var closeCard = document.getElementById("close");
    closeCard.onclick = function() {
        document.getElementById('card').classList.remove('card-open');
    }



    nametag.innerText = to;
}

init();