export const localeStorage = () => {
  const KEY = 'cv-annaAzh'

  const getSavedDataFromLocaleStorage = () => {
    const data = JSON.parse(localStorage.getItem(KEY) || '{}')

    for (const [key, value] of Object.entries(data)) {
      const element = document.querySelector(`.editable[data-key="${key}"]`)

      if (element) {
        element.textContent = value
      }
    }
  }

  const getItemLocaleStorage = key => {
    const value = localStorage.getItem(KEY)

    if (!value) {
      return {}
    } else {
      return JSON.parse(value || '{}')
    }
  }

  const setItemLocaleStorage = (key, value) => {
    const data = getItemLocaleStorage(KEY)
    data[key] = value
    localStorage.setItem(KEY, JSON.stringify(data))
  }

  return { getItemLocaleStorage, setItemLocaleStorage, getSavedDataFromLocaleStorage }
}
