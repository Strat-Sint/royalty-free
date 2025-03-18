const accordion = document.querySelectorAll('.body-container');

accordion.forEach(acc => {
  acc.addEventListener('click', () => {
    const bodyContainer = acc.closest('.body-container');
    const bodyText = bodyContainer.querySelectorAll('.body-text');
    const icons = acc.querySelectorAll('i');


    bodyText.forEach(bt => {
      if (bt.style.display === 'block') {
        bt.style.display = 'none';
      } else {
        bt.classList.toggle('open');
      }
    })
    
    icons.forEach(icon => {
      icon.classList.toggle('fa-plus');
      icon.classList.toggle('fa-minus');
    });

  });
})


