var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoInsertDialCode: true,
  // autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipapi.co/json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        callback(data.country_code);
      })
      .catch(function () {
        callback("us");
      });
  },
  // hiddenInput: "full_number",

  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  // separateDialCode: true,
  // showFlags: false,

  utilsScript: "./countryCode/build/js/utils.js",
});
