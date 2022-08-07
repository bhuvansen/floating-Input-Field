document.querySelectorAll(".text-input").forEach((element) => {
  element.addEventListener("blur", (event) => {
    if (event.target.value != "") {
      event.target.nextElementSibling.classList.add("nonEmpty")
    } else {
      event.target.nextElementSibling.classList.remove("nonEmpty")
    }
  })
})
