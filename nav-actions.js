window.onload = function(){
  var el = document.getElementsByClassName('topnav');
  el[0].addEventListener('click', function () {
    console.log(this.classList)
    if (this.classList.contains('topnav') && !this.classList.contains('responsive')) {
      this.classList.add('responsive');
    } else {
      this.classList.remove('responsive');
    }
  });
}
