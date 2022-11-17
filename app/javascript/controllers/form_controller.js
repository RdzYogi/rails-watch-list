import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("controller connected")
  }

  // select() {
  //   console.log("It works")
  // }
}

// const checks = document.querySelectorAll('.check_boxes')

// checks.forEach((check) => {
//   check.addEventListener('change',(e) => {
//     console.log(e.currentTarget)
//     console.log("It works")
//   })
// });
