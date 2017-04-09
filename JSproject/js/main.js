(function () {
  var toggle = document.getElementById('header-nav-toggle')
  var nav = document.getElementById('header-nav');

  toggle.className = 'is-visible';
  nav.className = 'is-hidden';

  toggle.addEventListener('click', function () {
    if (nav.className === 'is-hidden') {
      nav.className = '';
    } else {
      nav.className = 'is-hidden';
    }
  })
})();

//SLIDER

var slideIndex = 0;

var next = document.getElementsByClassName("next")[0].onclick = function plusSlides() {
  showSlides(slideIndex += 1);

  clearInterval(auto);
  setTimeout(function () {
    auto = window.setInterval(autoPlay, 3000);
  }, 5000);
};


var prev = document.getElementsByClassName("prev")[0].onclick = function minusSlides() {
  showSlides(slideIndex -= 1);

  clearInterval(auto);
  setTimeout(function () {
    auto = window.setInterval(autoPlay, 3000);
  }, 5000);
};


function showSlides() {
  var slides = document.getElementsByClassName("slide");


  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}

function autoPlay() {
  slideIndex++;
  showSlides();
}

var auto = window.setInterval(autoPlay, 3000);

//icons
var service_item_img = document.querySelectorAll(".service_item img");
for (var i = 0; i < service_item_img.length; i++) {
  service_item_img[i].addEventListener("mouseover", function () {
    this.style.width = 48 + "px";
    this.style.height = 44 + "px";
  });
  service_item_img[i].addEventListener("mouseout", function () {
    this.style.width = 43 + "px";
    this.style.height = 40 + "px";
  });
}



var how_we_do_img = document.querySelectorAll(".how_we_do_item img");
for (var i = 0; i < how_we_do_img.length; i++) {
  how_we_do_img[i].addEventListener("mouseover", function () {
    this.style.width = 50 + "px";
    this.style.height = 50 + "px";
  });
  how_we_do_img[i].addEventListener("mouseout", function () {
    this.style.width = 45 + "px";
    this.style.height = 45 + "px";
  });
}

//фильтр для портфолио
var portfolio_list = document.querySelectorAll(".portfolio_list li a");
var works_item = document.querySelectorAll(".works_item");
portfolio_list[0].addEventListener("click", function () {
  for (var i = 0; i < works_item.length; i++) {
    works_item[i].style.display = "block";
  }
})
portfolio_list[1].addEventListener("click", function () {
  for (var i = 0; i < works_item.length; i++) {
    works_item[i].style.display = "block";
  }
  for (var i = 0; i < works_item.length; i++) {
    if (!works_item[i].classList.contains("web_design")) {
      works_item[i].style.display = "none";
    }
  }
})
portfolio_list[2].addEventListener("click", function () {
  for (var i = 0; i < works_item.length; i++) {
    works_item[i].style.display = "block";
  }
  for (var i = 0; i < works_item.length; i++) {
    if (!works_item[i].classList.contains("graphic_design")) {
      works_item[i].style.display = "none";
    }
  }
})
portfolio_list[3].addEventListener("click", function () {
  for (var i = 0; i < works_item.length; i++) {
    works_item[i].style.display = "block";
  }
  for (var i = 0; i < works_item.length; i++) {
    if (!works_item[i].classList.contains("photography")) {
      works_item[i].style.display = "none";
    }
  }
})
portfolio_list[4].addEventListener("click", function () {
  for (var i = 0; i < works_item.length; i++) {
    works_item[i].style.display = "block";
  }
  for (var i = 0; i < works_item.length; i++) {
    if (!works_item[i].classList.contains("illustration")) {
      works_item[i].style.display = "none";
    }
  }
})


