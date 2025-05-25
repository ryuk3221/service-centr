import '../scss/style.scss'

//скрипты для выпадашек в секции "Вопросы"
if (document.querySelector('.questions')) {
  const section = document.querySelector('.questions');
  const items = section.querySelectorAll('.questions__item');

  section.addEventListener('click', event => {
    const parent = event.target.closest('.questions__item');
    const content = parent.querySelector('.questions__item-text');

    items.forEach(item => {
      if (item == parent) {
        parent.classList.toggle('item--open');

        if (parent.classList.contains('item--open')) {
          content.style.height = content.scrollHeight + 'px';
        } else {
          content.style.height = '0px';
        }
      } else {
        item.classList.remove('item--open');
        item.querySelector('.questions__item-text').style.height = '0px';
      }
    });
  });
}