const tabsBtn = document.querySelectorAll('.tab-countries__link');
const tabsItems = document.querySelectorAll('.tab-countries__tabcontent');

const onButtonClick = (evt) => {
  evt.preventDefault();
  const tabId = evt.target.getAttribute('data-tab');
  const currentTab = document.querySelector(tabId);

  if (!evt.target.classList.contains('tab-countries__link--active')) {
    tabsBtn.forEach(item => item.classList.remove('tab-countries__link--active'));
    tabsItems.forEach(item => item.classList.remove('tab-countries__tabcontent--active'));
    evt.target.classList.add('tab-countries__link--active');
    currentTab.classList.add('tab-countries__tabcontent--active');
  }
}

tabsBtn.forEach(item => item.addEventListener('click', onButtonClick));

document.querySelector('.tab-countries__link').click();
