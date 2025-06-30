<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->





# 🛒 Smart Cart-Based Product Recommendation System

> Recommend similar and complementary products based on items in the user's shopping cart — just like Flipkart or Amazon!

---

## 🚀 Project Overview

This is a **standalone microservice-based AI recommendation system** that suggests products based on the user's cart items.

It is fully decoupled, meaning the **backend works independently** and can be integrated into any frontend, mobile app, or e-commerce system (like a MERN, Django, or Shopify clone).

> ⚠️ **Note:** This project is not directly integrated with Flipkart or Amazon. It simulates their recommendation behavior using dummy product data and a smart ML model.

🎯 Designed to mimic:
- **Frequently Bought Together**
- **You Might Also Like**
- **Similar Products**

---

## 🎯 Key Features

- ✅ Built as a **standalone microservice**
- 🛒 Takes cart input and returns smart recommendations
- 🤖 Uses NLP-based product similarity (TF-IDF + Cosine Similarity)
- 💻 Clean frontend using React + Vite
- 🔙 Flask backend API
- 📦 Dummy product dataset (Flipkart/Amazon-style)

---

## 🧩 Tech Stack

| Layer     | Technology                      |
|-----------|---------------------------------|
| Frontend  | React.js + Vite + Tailwind CSS  |
| Backend   | Python + Flask (REST API)       |
| ML Model  | TF-IDF + Cosine Similarity      |
| Dataset   | CSV (Product Info) / JSON       |
| Hosting   | (Optional) Netlify / Render     |

---

## 📁 Project Structure

smartCart/
│
├── backend/              # Flask API (Microservice)
│   ├── app.py            # API routes
│   ├── model.pkl         # Trained model file
│   ├── utils.py          # Similarity logic
│   └── data/             # products.csv etc.
│
├──              # React + Vite frontend
│   ├── src/
│   │   ├── components/   # UI components
│   │   ├── App.jsx       # Main app logic
│   │   └── index.jsx     # Entry point
│   └── vite.config.js
│
├── notebooks/            # Jupyter notebook for training
│   └── train_model.ipynb
│
├── README.md
└── requirements.txt
🛠️ How to Run the Project
1. Clone the repository

git clone https://github.com/yourusername/smart-cart-recommendation.git
cd smartCart
2. Start Backend (Flask Microservice)

cd backend
pip install -r requirements.txt
python app.py
API runs on http://localhost:5000

3. Start Frontend (React + Vite)

npm install
npm run dev
App runs at http://localhost:5173

📊 Example Flow
User selects: Mobile + Charger

Clicks: ✅ "Get Recommendations"

AI suggests:

Power Bank

Earphones

Mobile Cover

All shown with dummy price, ratings, and product cards.

🧠 How the Recommendation Works
Products are vectorized using TF-IDF on title + category

Backend uses Cosine Similarity to find closest matches

Filters out duplicates or already selected items

Sends back top 5–6 smart suggestions

💡 Future Improvements
🔍 Add BERT/SBERT for semantic similarity

🕸️ Real-time scraping (Flipkart/Amazon)

🧠 Personalized recommendations (user profile, history)

🧾 Price history graph (Recharts)

🗣️ Voice/cart chatbot using Dialogflow

☁️ Deploy to Netlify + Render

🤝 Team & Credits
Made with ❤️ by:

Aman Rauniyar (ML + Backend Microservice)

[Aman  Rauniyar] (Frontend & Integration)

(Dataset & Feature Enhancements)

Dataset: Amazon Product Data - Kaggle

📌 License
This project is open-source and free to use for educational and demo purposes.