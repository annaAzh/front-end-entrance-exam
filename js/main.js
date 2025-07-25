import { localeStorage } from './locale-storage.js'
import { createRipple } from './ripple.js'
import { createPDF } from './create-to-pdf.js'
import { editContent } from './edit-content.js'

const editable = document.querySelectorAll('.editable')

const { getSavedDataFromLocaleStorage } = localeStorage()

editable.forEach((el, i) => (el.dataset.key = i))
getSavedDataFromLocaleStorage()
editContent()
;[
  ...document.querySelectorAll('.section'),
  document.querySelector('.download'),
  document.querySelector('.contact')
].forEach(section => {
  if (section) {
    section.addEventListener('click', createRipple)
  }
})

const downloadButton = document.querySelector('.download')
downloadButton.addEventListener('click', createPDF)
