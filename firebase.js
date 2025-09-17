import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "ТВОЙ_API_KEY",
    authDomain: "ТВОЙ_PROJECT_ID.firebaseapp.com",
    projectId: "ТВОЙ_PROJECT_ID",
    appId: "..."
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getFirestore(app);
