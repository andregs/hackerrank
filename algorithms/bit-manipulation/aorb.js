'use strict';

// https://www.hackerrank.com/challenges/aorb
// tip: be aware of HUGE numbers

function main() {
    input = input.split('\n');
    let output = '';

    for (let i = 1; --input[0] >= 0; i += 4) {
        // parse input
        let k = input[i + 0];
        let a = input[i + 1];
        let b = input[i + 2];
        let c = input[i + 3];
        // process.stderr.write(`${k} ${a} ${b} ${c}\n`);

        // add leading zeros, so all numbers have the same length
        const length = Math.max(a.length, b.length, c.length);
        a = padLeft(a, length).split('');
        b = padLeft(b, length).split('');
        c = padLeft(c, length).split('');
        // process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n`);

        // mandatory swaps
        let swaps = 0;
        for (let i = 0; i < length; i++) {
            let abin = padLeft(parseInt(a[i], 16).toString(2), 4).split('');
            let bbin = padLeft(parseInt(b[i], 16).toString(2), 4).split('');
            let cbin = padLeft(parseInt(c[i], 16).toString(2), 4).split('');

            for (let j = 0; j < 4; j++) {
                if (cbin[j] === '0') {
                    swaps += +abin[j] + +bbin[j];
                    abin[j] = bbin[j] = '0';
                } else if (abin[j] === '0' && bbin[j] === '0') {
                    bbin[j] = '1';
                    swaps++;
                }
            }

            a[i] = parseInt(abin.join(''), 2).toString(16);
            b[i] = parseInt(bbin.join(''), 2).toString(16);
        }

        // process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n= ${swaps}\n`);

        if (swaps > k) {
            output += '-1\n';
        } else {

            // try to reduce 'a' as much as possible
            for (let i = 0; i < length && swaps < k; i++) {
                let abin = padLeft(parseInt(a[i], 16).toString(2), 4).split('');
                let bbin = padLeft(parseInt(b[i], 16).toString(2), 4).split('');
                let cbin = padLeft(parseInt(c[i], 16).toString(2), 4).split('');

                for (let j = 0; j < 4 && swaps < k; j++) {
                    if (cbin[j] === '1') {
                        if (abin[j] === '1' && bbin[j] === '1') {
                            if (swaps < k) {
                                abin[j] = '0';
                                swaps++;
                            }
                        } else if (bbin[j] === '0' && swaps < k - 1) {
                            abin[j] = '0', bbin[j] = '1';
                            swaps += 2;
                        }
                    }
                }

                a[i] = parseInt(abin.join(''), 2).toString(16);
                b[i] = parseInt(bbin.join(''), 2).toString(16);
            }

            // process.stderr.write(`a ${a.join('')}\nb ${b.join('')}\nc ${c.join('')}\n= ${swaps}\n`);
            output += `${leftTrim(a.join('').toUpperCase())}\n`;
            output += `${leftTrim(b.join('').toUpperCase())}\n`;
        }
    }
    process.stdout.write(output);
}

function padLeft(n, zeros) {
    while (n.length < zeros) n = '0' + n;
    return n;
}

function leftTrim(n) {
    for (var i = 0; n[i] === '0'; i++);
    return n.slice(i) || '0';
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', main);

if (process.argv[2] === 'test') {
    process.stdin.pause();
    input = `
    5
    251
    5A302CEBBF618BEF55645BBC1AFD79C03F05BE16E7862
    457BCC077D82C59529919ED8F366BC8210DDCE43BD572
    8D4766143946FA2B34C31AFFE2AB82E6F2E58F9B8D278
    172
    1B8EE98D97F32750E43C9BB37309A8DC35A1E3E7AEBC5
    DD350FEBA12D2B7A83EDEFC1E3BCE71F4544420F42C6E
    8067E45E06C3182991DE523722B4E12229A0DFED6A072
    76
    4C3EA80D02FB6ED90F2AFFAEC08C7BF87261B6FB8E6EC
    C7D297281041819301A27CDDB859F362B354A7DC71DF2
    2327D5E92B4B0EA44CF713180DF2BF41279FC79E3D93B
    53
    9F0661A8AA59C0812A8BA423250C9CF0BF7211ABBF480
    49271D15F47553E13EC25E368E283A803A747996D0B24
    F37809DED47B6FE07E31678F0EC0AF432BB25912D8D37
    4
    7E607DCF2DE21420A8DD898FC7D2E7EE59061D839F447
    BAFDF5DB3D07497EE094A49ADAAE60787268F9C4A613B
    FEFDFDDF3DE75D7EE8DDAD9FDFFEE7FE7B6EFDC7BF57F
    `.replace(/^\s+/mg, "").trim();
    process.stdout.write(`Input:\n${input}\n\nOutput:\n`);
    main();
}
