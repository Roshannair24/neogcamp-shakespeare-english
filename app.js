let textAreaInput = document.querySelector("#textarea");
let btnTranslate = document.querySelector("#btn-translate");
let outputPara = document.querySelector(".outputPara");

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverurl = "https://api.funtranslations.com/translate/shakespeare.json";

function constructUrl(str) {
  return serverurl + "?" + "text=" + str;
}

btnTranslate.addEventListener("click", function () {
  console.log("clicked");

  console.log("txt area value: " + textAreaInput.value);

  fetch(constructUrl(textAreaInput.value))
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      outputPara.innerText = data.contents.translated;

      console.log("output area value : " + outputPara.innerText);
    })
    .catch(function (error) {
      console.log(error);
    });
});
