# Finance Tracker App

A simple and interactive **Finance Tracker** built with **React** and **Tailwind CSS**. This app helps users calculate their savings dynamically based on their income, expenses, and other financial factors. It also provides a live estimate of the days, weeks, and fortnights left to meet their saving goals.

---

## 🛠️ Features

- **Real-Time Savings Calculation**: Updates savings and remaining days live as you input values.
- **Dynamic Styling**: Highlights negative savings in red and positive savings in green for clear visual feedback.
- **User-Friendly Input Fields**: Clean and reusable input components for ease of use.
- **Responsive Design**: Mobile-friendly layout using **Tailwind CSS**.

---

## 🖥️ Technologies Used

- **React**: For building the interactive UI.
- **Tailwind CSS**: For rapid and responsive styling.
- **Vite**: As the build tool for fast development.

---

## 🚀 Getting Started

Follow these steps to run the app locally:

### Prerequisites
Make sure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**: For managing dependencies.
- **Vite**: Built into the project via `npm create vite`.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sagarpoudel638/finance-tracker-app.git
   cd finance-tracker-app
 2. **Install dependencies**

Navigate into the project directory and install the necessary dependencies:
Using npm:
```bash
cd finance-tracker
npm install
```

Or using Yarn:

  

```bash

cd finance-tracker

yarn install
```
### 3. Start the development server

Run the following command to start the development server:

  

Using npm:

  

```bash

npm run dev
```
Or using Yarn:

  

```bash

yarn dev
```
### 4. Open the app

Once the development server has started, open your browser and navigate to [http://localhost:5173](http://localhost:5173) to see the Finance Tracker app in action.

  

---

### Key Components

  

- **`App.jsx`**: Contains the main logic of the finance tracker, including the calculations for savings, days left, weeks left, and fortnights left.

- **`Input.jsx`**: A reusable component used for rendering input fields for various financial data (Total Money in Bank, Fortnight Income, etc.).

- **`index.css`**: Custom styles, mainly integrating Tailwind CSS for responsive design and styling.

- **`main.jsx`**: Entry point of the application where the app is rendered into the DOM.

  

---

  

## 🧮 How It Works

  

1. **Input Fields**: Enter values for:

- Total Money in Bank

- Fortnight Income

- Regular Expenses

- Money Lent

- Expected Expenses

  

2. **Calculations**:

- **To Save Amount**: The difference between your expected expenses and the total money in your bank, along with any money you've lent out.

- **Days Left**: The time remaining to reach your saving goal, based on your income and expenses.

- **Weeks Left**: Displays the calculated remaining time in weeks.

- **Fortnights Left**: Displays the remaining time in fortnights.

  

3. **Visual Feedback**:

- The savings value is displayed in **green** if it’s positive and **red** if it’s negative.

- The days, weeks, and fortnights left are updated in real-time as you enter data, with dynamic visual feedback based on the calculated values.

  

---

  





  

## 🌟 Future Improvements

  

- Add persistence by saving data to **localStorage** or integrating a **backend** to store user data.

- Enhance the user experience with better validation for input fields.

- Integrate **charts** for more detailed financial insights.

  

---

  

## 👨‍💻 Author

  

**Sagar Poudel**

Connect with me on [LinkedIn](https://www.linkedin.com/in/sagarpoudel638/)

Feel free to contribute or suggest improvements!

  

---

  

## 📜 License

  

This project is licensed under the [MIT License](./LICENSE).