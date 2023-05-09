

function autoType(elementClass, typingSpeed, wordsArray) {
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block",
      "height": thhis.height() + "px",
      "max-height": thhis.height() + "px" // istediğiniz max height değerini buraya girebilirsiniz
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");

    var currentWordIndex = 0;

    thhis.text("#");
    setTimeout(function () {
      thhis.css("opacity", 1);
      thhis.prev().removeAttr("style");

      var typeWord = function (word) {
        var text = word.split('');
        var amntOfChars = text.length;
        var newString = "#";

        for (var i = 0; i < amntOfChars; i++) {
          (function (i, char) {
            setTimeout(function () {
              if (char !== " ") {
                newString += char;
                thhis.text(newString);
              }
            }, i * typingSpeed);
          })(i + 1, text[i]);
        }

        setTimeout(function () {
          deleteWord(word);
        }, amntOfChars * typingSpeed + 1000);
      }

      var deleteWord = function (word) {
        var text = word.split('');
        var amntOfChars = text.length;

        for (var i = amntOfChars - 1; i >= 0; i--) {
          (function (i) {
            setTimeout(function () {
              var newText = text.slice(0, i).join('');
              thhis.text("#" + newText);
            }, (amntOfChars - i) * typingSpeed);
          })(i);
        }

        setTimeout(function () {
          currentWordIndex++;
          if (currentWordIndex >= wordsArray.length) {
            currentWordIndex = 0;
          }
          typeWord(wordsArray[currentWordIndex]);
        }, amntOfChars * typingSpeed + 1000);
      }

      typeWord(wordsArray[currentWordIndex]);

    }, 1500);
  }

  $(document).ready(function () {

    function showMenu() {
document.getElementById("menu1").style.display = "block";
}

function hideMenu() {
document.getElementById("menu1").style.display = "none";
}


document.getElementById("menu-toggle").addEventListener("click", function() {
if (document.getElementById("menu1").style.display === "none") {
  showMenu();
} else {
  hideMenu();
}
});

document.addEventListener("click", function(event) {
if (!event.target.closest("#menu1") && !event.target.closest("#menu-toggle")) {
  hideMenu();
}
});

var modal = document.createElement('div');
modal.className = 'modal';
document.body.appendChild(modal);

var modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.appendChild(modalContent);

var video = document.createElement('video');

video.controls = true;
video.autoplay = true;
video.innerHTML = '<source src="source/tanitim.mp4" type="video/mp4">';
modalContent.appendChild(video);

var playButton = document.getElementById('play-video');
playButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

var modal = document.querySelector('.modal');
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  }
});

    autoType(".type-js", 100, [ "kolay", "hızlı", "güvenli", "entegrasyon"]);
    var loginn = document.getElementById("loginn");
    var myDiv = $('.changer');
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= myDiv.offset().top - $(window).height()) {

        myDiv.removeClass("NavHeader_header__E_bAn NavHeader_headerHeight__Qjw8M NavHeader_headerNoBanner__rLYse NavHeader_darkNav__Y6ejZ NavHeader_transparentNavBar__bfv1x");

        myDiv.addClass("NavHeader_header__E_bAn NavHeader_headerHeight__Qjw8M NavHeader_headerNoBanner__rLYse NavHeader_darkNav__Y6ejZ");

        loginn.style.color = "black";
      }
      if ($(window).scrollTop() == 0) {
        myDiv.removeClass("NavHeader_header__E_bAn NavHeader_headerHeight__Qjw8M NavHeader_headerNoBanner__rLYse NavHeader_darkNav__Y6ejZ");
        myDiv.addClass("NavHeader_header__E_bAn NavHeader_headerHeight__Qjw8M NavHeader_headerNoBanner__rLYse NavHeader_darkNav__Y6ejZ NavHeader_transparentNavBar__bfv1x");
        loginn.style.color = "white";

      }



    });

  });

  var params = new URLSearchParams(window.location.search);
if (params.get('b') === 'ok') {
var messageDiv = document.createElement('div');
messageDiv.innerHTML = 'Başvurunuz alınmıştır.Teşekkürler';
messageDiv.style.position = 'fixed';
messageDiv.style.top = '10%';
messageDiv.style.left = '50%';
messageDiv.style.transform = 'translate(-50%, -50%)';
messageDiv.style.width = '100%';
messageDiv.style.zIndex = '9999';
messageDiv.style.padding = '10px';
messageDiv.style.backgroundColor = '#4caf50';
messageDiv.style.color = '#fff';
messageDiv.style.textAlign = 'center';
messageDiv.style.fontSize = '18px';
messageDiv.style.fontWeight = 'bold';

document.body.appendChild(messageDiv);

setTimeout(function() {
  messageDiv.parentNode.removeChild(messageDiv);
}, 3000);
}
