import sidenotes from './sidenotes';

sidenotes();

// TODO: move to toggleFootnoteImages
// eslint-disable-next-line no-undef
document.addEventListener(
  'click',
  (e) => {
    if (e.target.matches('section.footnotes figure')) {
      const el = e.target.firstChild;
      if (el.classList.contains('show')) {
        el.classList.remove('show');
      } else {
        el.classList.add('show');
      }
    }
  },
  false
);
