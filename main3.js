// Bootstrap JS scripts
document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('tryOnModal1'));
    var myModal2 = new bootstrap.Modal(document.getElementById('tryOnModal2'));
    var myModal3 = new bootstrap.Modal(document.getElementById('tryOnModal3'));

    var tryOnButton1 = document.getElementById('tryOnButton1');
    var tryOnButton2 = document.getElementById('tryOnButton2');
    var tryOnButton3 = document.getElementById('tryOnButton3');

    tryOnButton1.addEventListener('click', function () {
        myModal.show();
    });

    tryOnButton2.addEventListener('click', function () {
        myModal2.show();
    });

    tryOnButton3.addEventListener('click', function () {
        myModal3.show();
    });
});
