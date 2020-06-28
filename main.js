
const source = $('#appartment-template').html();
Handlebars.registerHelper('formatCurrency', function(value) {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$$1,");
});

const template = Handlebars.compile(source);

$("button").on("click", function () {

    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $('#park-y')

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render

    let newHTML = template({apartments});
    $("#results").append(newHTML)
}

renderApts(apartments) //renders apartments when page loads