var searchBtnEl = document.querySelector("#search-sub");
var nameInputEl = document.querySelector("#search-name");


$( function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
      _create: function() {
        this._super();
        this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
      },
      _renderMenu: function( ul, items ) {
        var that = this,
          currentCategory = "";
        $.each( items, function( index, item ) {
          var li;
          if ( item.category != currentCategory ) {
            ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
            currentCategory = item.category;
          }
          li = that._renderItemData( ul, item );
          if ( item.category ) {
            li.attr( "aria-label", item.category + " : " + item.label );
          }
        });
      }
    });
    $( "#search-name" ).catcomplete({
      delay: 0,
      source: data
    });
});

  var data = [
    { label: "Outdoors", category: "Activity" },
   { label: "Museums", category: "Activity" },
   { label: "Entertainment", category: "Activity" },
   { label: "Restaurant", category: "Activity" },
   { label: "Alabama", category: "State" },
   { label: "Alaska", category: "State" },
   { label: "Arizona", category: "State" },
   { label: "Arkansas", category: "State" },
   { label: "California", category: "State" },
   { label: "Colorado", category: "State" },
   { label: "Connecticut", category: "State" },
   { label: "Delaware", category: "State" },
   { label: "Florida", category: "State" },
   { label: "Georgia", category: "State" },
   { label: "Hawaii", category: "State" },
   { label: "Idaho", category: "State" },
   { label: "Illinois", category: "State" },
   { label: "Indiana", category: "State" },
   { label: "Iowa", category: "State" },
   { label: "Kansas", category: "State" },
   { label: "Kentucky", category: "State" },
   { label: "Louisiana", category: "State" },
   { label: "Maine", category: "State" },
   { label: "Maryland", category: "State" },
   { label: "Massachusetts", category: "State" },
   { label: "Michigan", category: "State" },
   { label: "Minnesota", category: "State" },
   { label: "Mississippi", category: "State" },
   { label: "Missouri", category: "State" },
   { label: "Montana", category: "State" },
   { label: "Nebraska", category: "State" },
   { label: "Nevada", category: "State" },
   { label: "New Hampshire", category: "State" },
   { label: "New Jersey", category: "State" },
   { label: "New Mexico", category: "State" },
   { label: "New York", category: "State" },
   { label: "North Carolina", category: "State" },
   { label: "North Dakota", category: "State" },
   { label: "Ohio", category: "State" },
   { label: "Oklahoma", category: "State" },
   { label: "Oregon", category: "State" },
   { label: "Pennsylvania", category: "State" },
   { label: "Rhode Island", category: "State" },
   { label: "South Carolina", category: "State" },
   { label: "South Dakota", category: "State" },
   { label: "Tennessee", category: "State" },
   { label: "Texas", category: "State" },
   { label: "Utah", category: "State" },
   { label: "Vermont", category: "State" },
   { label: "Virginia", category: "State" },
   { label: "Washington", category: "State" },
   { label: "West Virginia", category: "State" },
   { label: "Wisconsin", category: "State" },
   { label: "Wyoming", category: "State" },
   { label: "United States of America", category: "Country" },
   { label: "Afghanistan", category: "Country" }, 
   { label: "Åland Islands", category: "Country" }, 
   { label: "Albania", category: "Country" }, 
   { label: "Algeria", category: "Country" }, 
   { label: "American Samoa", category: "Country" }, 
   { label: "AndorrA", category: "Country" }, 
   { label: "Angola", category: "Country" }, 
   { label: "Anguilla", category: "Country" }, 
   { label: "Antarctica", category: "Country" }, 
   { label: "Antigua and Barbuda", category: "Country" }, 
   { label: "Argentina", category: "Country" }, 
   { label: "Armenia", category: "Country" }, 
   { label: "Aruba", category: "Country" }, 
   { label: "Australia", category: "Country" }, 
   { label: "Austria", category: "Country" }, 
   { label: "Azerbaijan", category: "Country" }, 
   { label: "Bahamas", category: "Country" }, 
   { label: "Bahrain", category: "Country" }, 
   { label: "Bangladesh", category: "Country" }, 
   { label: "Barbados", category: "Country" }, 
   { label: "Belarus", category: "Country" }, 
   { label: "Belgium", category: "Country" }, 
   { label: "Belize", category: "Country" }, 
   { label: "Benin", category: "Country" }, 
   { label: "Bermuda", category: "Country" }, 
   { label: "Bhutan", category: "Country" }, 
   { label: "Bolivia", category: "Country" }, 
   { label: "Bosnia and Herzegovina", category: "Country" }, 
   { label: "Botswana", category: "Country" }, 
   { label: "Bouvet Island", category: "Country" }, 
   { label: "Brazil", category: "Country" }, 
   { label: "British Indian Ocean Territory", category: "Country" }, 
   { label: "Brunei Darussalam", category: "Country" }, 
   { label: "Bulgaria", category: "Country" }, 
   { label: "Burkina Faso", category: "Country" }, 
   { label: "Burundi", category: "Country" }, 
   { label: "Cambodia", category: "Country" }, 
   { label: "Cameroon", category: "Country" }, 
   { label: "Canada", category: "Country" }, 
   { label: "Cape Verde", category: "Country" }, 
   { label: "Cayman Islands", category: "Country" }, 
   { label: "Central African Republic", category: "Country" }, 
   { label: "Chad", category: "Country" }, 
   { label: "Chile", category: "Country" }, 
   { label: "China", category: "Country" }, 
   { label: "Christmas Island", category: "Country" }, 
   { label: "Cocos (Keeling) Islands", category: "Country" }, 
   { label: "Colombia", category: "Country" }, 
   { label: "Comoros", category: "Country" }, 
   { label: "Congo", category: "Country" }, 
   { label: "Congo, The Democratic Republic of the", category: "Country" }, 
   { label: "Cook Islands", category: "Country" }, 
   { label: "Costa Rica", category: "Country" }, 
   { label: "Cote D\"Ivoire", category: "Country" }, 
   { label: "Croatia", category: "Country" }, 
   { label: "Cuba", category: "Country" }, 
   { label: "Cyprus", category: "Country" }, 
   { label: "Czech Republic", category: "Country" }, 
   { label: "Denmark", category: "Country" }, 
   { label: "Djibouti", category: "Country" }, 
   { label: "Dominica", category: "Country" }, 
   { label: "Dominican Republic", category: "Country" }, 
   { label: "Ecuador", category: "Country" }, 
   { label: "Egypt", category: "Country" }, 
   { label: "El Salvador", category: "Country" }, 
   { label: "Equatorial Guinea", category: "Country" }, 
   { label: "Eritrea", category: "Country" }, 
   { label: "Estonia", category: "Country" }, 
   { label: "Ethiopia", category: "Country" }, 
   { label: "Falkland Islands (Malvinas)", category: "Country" }, 
   { label: "Faroe Islands", category: "Country" }, 
   { label: "Fiji", category: "Country" }, 
   { label: "Finland", category: "Country" }, 
   { label: "France", category: "Country" }, 
   { label: "French Guiana", category: "Country" }, 
   { label: "French Polynesia", category: "Country" }, 
   { label: "French Southern Territories", category: "Country" }, 
   { label: "Gabon", category: "Country" }, 
   { label: "Gambia", category: "Country" }, 
   { label: "Georgia", category: "Country" }, 
   { label: "Germany", category: "Country" }, 
   { label: "Ghana", category: "Country" }, 
   { label: "Gibraltar", category: "Country" }, 
   { label: "Greece", category: "Country" }, 
   { label: "Greenland", category: "Country" }, 
   { label: "Grenada", category: "Country" }, 
   { label: "Guadeloupe", category: "Country" }, 
   { label: "Guam", category: "Country" }, 
   { label: "Guatemala", category: "Country" }, 
   { label: "Guernsey", category: "Country" }, 
   { label: "Guinea", category: "Country" }, 
   { label: "Guinea-Bissau", category: "Country" }, 
   { label: "Guyana", category: "Country" }, 
   { label: "Haiti", category: "Country" }, 
   { label: "Heard Island and Mcdonald Islands", category: "Country" }, 
   { label: "Holy See (Vatican City State)", category: "Country" }, 
   { label: "Honduras", category: "Country" }, 
   { label: "Hong Kong", category: "Country" }, 
   { label: "Hungary", category: "Country" }, 
   { label: "Iceland", category: "Country" }, 
   { label: "India", category: "Country" }, 
   { label: "Indonesia", category: "Country" }, 
   { label: "Iran", category: "Country" }, 
   { label: "Iraq", category: "Country" }, 
   { label: "Ireland", category: "Country" }, 
   { label: "Isle of Man", category: "Country" }, 
   { label: "Israel", category: "Country" }, 
   { label: "Italy", category: "Country" }, 
   { label: "Jamaica", category: "Country" }, 
   { label: "Japan", category: "Country" }, 
   { label: "Jersey", category: "Country" }, 
   { label: "Jordan", category: "Country" }, 
   { label: "Kazakhstan", category: "Country" }, 
   { label: "Kenya", category: "Country" }, 
   { label: "Kiribati", category: "Country" }, 
   { label: "North Korea", category: "Country" }, 
   { label: "South Korea", category: "Country" }, 
   { label: "Kuwait", category: "Country" }, 
   { label: "Kyrgyzstan", category: "Country" }, 
   { label: "Laos", category: "Country" }, 
   { label: "Latvia", category: "Country" }, 
   { label: "Lebanon", category: "Country" }, 
   { label: "Lesotho", category: "Country" }, 
   { label: "Liberia", category: "Country" }, 
   { label: "Libyan Arab Jamahiriya", category: "Country" }, 
   { label: "Liechtenstein", category: "Country" }, 
   { label: "Lithuania", category: "Country" }, 
   { label: "Luxembourg", category: "Country" }, 
   { label: "Macao", category: "Country" }, 
   { label: "North Macedonia", category: "Country" }, 
   { label: "Madagascar", category: "Country" }, 
   { label: "Malawi", category: "Country" }, 
   { label: "Malaysia", category: "Country" }, 
   { label: "Maldives", category: "Country" }, 
   { label: "Mali", category: "Country" }, 
   { label: "Malta", category: "Country" }, 
   { label: "Marshall Islands", category: "Country" }, 
   { label: "Martinique", category: "Country" }, 
   { label: "Mauritania", category: "Country" }, 
   { label: "Mauritius", category: "Country" }, 
   { label: "Mayotte", category: "Country" }, 
   { label: "Mexico", category: "Country" }, 
   { label: "Micronesia", category: "Country" }, 
   { label: "Moldova", category: "Country" }, 
   { label: "Monaco", category: "Country" }, 
   { label: "Mongolia", category: "Country" }, 
   { label: "Montserrat", category: "Country" }, 
   { label: "Morocco", category: "Country" }, 
   { label: "Mozambique", category: "Country" }, 
   { label: "Myanmar", category: "Country" }, 
   { label: "Namibia", category: "Country" }, 
   { label: "Nauru", category: "Country" }, 
   { label: "Nepal", category: "Country" }, 
   { label: "Netherlands", category: "Country" }, 
    //{ label: "Netherlands Antilles", category: "Country" }, 
   { label: "New Caledonia", category: "Country" }, 
   { label: "New Zealand", category: "Country" }, 
   { label: "Nicaragua", category: "Country" }, 
   { label: "Niger", category: "Country" }, 
   { label: "Nigeria", category: "Country" }, 
   { label: "Niue", category: "Country" }, 
   { label: "Norfolk Island", category: "Country" }, 
   { label: "Northern Mariana Islands", category: "Country" }, 
   { label: "Norway", category: "Country" }, 
   { label: "Oman", category: "Country" }, 
   { label: "Pakistan", category: "Country" }, 
   { label: "Palau", category: "Country" }, 
   { label: "Palestine", category: "Country" }, 
   { label: "Panama", category: "Country" }, 
   { label: "Papua New Guinea", category: "Country" }, 
   { label: "Paraguay", category: "Country" }, 
   { label: "Peru", category: "Country" }, 
   { label: "Philippines", category: "Country" }, 
   { label: "Pitcairn", category: "Country" }, 
   { label: "Poland", category: "Country" }, 
   { label: "Portugal", category: "Country" }, 
   { label: "Puerto Rico", category: "Country" }, 
   { label: "Qatar", category: "Country" }, 
   { label: "Romania", category: "Country" }, 
   { label: "Russian Federation", category: "Country" }, 
   { label: "Rwanda", category: "Country" }, 
   { label: "Saint Helena", category: "Country" }, 
   { label: "Saint Kitts and Nevis", category: "Country" }, 
   { label: "Saint Lucia", category: "Country" }, 
   { label: "Saint Pierre and Miquelon", category: "Country" }, 
   { label: "Saint Vincent and the Grenadines", category: "Country" }, 
   { label: "Samoa", category: "Country" }, 
   { label: "San Marino", category: "Country" }, 
   { label: "Sao Tome and Principe", category: "Country" }, 
   { label: "Saudi Arabia", category: "Country" }, 
   { label: "Senegal", category: "Country" }, 
   { label: "Serbia and Montenegro", category: "Country" }, 
   { label: "Seychelles", category: "Country" }, 
   { label: "Sierra Leone", category: "Country" }, 
   { label: "Singapore", category: "Country" }, 
   { label: "Slovakia", category: "Country" }, 
   { label: "Slovenia", category: "Country" }, 
   { label: "Solomon Islands", category: "Country" }, 
   { label: "Somalia", category: "Country" }, 
   { label: "South Africa", category: "Country" }, 
   { label: "South Georgia and the South Sandwich Islands", category: "Country" }, 
   { label: "Spain", category: "Country" }, 
   { label: "Sri Lanka", category: "Country" }, 
   { label: "Sudan", category: "Country" }, 
   { label: "Suriname", category: "Country" }, 
   { label: "Svalbard and Jan Mayen", category: "Country" }, 
   { label: "Swaziland", category: "Country" }, 
   { label: "Sweden", category: "Country" }, 
   { label: "Switzerland", category: "Country" }, 
   { label: "Syrian Arab Republic", category: "Country" }, 
   { label: "Taiwan", category: "Country" }, 
   { label: "Tajikistan", category: "Country" }, 
   { label: "Tanzania", category: "Country" }, 
   { label: "Thailand", category: "Country" }, 
   { label: "Timor-Leste", category: "Country" }, 
   { label: "Togo", category: "Country" }, 
   { label: "Tokelau", category: "Country" }, 
   { label: "Tonga", category: "Country" }, 
   { label: "Trinidad and Tobago", category: "Country" }, 
   { label: "Tunisia", category: "Country" }, 
   { label: "Turkey", category: "Country" }, 
   { label: "Turkmenistan", category: "Country" }, 
   { label: "Turks and Caicos Islands", category: "Country" }, 
   { label: "Tuvalu", category: "Country" }, 
   { label: "Uganda", category: "Country" }, 
   { label: "Ukraine", category: "Country" }, 
   { label: "United Arab Emirates", category: "Country" }, 
   { label: "United Kingdom", category: "Country" }, 
   { label: "Uruguay", category: "Country" }, 
   { label: "Uzbekistan", category: "Country" }, 
   { label: "Vanuatu", category: "Country" }, 
   { label: "Venezuela", category: "Country" }, 
   { label: "Viet Nam", category: "Country" }, 
   { label: "Virgin Islands, British", category: "Country" }, 
   { label: "Virgin Islands, U.S.", category: "Country" }, 
   { label: "Wallis and Futuna", category: "Country" }, 
   { label: "Western Sahara", category: "Country" }, 
   { label: "Yemen", category: "Country" }, 
   { label: "Zambia", category: "Country" }, 
   { label: "Zimbabwe", category: "Country" }
    ];

var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var submission = nameInputEl.value;
    let searchItem = data.find(o => o.label === submission);
    let categoryType = searchItem.category.toLowerCase();
    search(submission, categoryType);
};

async function search(name, type) {
let url = `/search/${type}/${name}`;
document.location.href = url;
}

searchBtnEl.addEventListener("click", formSubmitHandler);