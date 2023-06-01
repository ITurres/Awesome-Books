const navbarLinks = document.querySelectorAll('.my-navbar__link');
const listSection = document.querySelector('#books-list');
const addNewBookSection = document.querySelector('#add-new-book');
const contactSection = document.querySelector('#contact');

const changeSectionsStyle = (display1, display2, display3) => {
  listSection.style.display = display1;
  addNewBookSection.style.display = display2;
  contactSection.style.display = display3;
};

const checkLinkId = (linkId) => {
  if (linkId === navbarLinks[0].id) {
    changeSectionsStyle('block', 'none', 'none');
  } else if (linkId === navbarLinks[1].id) {
    changeSectionsStyle('none', 'flex', 'none');
  } else {
    changeSectionsStyle('none', 'none', 'block');
  }
};

navbarLinks.forEach((link) => {
  link.addEventListener('click', () => checkLinkId(link.id));
});