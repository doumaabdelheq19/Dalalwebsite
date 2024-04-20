 
 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var callButtons = document.querySelectorAll('.call-button');
    callButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var phoneNumber = button.textContent.trim().replace(/-/g, '');  
            window.location.href = 'tel:' + phoneNumber;
        });
    });