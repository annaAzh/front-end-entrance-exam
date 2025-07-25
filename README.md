# 🚀 Front-End Entrance Exam — CV

## 📋 Описание

Этот проект представляет собой веб-страницу с интерактивным **резюме**, сверстанную по шаблону. Страница позволяет:

- редактировать текстовые элементы;
- скачать резюме в формате **PDF**;
- взаимодействовать с элементами с помощью **CSS-анимаций** и **эффекта Material Wave**;
- сохранять изменения с помощью **localStorage**, чтобы не потерять данные при обновлении страницы.

## Проект создан с использованием **HTML**, **CSS** и **Vanilla JavaScript** без фреймворков. В качестве сборщика используется **Vite**.

## 🚀 Демо

🔗 [Открыть демо на GitHub Pages](https://annaazh.github.io/front-end-entrance-exam/)

---

## 📦 Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/annaAzh/front-end-entrance-exam.git
cd front-end-entrance-exam
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите локальный сервер:

```bash
npm run dev
```

---

## 🛠️ Скрипты

| Скрипт               | Описание                                   |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Запуск проекта в режиме разработки         |
| `npm run build`      | Сборка проекта в папку `dist`              |
| `npm run preview`    | Просмотр собранной версии                  |
| `npm run lint`       | Проверка кода с помощью ESLint             |
| `npm run lint-fix`   | Автоисправление ESLint-проблем             |
| `npm run format`     | Проверка форматирования с помощью Prettier |
| `npm run format:fix` | Автоформатирование с Prettier              |
| `npm run deploy`     | Сборка и деплой на GitHub Pages (`dist/`)  |

---

## 📄 Функциональность

- ✅ Редактируемый текст резюме (клик по элементу)
- ✅ Сохранение изменений через `localStorage`
- ✅ Кнопка **«Download pdf»**, создающая PDF с текущим содержимым
- ✅ Эффект **Material Wave** при кликах
- ✅ Адаптивный дизайн (до 320px)
