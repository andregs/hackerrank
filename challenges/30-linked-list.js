'use strict';

// https://www.hackerrank.com/challenges/30-linked-list

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
    this.insert = function (head, data) {
        // BEGIN SOLUTION =====================================================

        const node = new Node(data);
        if (head === null) return node;
        for (var tail = head; tail.next !== null; tail = tail.next);
        tail.next = node;
        return head;

        // END SOLUTION =======================================================
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
    mylist.display(head);
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input_stdin_array = `
    4
    2
    3
    4
    1
    `.replace(/^\s+/mg, "").trim().split('\n');
    process.stdout.write(`Input:\n${input_stdin_array}\n\nOutput:\n`);
    main();
}
