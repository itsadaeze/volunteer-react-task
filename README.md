# 🌍 Volunteer Opportunities App

![App Screenshot](./public/Screenshot%202025-05-23%20at%2011.12.29.png)


A responsive React + TypeScript application that allows users to browse, filter, and add volunteer opportunities. Users can view detailed information about each opportunity and even add their own using a form modal. Data is managed using a local [JSON Server](https://github.com/typicode/json-server).

---

## 🚀 Features

- 🔍 **Search & Filter** opportunities by title, organization, or category
- ➕ **Add Opportunity** via a modal form
- 📋 **View Details** of each opportunity in a modal (description, duration, skills, email)
- 💅 Styled with **Tailwind CSS** for modern UI
- 📦 Backend simulated using `json-server`

---

## 📁 Project Structure

```
.
├── components/
│   ├── FilterBar.tsx
│   ├── OpportunityCard.tsx
│   ├── OpportunityForm.tsx
│   └── OpportunityDetailsModal.tsx
├── types/
│   └── opportunity.ts
├── pages/
│   └── Home.tsx
├── db.json              # JSON Server mock data
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/itsadaeze/volunteer-react-task.git
cd volunteer-react-project
```

2. **Install dependencies**:

```bash
npm install
```

3. **Install JSON Server globally (if not already installed)**:

```bash
npm install -g json-server
```

---

## ⚙️ Running the App

### 1. Start JSON Server

Make sure you have a `db.json` file at the root of your project.

```bash
json-server --watch db.json --port 3001
```

This serves mock data at: [http://localhost:3001/opportunities](http://localhost:3001/opportunities)

### 2. Start the React App

In a new terminal:

```bash
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173) (Vite default)

---

## 🛠 Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Axios](https://axios-http.com/)
- [Lucide Icons](https://lucide.dev/) 

---

## 📧 Contact

built by **Adaeze Ugwu**

> For questions, suggestions or collaboration:
[adaeze@example.com](mailto:adaezeugwu6@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/adaeze-ugwu/) | [GitHub](https://github.com/itsadaeze)
