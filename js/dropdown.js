function openDropdown(dropDownElement) {
  const texts = dropDownElement.childNodes[3]
  const chevron = dropDownElement.childNodes[1].childNodes[1]
  if (dropDownElement.classList[1] === 'open') {
    texts.style = ''
    dropDownElement.style = ''
    chevron.style = ''
    return dropDownElement.classList.remove('open')
  } else {
    texts.style.opacity = '1'
    texts.style.top = '4.5rem'
    texts.style.display = 'block'
    texts.style.height = 'auto'
    chevron.style.transform = 'rotate(-180deg)'
    dropDownElement.style.marginBottom = `${texts.clientHeight}px`
    dropDownElement.classList.add('open')
  }
}
