//register

function rgstr() {
  accDetails = {
    acno: accno.value,
    uname: username.value,
    pwd: pswd.value,
    balance: 0,
  };

  if (accDetails.acno in localStorage) {
    alert("Account already exists");
    window.location = "login.html";
  } else if (
    accDetails.acno == "" ||
    accDetails.uname == "" ||
    accDetails.pwd == ""
  ) {
    alert("Please fill all the details");
  } else {
    localStorage.setItem(accDetails.acno, JSON.stringify(accDetails));
    alert("Account created");
    window.location = "login.html";
  }
}
function login() {
  window.location = "login.html";
}

//login

function loginacc() {
  (acno = accno_login.value), (pwd = pswd_login.value);
  // console.log(acno,pwd);

  if (acno in localStorage) {
    accDetails = JSON.parse(localStorage.getItem(acno));
    if (pwd == accDetails.pwd) {
      alert("Login Successful!!");
      window.location = "./home.html";
    } else {
      alert("Incorrect details");
    }
  } else {
    alert("Incorrect account number");
  }
}

//home

let amnt = 0;
let withdraw = 0;
// let balance=0;
let totalbalance = 0;
//deposite
function deposite() {
  amnt = deposite_amnt.value;
  acno = depo_accno.value;
  amnt = Math.floor(amnt);
  console.log(amnt, acno);
  if (acno in localStorage) {
    accDetails = JSON.parse(localStorage.getItem(acno));
    if (acno == accDetails.acno && amnt <= 0) {
      alert("Value cannot be empty or negative");
    } else {
      accDetails.balance += amnt;
      console.log(accDetails.balance);
      // alert(accDetails.balance)
      localStorage.setItem(acno, JSON.stringify(accDetails));
      alert("Your amount added successfully");
      document.getElementById(
        "amnt"
      ).innerHTML = `<p style="color:red;" class="fs-3">Your Balance is ${accDetails.balance}</p>`;
    }
  }
}

//withdraw

function withdrawal() {
  amnt = withdraw_amnt.value;
  acno = withdraw_accno.value;
  amnt = Math.floor(amnt);
  // console.log(amnt,acno);

  if (acno in localStorage) {
    accDetails = JSON.parse(localStorage.getItem(acno));
    if (acno == accDetails.acno && amnt <= 0) {
      alert("Value cannot be empty or negative");
    } else if (amnt > accDetails.balance) {
      alert("Insufficient balance");
    } else {
      accDetails.balance -= amnt;
      console.log(accDetails.balance);
      localStorage.setItem(acno, JSON.stringify(accDetails));
      alert("Your amount withdraw successfully");
      document.getElementById(
        "balance"
      ).innerHTML = `<p style="color:black;" class="fs-3">Your Balance is ${accDetails.balance}</p>`;
    }
  }
}

//logout

function logout() {
  localStorage.clear();
  window.location = "./index.html";
}
