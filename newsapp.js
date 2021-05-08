console.log("start");

let myApiKey = "f3d16b7a9432d0bc18a9f6b341d5c6ba";
let source = "";

// GRAB THE NEWS CONTAINER
let newsAccordion = document.getElementById("accordion");

// CREATE A GET REQUEST
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/top-headlines?token=${myApiKey}`,
  true
);

// AFTER THE RESPONSE IS READY
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    for (news in articles) {
      console.log(articles[news]);
      let news = `<div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                        <button
                            class="btn btn-link"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </button>
                        </h5>
                    </div>

                    <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion">
                        <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                        labore sustainable VHS.
                        </div>
                    </div>
</div>`;
    }
  } else {
    console.log("Error!");
  }
};
xhr.send();
