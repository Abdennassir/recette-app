import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJSKzlDXW5IKUULDF_RARE96qyJZLd3Ec",
  authDomain: "recette-app-2ef9f.firebaseapp.com",
  databaseURL: "https://recette-app-2ef9f.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
