import firebase from "firebase";

// Firebase configuration
var firebaseConfig = {
  apiKey:
    "AAAAKl3V-Yg:APA91bGtMd03TCAhO6HiYsNbXBf5iAPjyRZIad0jKoBbsJW7SL_EuRUCyAPjKw7l4rPu-6zWPv_pL_FW0jLgQdNkQc8hBf6bzd0wdkW8fdUkYrR_wE60lcynAvVUb6fK56uZjxXqOLyE",
  authDomain: "challenge-chapter-9.firebaseapp.com",
  projectId: "challenge-chapter-9",
  messagingSenderId: "181962930568",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
