$(document).ready(function () {
    $('input#park-name').autocomplete({
        data: {
            "Outdoors": null,
            "Museums": null,
            "Entertainment": null,
            "Restaurant": null,
            "Alabama": null,
            "Alaska": null,
            "Arizona": null,
            "Arkansas": null,
            "California": null,
            "Colorado": null,
            "Connecticut": null,
            "Delaware": null,
            "Florida": null,
            "Georgia": null,
            "Hawaii": null,
            "Idaho": null,
            "Illinois": null,
            "Indiana": null,
            "Iowa": null,
            "Kansas": null,
            "Kentucky": null,
            "Louisiana": null,
            "Maine": null,
            "Maryland": null,
            "Massachusetts": null,
            "Michigan": null,
            "Minnesota": null,
            "Mississippi": null,
            "Missouri": null,
            "Montana": null,
            "Nebraska": null,
            "Nevada": null,
            "New Hampshire": null,
            "New Jersey": null,
            "New Mexico": null,
            "New York": null,
            "North Carolina": null,
            "North Dakota": null,
            "Ohio": null,
            "Oklahoma": null,
            "Oregon": null,
            "Pennsylvania": null,
            "Rhode Island": null,
            "South Carolina": null,
            "South Dakota": null,
            "Tennessee": null,
            "Texas": null,
            "Utah": null,
            "Vermont": null,
            "Virginia": null,
            "Washington": null,
            "West Virginia": null,
            "Wisconsin": null,
            "Wyoming": null,
            "United States of America": null,
            "India": null,
            "Cambodia": null,
            // "": null,"": null,"": null,"": null,

        },
    });
});

var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var submission = nameInputEl.value.trim();
    park = parks.find(park => park.name === submission);
    console.log(park.name);
    //If the user wrote a park, empty the input section and get the nat park info
    if (submission) {
        clearItems();
        getNatParkInfo(park.code);
        getNatParkAlerts(park.code);
        getNatParkToDos(park.code);
        getNatParkTours(park.code);
        addParkPrompt(submission);
        // addNatMap(park.name)
        nameInputEl.value = "";
    } else {
        modalEnterValidPark();
    }
};

function modalParkNotFound() {
    $("#modal-header").text("Error: National Park Not Found");
    modal();
}
function modalUnableToConnect() {
    $("#modal-header").text("Unable to connect to National Park API");
    modal();
}
function modalEnterValidPark() {
    $("#modal-header").text("Please enter a National Park.");
    modal();
}
function modal() {
    $(document).ready(function () {
        $('#modal').modal();
        $('#modal').modal('open');
    });
}