//счетчик

 var olso = true;
    document.addEventListener('scroll', function () {
        var wh = window.pageYOffset + window.innerHeight;
        var gh = document.getElementById("hdoit").offsetTop;

        if (wh > gh) {

            if (olso) {
                chet();
                olso = false;
            }
        }

    });

    function chet() {
        var a = document.getElementsByClassName("numbers");
        for (var i = 0; i < a.length; i++) {

            var c = a[i];
            var b = a[i].innerHTML;

            printNumbersInterval(c, b);

            function printNumbersInterval(c, b) {
                var i = 0;
                var timerId = setInterval(function () {

                    if (i > b) {
                        i = b;
                    }
                    c.innerHTML = parseInt(i);
                    if (i == b) clearInterval(timerId);
                    i += b / 300;
                }, 10);
            }
        }

    }

    var can = true;
    document.addEventListener('scroll', function () {
        var wh = window.pageYOffset + window.innerHeight;
        var gh = document.getElementById("team-card").offsetTop;

        if (wh > gh) {

            if (can) {
                var canvas = document.getElementsByTagName('canvas');

                for (var i = 0; i < canvas.length; i++) {
                    progressBar(canvas[i]);
                }
                can = false;
            }
        }

    });

    // load the canvas
    function progressBar(canvasId) {
        var degreesCall;

        var canvas = canvasId;
        var ctx = canvas.getContext('2d');

        var cWidth = canvas.width;
        var cHeight = canvas.height;
        var progressColor = '#ffe600';
        var circleColor = '#fff';
        var rawPerc = canvas.getAttribute('data-perc');
        var perc = parseInt(rawPerc);
        var degrees = 0;
        var endDegrees = (360 * perc) / 100;

        var lineWidth = 7;

        // console.log(canvasId + ' ' + perc);

        function getDegrees() {
            if (degrees < endDegrees) {
                degrees++;
            } else {
                clearInterval(degreesCall);
            }

            drawProgressBar();
        }

        function drawProgressBar() {
            //clear the canvas after every instance
            ctx.clearRect(0, 0, cWidth, cHeight);

            // let's draw the background circle
            ctx.beginPath();
            ctx.strokeStyle = circleColor;
            ctx.lineWidth = lineWidth - 1;
            ctx.arc(cHeight / 2, cWidth / 2, cWidth / 3, 0, Math.PI * 2, false);
            ctx.stroke();
            // var radians = 0; // We need to convert the degrees to radians

            var radians = degrees * Math.PI / 180;
            // let's draw the actual progressBar
            ctx.beginPath();
            ctx.strokeStyle = progressColor;
            ctx.lineWidth = lineWidth;
            ctx.arc(cHeight / 2, cWidth / 2, cWidth / 3, 0 - 90 * Math.PI / 180, radians - 90 * Math.PI / 180, false);
            ctx.stroke();

            // let's get the text
            ctx.fillStyle = progressColor;
            ctx.font = '300 30px Oswald';
            var outputTextPerc = Math.floor(degrees / 360 * 100) + '%';
            var outputTextPercWidth = ctx.measureText(outputTextPerc).width;
            ctx.fillText(outputTextPerc, cWidth / 2 - outputTextPercWidth / 2, cHeight / 2 + 10);
        }

        degreesCall = setInterval(getDegrees, 10 / (degrees - endDegrees));
    }

    function team() {
        var a = document.getElementsByClassName("team-j");
        var b = document.getElementsByClassName("team-card-j");
        var c = document.getElementsByClassName("t-close");
        for (var i = 0; i < a.length; i++) {
            a[i].addEventListener('click', function () {

                for (var j = 0; j < b.length; j++) {
                    a[j].classList.remove("go");
                    b[j].classList.remove("show");
                    if (this == a[j]) {
                        b[j].classList.add("show");
                        this.classList.add("go");
                    } else {

                    }
                }
            });
        }

        for (var g = 0; g < c.length; g++) {
            c[g].addEventListener('click', function () {
                for (var k = 0; k < b.length; k++) {
                    b[k].classList.remove("show");
                    a[k].classList.remove("go");
                }
            });
        }
    }
    team();

        // slider clients
    var clients_slider = document.querySelectorAll(".clients_slider");
    function slide_clients() {
        for(var i = 0; i < clients_slider.length; i++){
            if(clients_slider[i].classList.contains("vision_visible")){
                //проверка для последнего слайда
                if(i == 1){
                    clients_slider[i].classList.toggle("vision_visible");
                    clients_slider[i].classList.toggle("vision_none");
                    clients_slider[0].classList.toggle("vision_none");
                    clients_slider[0].classList.toggle("vision_visible");
                    break;
                }
                else{
                    clients_slider[i].classList.toggle("vision_visible");
                    clients_slider[i].classList.toggle("vision_none");
                    clients_slider[i + 1].classList.toggle("vision_none");
                    clients_slider[i + 1].classList.toggle("vision_visible");
                    break;
                }

            }
        }
    }
    var clients_slide = setInterval(slide_clients, 3000);

    //client comments
    var client_comment_item = document.querySelectorAll(".client_comment_item");
    var client_comment_controls = document.querySelectorAll(".client_comment_controls");

    client_comment_controls[0].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 0){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[1].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 1){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[2].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 2){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    })
    client_comment_controls[3].addEventListener("click", function () {
        for (var i = 0; i < client_comment_item.length; i++){
            if(i == 3){
                client_comment_item[i].classList.remove("vision_none")
                client_comment_item[i].classList.add("vision_visible")
            }
            else {
                client_comment_item[i].classList.remove("vision_visible")
                client_comment_item[i].classList.add("vision_none")
            }
        }
    });
        var input_name = document.querySelector("input[type='text']");
    input_name.addEventListener("keypress", function () {
        if(/[^A-Za-z]/.test(input_name.value)){
            input_name.style.borderColor = "red";
        }
        else {
            input_name.style.borderColor ="#fff"
        }
    });
    var input_email = document.querySelector("input[type='email']");
    input_email.addEventListener("keypress", function () {
        if(/[^A-Za-z0-9@_.]/.test(input_email.value)){
            input_email.style.borderColor ="red";
        }
        else {
            input_email.style.borderColor = "#fff";
        }
    });
    var input_subject = document.querySelectorAll("input[type='text']")[1];
    input_subject.addEventListener("keypress", function () {
        if(/[^A-Za-z0-9]/.test(input_subject.value)){
            input_subject.style.borderColor ="red";
        }
        else {
            input_subject.style.borderColor = "#fff";
        }
    });

    var ancors = document.querySelectorAll("a"),
        speed = 0.5;  
    for (var i = 0; i < ancors.length; i++) {
        ancors[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset,  // прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  
            t = document.querySelector(hash).getBoundingClientRect().top,  
                start = null;
            requestAnimationFrame(step);  
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  
                }
            }
        }, false);
    }