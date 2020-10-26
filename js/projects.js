let data = import("../data/data.json");

// Project list

function projectFunction(projectArr) {
  let output = "";
  let i;
  for (i = 0; i < projectArr.length; i++) {
    if (i % 3 == 0) {
      output += '<div class="row">';
    }
    output +=
      '<div class="col-lg-4 slide-in from-left opacity-0">' +
      '<div class="card mb-5" id="' +
      i +
      '">' +
      '<div class="overflow-hidden">' +
      '<a data-toggle="modal" data-target="#myModal" onclick="modalOpen' +
      "(" +
      i +
      ');">' +
      '<img src="' +
      projectArr[i].projectImage +
      '" alt="' +
      projectArr[i].projectTitle +
      '" class="card-img-top w-100">' +
      "</a>" +
      "</div>" +
      '<div class="card-body">' +
      '<h5 class="card-title">' +
      projectArr[i].projectTitle +
      "</h5>" +
      '<p class="card-text mb-3">' +
      projectArr[i].projectDescription +
      "</p>" +
      '<div class="container mb-3">' +
      '<p class="font-weight-bold mb-3">TECHNOLOGIES USED</p>' +
      projectArr[i].projectTechnologies +
      "</div>" +
      '<a target="_blank" class="btn btn-primary" href="' +
      projectArr[i].projectDemoURL +
      '">DEMO</a> ' +
      '<a target="_blank" class="btn btn-secondary" href="' +
      projectArr[i].projectCodeURL +
      '">CODE</a>' +
      "</div>" +
      "</div>" +
      "</div>";
    if (i >= 3 && i % 3 == 0) {
      output += "</div>";
    }
  }
  document.getElementById("projectsContent").innerHTML = output;
}

projectFunction(data);
