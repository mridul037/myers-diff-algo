const readline = require('readline');
const RED = '\x1b[31m'; // Red color
const GREEN = '\x1b[32m'; // Green color
const RESET = '\x1b[0m'; // Reset color

// Myers Diff Algorithm
function myersDiff(a, b) {
    const n = a.length;
    const m = b.length;
    const max = n + m;
    const v = Array(2 * max + 1).fill(-1); // Initialize path vector
    let d;

    for (d = 0; d <= max; d++) {
        for (let k = -d; k <= d; k += 2) {
            let x;
            if (k === -d || (k !== d && v[k - 1 + max] < v[k + 1 + max])) {
                x = v[k + 1 + max]; // Move right
            } else {
                x = v[k - 1 + max] + 1; // Move down
            }
            let y = x - k;

            // Extend the path along the diagonal for matches
            while (x < n && y < m && a[x] === b[y]) {
                x++;
                y++;
            }
            v[k + max] = x;

            // If we've reached the end of both strings, backtrack to build diff
            if (x >= n && y >= m) {
                return buildDiff(a, b, v, d, max);
            }
        }
    }
}

// Build the diff by backtracking through the computed path
function buildDiff(a, b, v, d, max) {
    const diff = [];
    let x = a.length;
    let y = b.length;

    for (let i = d; i > 0; i--) {
        const k = x - y;
        const prevK = (k === -i || (k !== i && v[k - 1 + max] < v[k + 1 + max])) ? k + 1 : k - 1;
        const prevX = v[prevK + max];
        const prevY = prevX - prevK;

        // If there's a match on the diagonal, add it as "equal"
        while (x > prevX && y > prevY) {
            diff.unshift({ type: 'equal', value: a[--x] });
            y--;
        }

        // Handle additions and removals based on path
        if (x > prevX) {
            diff.unshift({ type: 'remove', value: a[--x] });
        } else if (y > prevY) {
            diff.unshift({ type: 'add', value: b[--y] });
        }
    }

    // Handle any remaining characters at the start of `a` or `b`
    while (x > 0) diff.unshift({ type: 'remove', value: a[--x] });
    while (y > 0) diff.unshift({ type: 'add', value: b[--y] });

    return diff;
}

// Set up command line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input strings
rl.question('Enter the first string: ', (firstString) => {
    rl.question('Enter the second string: ', (secondString) => {
        const a = firstString.split('');
        const b = secondString.split('');
        const result = myersDiff(a, b);

        // Format the output string: no prefix for "equal" values
        
        let output = result.map(change => {
            if (change.type === 'remove') {
                return `${RED}-${change.value}${RESET}`; // Color removals red
            } else if (change.type === 'add') {
                return `${GREEN}+${change.value}${RESET}`; // Color additions green
            } else {
                return change.value; // Return equal value without color
            }
        }).join(' ');
      
        let output2 = '';
result.forEach(change => {
    if (change.type === 'remove') {
        output2 += `${RED}${change.value}${RESET}`; // Red for removed characters
    } else if (change.type === 'add') {
        output2 += `${GREEN}${change.value}${RESET}`; // Green for added characters
    } else {
        output2 += `${change.value}`; // No color for equal characters
    }
});

        console.log('Differences:', output);
        console.log('Inline output:', output2);

        rl.close();
    });
});
