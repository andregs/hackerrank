'use strict';

// https://www.hackerrank.com/challenges/30-binary-search-trees
// tip: do a breadth-first traversal to count each level

function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }
        if (data <= root.data) {
            if (root.left) this.insert(root.left, data);
            else root.left = new Node(data);
        } else {
            if (root.right) this.insert(root.right, data);
            else root.right = new Node(data);
        }
        return this.root;
    };

    this.getHeight = function (root) {
        // BEGIN SOLUTION /////////////////////////////////////////////////////

        let height = -1, nodeCount;
        const visiting = [root];

        while (nodeCount = visiting.length) {
            height++;
            while (nodeCount-- > 0) {
                const node = visiting.shift();
                if (node.left) visiting.push(node.left);
                if (node.right) visiting.push(node.right);
            }
        }

        return height;

        // END SOLUTION ///////////////////////////////////////////////////////
    };
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

function main() {
    var tree = new BinarySearchTree();
    var root = null;
    var values = input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++)
        root = tree.insert(root, values[i]);

    process.stdout.write('' + tree.getHeight(root));
}

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    7
    3
    5
    2
    1
    4
    6
    7
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
