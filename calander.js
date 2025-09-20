
  document.getElementById('book-cta').addEventListener('click', function(e){
    e.preventDefault();
    Calendly.initPopupWidget({ url: 'https://calendly.com/m-metheni/30min?hide_event_type_details=1&background_color=6BA58B&text_color=6BA58B&primary_color=6BA58B' });
  });