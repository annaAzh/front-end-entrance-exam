import { modalWindow } from './modal-window.js'
import { localeStorage } from './locale-storage.js'

export const editContent = () => {
  const closeBtn = document.querySelector('.close')
  const input = document.querySelector('.modal-input')
  const saveBtn = document.querySelector('.save-btn')

  const { hideModal, showModal } = modalWindow()
  const { setItemLocaleStorage } = localeStorage()

  let currentKey = null
  let currentElement = null

  document.body.addEventListener('click', e => {
    const element = e.target.closest('.editable')
    if (!element) {
      return
    }
    currentKey = element.dataset.key
    currentElement = element
    input.value = element.textContent
    element.classList.add('isEditing')
    showModal()
  })

  closeBtn.addEventListener('click', () => {
    hideModal(currentElement, currentKey)
  })

  saveBtn.addEventListener('click', () => {
    if (!currentKey) return

    const newValue = input.value.trim()
    setItemLocaleStorage(currentKey, newValue)
    currentElement.textContent = newValue

    hideModal(currentElement, currentKey)
  })
}
