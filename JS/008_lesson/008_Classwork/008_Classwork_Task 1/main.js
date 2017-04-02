window.onload = function () {
    var btn = document.getElementById('btn');
    var divs = document.querySelectorAll('div');
    var counter = 0;
    btn.onclick = function () {


        if (counter > 0) {
            divs[counter - 1].style.backgroundColor = "green";

        } else if (counter == 0) {
            divs[divs.length - 1].style.backgroundColor = "green"
        }
        divs[counter].style.backgroundColor = "red";
        counter++;

        if (counter > divs.length - 1) {
            counter = 0;
        }




    }
}