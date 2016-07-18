'use strict';

// https://www.hackerrank.com/challenges/30-linked-list-deletion

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
function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {

    // BEGIN SOLUTION /////////////////////////////////////////////////////
    this.removeDuplicates = function (head) {
        let current = head;
        while (current && current.next) {
            if (current.data === current.next.data)
                current.next = current.next.next;
            else
                current = current.next;
        }
        return head;
    };
    // END SOLUTION ///////////////////////////////////////////////////////

    this.insert = function (head, data) {
        var p = new Node(data);
        if (head === null) {
            head = p;
        }
        else if (head.next === null) {
            head.next = p;
        }
        else {
            var start = head;
            while (start.next !== null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;

    };

    this.display = function (head) {
        var start = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    };
}
function main() {
    var T = parseInt(readLine());
    var head = null;
    var mylist = new Solution();
    for (let i = 0; i < T; i++) {
        var data = parseInt(readLine());
        head = mylist.insert(head, data);
    }
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input_stdin = `
    6
    1
    2
    2
    3
    3
    4
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input_stdin}\n\nOutput:\n`);
    input_stdin_array = input_stdin.split("\n");
    main();
}
