'use strict';

// https://www.hackerrank.com/challenges/30-queues-stacks

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// BEGIN SOLUTION =====================================================
function Solution() {
    this.stack = [];
    this.queue = [];

    this.pushCharacter = this.stack.push;
    this.popCharacter = this.stack.pop;
    this.enqueueCharacter = this.queue.push;
    this.dequeueCharacter = this.queue.shift;
}
// END SOLUTION =======================================================

function main() {
    // read the string s
    var s = readLine();
    var len = s.length;
    // create the Solution class object p
    var obj = new Solution();
    //push/enqueue all the characters of string s to stack
    for (var i = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome = true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for (let i = 0; i < len / 2; i++) {
        if (obj.popCharacter() !== obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }
    //finally print whether string s is palindrome or not

    if (isPalindrome)
        process.stdout.write("The word, " + s + ", is a palindrome.\n");
    else
        process.stdout.write("The word, " + s + ", is not a palindrome.\n");
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input_stdin_array = `
    racecar
    `.replace(/^\s+/mg, "").trim().split('\n');
    process.stdout.write(`Input:\n${input_stdin_array}\n\nOutput:\n`);
    main();
}
