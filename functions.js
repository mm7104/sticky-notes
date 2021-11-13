const textarea = document.querySelectorAll("textarea");
const myNotes = localStorage.getItem("notes");
const final = JSON.parse(myNotes);
const notes = final.concat();

const saveToLocalStorage = (x) => {
  const unique = [
    ...new Map(notes.map((item) => [item["className"], item])).values(),
  ];
  // console.log(unique);
  localStorage.setItem("notes", JSON.stringify(unique));
};

const addEvent = () => {
  textarea.forEach((note) => {
    note.addEventListener("keyup", (e) => {
      console.log("hi");
      if (e.target.value) {
        notes.push({
          className: e.path[0].parentElement.parentElement.classList.value,
          data: e.target.value,
        });
        saveToLocalStorage();
      }
    });
  });
};
addEvent();

document.addEventListener("DOMContentLoaded", () => {
  if (final.length) {
    for (let i = 0; i < final.length; i++) {
      for (let j = 0; j < textarea.length; j++) {
        console.log(textarea[j].parentElement.parentElement);
        if (textarea[j].parentElement.parentElement) {
          if (
            textarea[j].parentElement.parentElement.classList.value ===
            final[i].className
          ) {
            textarea[j].parentElement.parentElement.innerHTML = `
          <a href="#">
          <h1>NOTE-TOPIC ${j + 1}</h1>
          <!-- <p>Note Content</p> -->
          <!-- <input type="text" placeholder="Note Content" /> -->
          <textarea>${final[i].data}</textarea>
        </a>
          `;
          }
        }
      }
    }
    setTimeout(() => addEvent(), 1000);
  }
});
