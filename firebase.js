const firebaseConfig = {
    apiKey: "AIzaSyD-hmI1jK6g-cYUKsJz5Xn5hoZ627KScPM",
    authDomain: "calendarform-647c2.firebaseapp.com",
    databaseURL: "https://calendarform-647c2-default-rtdb.firebaseio.com",
    projectId: "calendarform-647c2",
    storageBucket: "calendarform-647c2.appspot.com",
    messagingSenderId: "80795207996",
    appId: "1:80795207996:web:e123e4b024e77bc8817639",
    measurementId: "G-MJCJLGJ54B"
};

// initialize
firebase.initializeApp(firebaseConfig);

// reference your database
var calendarFormDB = firebase.database().ref('calendarForm');

document.getElementById('calendarForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var date = getElementVal('date');
    var time = getElementVal('time');
    var title = getElementVal('title');
    var describe = getElementVal('describe');
    var output = getElementVal('output');

    saveMessage(date, time, title, describe, output);
    
    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessage = (date, time, title, describe, output) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        date: date,
        time: time,
        title: title,
        describe: describe,
        output: output
    })
} ;

function getElementVal(id)
{
    return document.getElementById(id).value;
}