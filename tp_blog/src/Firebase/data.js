
const firebase = require('firebase/app');
require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyBiWfgRMNRjF6fU0z5LICnDTkdJSmUm1sw",
    authDomain: "blog-7c829.firebaseapp.com",
    projectId: "blog-7c829",
    storageBucket: "blog-7c829.appspot.com",
    messagingSenderId: "839225819076",
    appId: "1:839225819076:web:742d64a67394d5aa1b6e91",
    measurementId: "G-GYESWVC5D0"
  };

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


const jobsData = [
    {
        "Body": "Python est un langage de programmation de haut niveau, interprété et généraliste. Conçu pour être facile à lire et à écrire, Python est souvent recommandé comme premier langage de programmation pour les débutants. Il est largement utilisé pour le développement web, l'analyse de données, l'intelligence artificielle, et le calcul scientifique. Python permet aux développeurs de mettre en œuvre des solutions complexes avec relativement peu de code et est soutenu par une large communauté qui contribue à un écosystème riche de bibliothèques et de frameworks.",
        "Titre": "Introduction à Python",
        "createdat": "2024-06-01T00:00:00+01:00",
        "tags": "python, programming, data analysis"
      },
      
      
      
];




const addJobsToFirestore = async (jobsData) => {
  try {

    for (const job of jobsData) {

      await db.collection('Blog').add(job);
    }
    console.log("Jobs added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding jobs to Firestore: ", error);
  }
};


addJobsToFirestore(jobsData);