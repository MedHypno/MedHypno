
  document.getElementById('book-cta').addEventListener('click', function(e){
    e.preventDefault();
    Calendly.initPopupWidget({ url: 'https://calendly.com/m-metheni/30min' });
  });
