export const modalWindow = () => {
  const modal = document.querySelector('.modal')
  const overlay = document.querySelector('.overlay')

  function showModal() {
    overlay.classList.add('show')
    overlay.classList.remove('hide')
    modal.classList.add('show')
    modal.classList.remove('hide')
  }

  function hideModal(currentElement, currentKey) {
    overlay.classList.remove('show')
    overlay.classList.add('hide')
    modal.classList.remove('show')
    modal.classList.add('hide')

    if (currentElement) currentElement.classList.remove('isEditing')
    currentElement = null
    currentKey = null
  }

  return { showModal, hideModal }
}
