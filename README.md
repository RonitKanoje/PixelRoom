# PixelRoom

A modern React + Redux media search application that allows users to search for **photos and videos**, explore media content, and save favorite items into personalized collections.

---

## 🚀 Features

- 🔍 Search photos using Unsplash API
- 🎥 Search videos using Pexels API
- 💾 Save media to collections
- 🗑 Clear saved collections
- ⚡ Fast state management using Redux Toolkit
- 🎨 Modern responsive UI with Tailwind CSS
- 🔄 Dynamic tab switching between Photos & Videos
- 💿 LocalStorage persistence
- 🧭 Routing with React Router DOM
- ⏳ Custom loading spinner

---

## 🛠 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios
- Vite

### APIs
- Unsplash API
- Pexels API

---

## 📂 Project Structure

```bash
src/
│
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── CollectionButton.jsx
│   ├── CollectionCard.jsx
│   ├── Loading.jsx
│   ├── ResultCard.jsx
│   ├── ResultGrid.jsx
│   ├── SearchBar.jsx
│   └── Tabs.jsx
│
├── pages/
│   ├── HomePage.jsx
│   └── PagesCollection.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       ├── collectionSlice.js
│       ├── searchSlice.js
│       └── toasterSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/RonitKanoje/PixelRoom.git
```

Move into the project folder:

```bash
cd PixelRoom
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
```

---

## 📸 APIs Used

### Unsplash
https://unsplash.com/developers

### Pexels
https://www.pexels.com/api/

---


## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

Ronit Kanoje
