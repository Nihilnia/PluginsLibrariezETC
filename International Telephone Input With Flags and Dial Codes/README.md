
# [![Official Repo](https://raw.githubusercontent.com/Nihilnia/GithubBadges/e14078343be44292c313b478de702e34fcdf556e/Github.svg)](https://github.com/S0npaRi11/scrolls) [![Source](https://raw.githubusercontent.com/Nihilnia/GithubBadges/e14078343be44292c313b478de702e34fcdf556e/HTML.svg)](https://www.cssscript.com/fade-scroll-in-element/)


Description:
International Telephone Input is a useful JavaScript jQuery plugin that turns the standard input into an International Telephone Input with a national flag drop down list.
When clicking the dropdown list, it lists all the countries and their international dial codes next to their flags. Ideal for international visitors of your website.

Using Scrolls.js, you can animate HTML elements even if their CSS properties are not animatable.

How to use it:
1. Include the required intlTelInput.css in the head section of your page.
```
<link rel="stylesheet" href="build/css/intlTelInput.css">
```

2. Create a standard telephone input field.
```
<input type="tel" id="demo" placeholder="" id="telephone">
```

3. Include the International Telephone Input plugin at the bottom of your page.
```
<!-- Use as a Vanilla JS plugin -->
<script src="build/js/intlTelInput.min.js"></script>

<!-- Use as a jQuery plugin -->
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
<script src="build/js/intlTelInput-jquery.min.js"></script> 
```

4. Initialize the plugin and we're done.
```
// Vanilla Javascript
var input = document.querySelector("#telephone");
window.intlTelInput(input,({
  // options here
}));

// jQuery 
$("#telephone").intlTelInput({
  // options here
});
```

5. All default options to customize the plugin.
```
// whether or not to allow the dropdown
allowDropdown: true,

// when enabled (requires nationalMode to be disabled), the international dial code will be automatically inserted into the input in 3 situations: (A) upon initialisation, and (B) when the user selects a country from the dropdown, and (C) upon calling setCountry. Additionally, the plugin will listen for blur/submit events, and if the input only contains a dial code, it will automatically be removed to avoid submitting just that.
autoInsertDialCode: true,

// add a placeholder in the input with an example number for the selected country
autoPlaceholder: "polite",

// modify the auto placeholder
customPlaceholder: null,

// append menu to specified element
dropdownContainer: null,

// don't display these countries
excludeCountries: [],

// format the input value during initialisation and on setNumber
formatOnDisplay: true,

// geoIp lookup function
geoIpLookup: null,

// inject a hidden input with this name, and on submit, populate it with the result of getNumber
hiddenInput: "",

// initial country
initialCountry: "",

// localized country names e.g. { 'de': 'Deutschland' }
localizedCountries: null,

// don't insert international dial codes
nationalMode: true,

// display only these countries
onlyCountries: [],

// number type to use for placeholders
placeholderNumberType: "MOBILE",

// the countries at the top of the list. defaults to united states and united kingdom
preferredCountries: [ "us", "gb" ],

// display the country dial code next to the selected flag so it's not part of the typed number
separateDialCode: false,

// show/hide the flags
showFlags: true,

// specify the path to the libphonenumber script to enable validation/formatting
utilsScript: ""
```

6. API methods.
```
// destroy
instance.destroy();

// Get the extension part of the current number
var extension = instance.getExtension();

// Get the current number in the given format
var intlNumber = instance.getNumber();

// Get the type (fixed-line/mobile/toll-free etc) of the current number. 
var numberType = instance.getNumberType();

// Get the country data for the currently selected flag.
var countryData = instance.getSelectedCountryData();

// Get more information about a validation error. 
var error = instance.get<a href="https://www.jqueryscript.net/tags.php?/Validation/">Validation</a>Error();

// Vali<a href="https://www.jqueryscript.net/time-clock/">date</a> the current number
var isValid = instance.isValidNumber();

// Change the country selection
instance.selectCountry("gb");

// Insert a number, and update the selected flag accordingly.
instance.setNumber("+44 7733 123 456");

// Change the placeholderNumberType option.
instance..setPlaceholderNumberType("FIXED_LINE");

// Load the utils.js script (included in the lib directory) to enable formatting/validation etc.
window.intlTelInputGlobals.loadUtils("build/js/utils.js");

// Get all the country data
var countryData = window.intlTelInputGlobals.getCountryData();
```

7. Event handlers.
```
input.addEventListener("countrychange", function() {
  // do something with iti.getSelectedCountryData()
});

input.addEventListener("open:countrydropdown", function() {
  // triggered when the user opens the dropdown
});

input.addEventListener("close:countrydropdown", function() {
  // triggered when the user closes the dropdown
});
```
