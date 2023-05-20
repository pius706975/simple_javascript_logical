function palindrome1(str) {
    
    // convert the string to lowercase first and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[W_]/g,'')

    // reverse the string and check if it's the same as the original
    return str === str.split('').reverse().join('')
}

console.log(palindrome1("eye"));
console.log(palindrome1("joko"))

/* 
    /[W_]/g,'' explanation

    => `/`     : The forward slashes at the begining and end delimit the regular expression pattern.
    
    => `[\W_]` : This is a character class that matches any non-alphanumeric character or an underscore. Here is what each component means:
                => `\W`    : The \W shorthand matches any non-word character, which includes characters other than letters, digits, and underscores.
                => `_`     : Matches an underscore character.
                Together, [\W_] matches any non-alphanumeric character or underscore.
    
    => `/g`     :  This is a flag that indicates a global search. It allows the regular expression to match all occurrences of the pattern in the   input string rather than stopping at the first match.

    => `''`     : The second argument to the `replace()` method is an empty string `''`, which specifies the replacement for the matched characters. In this case, the matched non-alphanumeric characters will be replaced with an empty string, effectively removing them from the original string.

    In summary, the regular expression `/[\W_]/g` is used to find and remove any non-alphanumeric characters (including underscores) from a string. By using this regular expression in combination with the `replace()` method, the code ensures that only alphanumeric characters remain in the modified string.
*/