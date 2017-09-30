/* BORK.JS */
// Set bork variables
var bork_table = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", ".", "!", "?", ",", "\n"]
var bork_borks = [];
var bork_chain = "";
var bork_dec = 0;
var bork_buffer = "";

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
    if(bork_borks == []) {
        console.warning("bork: index already empty.")
    }
}

// Take bork index and add it to the buffer
function bork_set() {
    if (bork_borks.length == 5) {
        for (i = 0; i < 5; i++) {
            if (bork_borks[i] == "bork") {
                bork_chain += "0";
            } else if (bork_borks[i] == "BORK") {
                bork_chain += "1"
            }
        }
        bork_dec = parseInt(bork_chain, 2);
        bork_buffer += bork_table[bork_dec];
        bork_chain = "";
        bork_borks = [];
    } else {
        console.error("bork: bork string not 5 borks")
    }
}
// Print out then clear bork buffer
function bork_print() {
    console.log("Bork buffer: " + bork_buffer);
    bork_buffer = "";
}
