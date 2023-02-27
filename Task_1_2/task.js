//Task 1

const data = [
  { id: 1, firstName: "Hobert", lastName: "Rarężlak", marks: [3, 3.5, 3, 5] },
  { id: 2, firstName: "Basia", lastName: "Kasińska", marks: [5, 4.5, 3, 5] },
  { id: 3, firstName: "Haciej", lastName: "Mubert", marks: [2, 2.5, 5, 5] },
  { id: 4, firstName: "Hawid", lastName: "Dolisz", marks: [5, 4.5, 5, 5] },
  { id: 5, firstName: "Dateusz", lastName: "Mobija", marks: [2, 5, 2, 5] },
];
const averageMarksForEachPerson = [];

data.forEach((person) => {
  let reducedValue = person.marks.reduce((acc, cur) => acc + cur);
  reducedValueFin = reducedValue / person.marks.length;
  averageMarksForEachPerson.push(reducedValueFin);
});

let finMarks = averageMarksForEachPerson.reduce((acc, cur) => acc + cur);
const averageFromAllMarks = finMarks / averageMarksForEachPerson.length;

console.log(
  "Task 1: Średnie poszczególnych studentów: ",
  averageMarksForEachPerson
);
console.log("Task 1: Średnia wszytkich ocen: ", averageFromAllMarks);

//Task 2

filteredPosts = [];
postsWithNewData = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for (let post of posts) {
      if (post.id % 2 === 0 && post.id % 3 === 0) {
        filteredPosts.push(post);
      }
    }
    placeholder.innerHTML = out;

    let output = filteredPosts.map((post) => {
      if (post.hasOwnProperty("id")) {
        post.internalId = post.id;
        delete post.userId;
        delete post.id;
        post.externalId = Math.floor(Math.random() * 99999 + 100);
      }
      postsWithNewData.push(post);
      return post;
    });

    postsWithNewData.forEach((post) => {
      out += `
        <tr>
          <td>${post.externalId}</td>
          <td>${post.title}</td>
        </tr>
      `;
    });
    placeholder.innerHTML = out;
  });

console.log(postsWithNewData);
