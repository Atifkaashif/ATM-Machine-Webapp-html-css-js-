ATM Machine Web Application

A simple and interactive ATM Machine Simulation built using HTML, CSS, and JavaScript.
This project demonstrates core banking operations like PIN authentication, balance inquiry, deposit, withdrawal, and transaction history tracking.

Project Overview

The ATM Machine Web App simulates basic ATM functionalities in a browser environment.
It is designed for learning purposes to understand:

DOM Manipulation

Event Handling

Local Storage (Optional)

UI/UX Design with CSS

JavaScript Logic Implementation
Features
🔐 1. PIN Lock System

User must enter correct 4-digit PIN.

Maximum 3 attempts allowed.

Account locks after 3 wrong attempts.

Secure input using password field.

💰 2. Balance Inquiry

Displays current account balance.

Balance updates dynamically after each transaction.

➕ 3. Deposit Money

User can enter amount to deposit.

Balance updates automatically.

Validation prevents negative or invalid inputs.

➖ 4. Withdraw Money

Withdraw specific amount.

Checks for sufficient balance.

Prevents overdraft.

📜 5. Transaction History

Stores all deposits and withdrawals.

Displays:

Transaction Type (Deposit/Withdraw)

Amount

Date & Time

History updates dynamically.

(Optional) Stored in LocalStorage for persistence.

🛠️ Technologies Used

HTML5 – Structure

CSS3 – Styling & Layout

JavaScript (ES6) – Logic & Functionality

📂 Project Structure
ATM-Machine/
│
├── index.html       # Main HTML File
├── style.css        # Styling File
├── script.js        # JavaScript Logic
└── README.md        # Project Documentation

⚙️ How to Run

Download or Clone the repository.

Open index.html in your browser.

Enter the default PIN (example: 1234).

Start using ATM features.

🔑 Default Credentials
Field	Value
PIN	1234

(You can modify PIN inside script.js)

📷 UI Features

Modern ATM-style interface

Responsive design

Smooth transitions

Clear status messages

Error handling alerts

🧠 Learning Concepts Covered

JavaScript Variables & Functions

Conditionals (if-else)

Arrays for transaction storage

Date & Time handling

DOM Manipulation

Event Listeners

🔒 Security Note

⚠️ This project is for educational purposes only.
It does NOT implement real banking security or encryption.

🔮 Future Improvements

Multiple user accounts

Card number simulation

OTP verification

Backend integration (PHP / Node.js)

Database storage (MySQL / MongoDB)

Admin panel

👨‍💻 Author

Developed by Atif Kashif
For learning and educational purposes.
