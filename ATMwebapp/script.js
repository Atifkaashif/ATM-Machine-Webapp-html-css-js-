// Users (stored in localStorage)
if (!localStorage.getItem("users")) {
    const users = {
        "atif": { pin: "1234", balance: 50000, history: [] },
        "ali": { pin: "5678", balance: 30000, history: [] }
    };
    localStorage.setItem("users", JSON.stringify(users));
}

let currentUser = null;

// Helper: Show message
function showMessage(msg) {
    document.getElementById("messages").textContent = msg;
}

// Virtual keypad creation
function createKeypad(containerId, inputId) {
    const keypad = document.getElementById(containerId);
    keypad.innerHTML = "";
    const numbers = [1,2,3,4,5,6,7,8,9,"C",0,"<"];
    numbers.forEach(num => {
        const btn = document.createElement("button");
        btn.textContent = num;
        btn.onclick = () => handleKeypadInput(num, inputId);
        keypad.appendChild(btn);
    });
}

// Keypad input handler
function handleKeypadInput(num, inputId) {
    const input = document.getElementById(inputId);
    if (num === "C") input.value = "";
    else if (num === "<") input.value = input.value.slice(0,-1);
    else input.value += num;
}

// Initialize keypads
createKeypad("pin-keypad", "pin");
createKeypad("withdraw-keypad", "withdraw-amount");
createKeypad("deposit-keypad", "deposit-amount");

// Login
function login() {
    const pinInput = document.getElementById("pin").value;
    const users = JSON.parse(localStorage.getItem("users"));
    for (let user in users) {
        if (users[user].pin === pinInput) {
            currentUser = user;
            document.getElementById("user-display").textContent = currentUser;
            document.getElementById("login-screen").style.display = "none";
            document.getElementById("menu-screen").style.display = "block";
            showMessage("Login successful!");
            document.getElementById("pin").value = "";
            return;
        }
    }
    showMessage("Incorrect PIN!");
}

// Navigation & ATM Functions
function backToMenu() {
    document.getElementById("withdraw-screen").style.display = "none";
    document.getElementById("deposit-screen").style.display = "none";
    document.getElementById("history-screen").style.display = "none";
    document.getElementById("menu-screen").style.display = "block";
}

function showWithdraw() { document.getElementById("menu-screen").style.display="none"; document.getElementById("withdraw-screen").style.display="block"; }
function showDeposit() { document.getElementById("menu-screen").style.display="none"; document.getElementById("deposit-screen").style.display="block"; }
function checkBalance() { const users=JSON.parse(localStorage.getItem("users")); showMessage(`Balance: Rs ${users[currentUser].balance}`); }
function showHistory() { document.getElementById("menu-screen").style.display="none"; document.getElementById("history-screen").style.display="block"; const users=JSON.parse(localStorage.getItem("users")); const list=document.getElementById("history-list"); list.innerHTML=""; if(users[currentUser].history.length===0) list.innerHTML="<li>No transactions yet.</li>"; else users[currentUser].history.forEach(t=>{ const li=document.createElement("li"); li.textContent=t; list.appendChild(li); }); }
function exitATM() { showMessage("Logged out."); currentUser=null; document.getElementById("menu-screen").style.display="none"; document.getElementById("login-screen").style.display="block"; }

// Withdraw & Deposit
function withdrawMoney() {
    let amount = parseInt(document.getElementById("withdraw-amount").value);
    const users = JSON.parse(localStorage.getItem("users"));
    if(!isNaN(amount) && amount>0){
        if(amount<=users[currentUser].balance){
            users[currentUser].balance-=amount;
            users[currentUser].history.push(`Withdraw: Rs ${amount}`);
            localStorage.setItem("users", JSON.stringify(users));
            showMessage(`Withdrawn Rs ${amount}. Balance: Rs ${users[currentUser].balance}`);
            document.getElementById("withdraw-amount").value="";
        } else showMessage("Insufficient balance!");
    } else showMessage("Enter valid amount!");
}

function depositMoney() {
    let amount = parseInt(document.getElementById("deposit-amount").value);
    const users = JSON.parse(localStorage.getItem("users"));
    if(!isNaN(amount) && amount>0){
        users[currentUser].balance+=amount;
        users[currentUser].history.push(`Deposit: Rs ${amount}`);
        localStorage.setItem("users", JSON.stringify(users));
        showMessage(`Deposited Rs ${amount}. Balance: Rs ${users[currentUser].balance}`);
        document.getElementById("deposit-amount").value="";
    } else showMessage("Enter valid amount!");
}
