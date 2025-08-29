const string =
" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

function remove_non_alphabet(complex_string) {
    const string_alphabet = complex_string.replace(/[^a-zA-Z ]/g, "");
    const string_no_extra_space = string_alphabet.replace(/\s+/g, " ").trim();
    const string_lowercase = string_no_extra_space.toLowerCase();
    return string_lowercase
}

console.log(remove_non_alphabet(string));
