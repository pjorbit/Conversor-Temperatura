const options = document.querySelectorAll('.dropdown-content a');

options.forEach(option => {
  option.addEventListener('click', e => {
    e.preventDefault();
    const value = e.target.getAttribute('value');
    // execute a ação correspondente com o valor selecionado
  });
});