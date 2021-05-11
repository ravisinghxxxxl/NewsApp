console.log("start");

let myApiKey = ".......................";
let source = "";

// GRAB THE NEWS CONTAINER
let newsAccordion = document.getElementById("accordion");

// CREATE A GET REQUEST
const xhr = new XMLHttpRequest();
xhr.open("GET",`https://gnews.io/api/v4/top-headlines?token=${myApiKey}`, true);


// AFTER THE RESPONSE IS READY
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element) {
      console.log();
      let news = `<div class="card">
        <div class="card-header" id="headingOne">
        <h5 class="mb-0">
        <button
        class="btn btn-link"
        data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            ${element["title"]}
                            </button>
                            </h5>
                    </div>
                    
                    <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div class="card-body">
                     ${element["content"]}.<a class="text-danger" href="${element["url"]}" target="blank">Read more here</a>
                     </div>
                     </div>
                     </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Error!");
  }
};
xhr.send();
