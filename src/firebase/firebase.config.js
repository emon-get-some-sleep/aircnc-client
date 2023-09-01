import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBkxRr87HoRZpXudZ9tAbfWUaNixqHBKQo",
  authDomain: "cars-doctor-656ec.firebaseapp.com",
  projectId: "cars-doctor-656ec",
  storageBucket: "cars-doctor-656ec.appspot.com",
  messagingSenderId: "359945448568",
  appId: "1:359945448568:web:95c8de874d3599c2a0d18d"
}

export const app = initializeApp(firebaseConfig)
