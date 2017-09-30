/* BORK.JS */

// Set bork variables
var bork_table = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
var bork_borks = [];

// Create new bork with the function bork_new(big). big is either 0 for smol bork, or 1 for big bork.
function bork_new(big) {
	if (big == 0) {
		bork_borks.push("bork");
		console.info("created smol bork");
    } else if (big == 1) {
		bork_borks.push("BORK");
		console.info("created BIGE bork");
    } else {
		console.error("bork: " + big + " is not 0 or 1.");
    }
}

// Clear bork index with bork_reset().
function bork_reset() {
	bork_borks = [];
}
