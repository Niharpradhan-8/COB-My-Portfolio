 var typed = new Typed('#element', {
    strings: ['Content Writer',' Java Programmer','Web Developer'],
    typeSpeed: 50,
 });
const spans = document.querySelectorAll('.progress span');
spans.forEach((span) => {
  span.style.width = span.dataset.width;
  span.innerHTML = span.dataset.width;
})