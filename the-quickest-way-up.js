'use strict';

// https://www.hackerrank.com/challenges/the-quickest-way-up
// tip: this is hard unless you know graph data structure and
// also graph search algorithms (breadth-first and depth-first)

function processData(input) {
    const N = 100;
    let total = input.shift();
    while(total-- > 0) {
        let store = new Array(N + 1);
        let ladders = input.shift();
        for (let i = 0; i < ladders; i++) {
            let edge = input.shift().split(' ');
            let from = edge[0];
            store[from] = edge[1] - from;
        }
        let snakes = input.shift();
        for (let i = 0; i < snakes; i++) {
            let edge = input.shift().split(' ');
            let from = edge[0];
            store[from] = edge[1] - from;
        }
        let entry = {pos: 1, step: 0};
        let queue = [entry];
        let visited = new Array(N + 1);
        let hasRes = false;
        while(queue.length > 0) {
            entry = queue.shift();
            if (entry.pos == N) {
                process.stdout.write(entry.step + "\n");
                hasRes = true;
                break;
            }
            if (visited[entry.pos] == true) {
                continue;
            }
            visited[entry.pos] = true;
            for (let i = 1; i <= 6 && entry.pos + i <= N; i++) {
                let nextPos = entry.pos + i;
                let nextEntry = {pos: nextPos, step: entry.step + 1};
                if (store[nextPos] !== undefined) {
                    nextEntry.pos += store[nextPos];
                }
                queue.push(nextEntry);
            }
        }
        if (hasRes === false) {
            process.stdout.write(-1 + "\n");
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split("\n"));
});
