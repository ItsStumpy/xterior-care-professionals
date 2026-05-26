const allDetails = document.querySelectorAll('details[name="faq"]');

allDetails.forEach(details => {
  const summary = details.querySelector('summary');
  const content = [...details.children].filter(el => el.tagName !== 'SUMMARY');

  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'overflow:hidden; height:0; transition: height 0.35s ease;';
  content.forEach(el => wrapper.appendChild(el));
  details.appendChild(wrapper);

  details.removeAttribute('open');
  details._isOpen = false;
  details._wrapper = wrapper;

  summary.addEventListener('click', e => {
    e.preventDefault();

    if (details._isOpen) {
      wrapper.style.height = wrapper.scrollHeight + 'px';
      requestAnimationFrame(() => {
        wrapper.style.height = '0';
      });
      details._isOpen = false;
      details.removeAttribute('open');
    } else {
      allDetails.forEach(other => {
        if (other !== details && other._isOpen) {
          other._wrapper.style.height = other._wrapper.scrollHeight + 'px';
          requestAnimationFrame(() => {
            other._wrapper.style.height = '0';
          });
          other._isOpen = false;
          other.removeAttribute('open');
        }
      });

      details.setAttribute('open', '');
      const targetHeight = wrapper.scrollHeight + 'px';
      wrapper.style.height = '0';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapper.style.height = targetHeight;
        });
      });
      details._isOpen = true;
    }
  });
});