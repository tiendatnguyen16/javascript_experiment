function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $&	Inserts the matched substring so the replacement will be "\" and the matched special character.
}

const input = "Hello.world+";
const escaped = escapeRegExp(input);
console.log(escaped); // Output: "Hello\.world\+" // matched special characters here are "." and "+"