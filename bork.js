/* BORK.JS */

// Set bork variables
var bork_table = "abcdefghijklmnopqrstuvwxyz .!?,\n";
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

// Sets text of item to bork buffer
function bork_change(id) {
	if (document.getElementById(id) != null) {
		document.getElementById(id).textContent = bork_buffer
		bork_buffer = "";
    } else {
		console.error("bork: item with " + id + " does not exist")
    }
	bork_buffer = "";
}
