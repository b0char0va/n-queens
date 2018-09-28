/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// n = 2 
// [ [1,0],[0,1] ] 


window.findNRooksSolution = function (n) {
    var solution = [];

    for (var i = 0; i < n; i++) {
        var subArray = [];
        for (var j = 0; j < n; j++) {
            if (i === j) {
                subArray.push(1);
            } else {
                subArray.push(0);
            }
        }
        solution.push(subArray);
    }
    // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (num) {

    var chessboard = new Board({n: num});

    function helper(b, i) {
        if (i === num) {
            return 1;
        }
        var count = 0;
        for (var k = 0; k < num; k++) {
            b.togglePiece(i, k);
            if (!b.hasAnyRowConflicts() && !b.hasAnyColConflicts()) {
                count += helper(b, i + 1);
            }
            b.togglePiece(i, k);
        }
        return count;
    }

    return helper(chessboard, 0);
    // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
    // return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (num) {
    var b = new Board({n: num});
    var matrix = [];
    if(num === 0){
        return matrix;
    }
    if(num === 2){
        return [[],[]];
    }
    if(num === 3){
        return [[],[],[]];
    }
    function helper(i) {
        if (i === num) {
            for (var key in b.attributes) {
                matrix.push(b.attributes[key]);
            }
            return;
        }
        for (var k = 0; k < num; k++) {
            b.togglePiece(i, k);
            if (!b.hasAnyQueensConflicts()) {
                helper(i + 1);
                if (matrix.length > 0) {
                    return;
                }
            }
            b.togglePiece(i, k);
        }
    }
    helper(0);
    matrix.pop();
    return matrix;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (num) {
    // var solutionCount = undefined; //fixme
    var chessboard = new Board({n: num});

    function helper(b, i) {
        if (i === num) {
            return 1;
        }
        var count = 0;
        for (var k = 0; k < num; k++) {
            b.togglePiece(i, k);
            if (!b.hasAnyRowConflicts() && !b.hasAnyColConflicts() && !b.hasAnyMajorDiagonalConflicts() && !b.hasAnyMinorDiagonalConflicts()) {
                count += helper(b, i + 1);
            }
            b.togglePiece(i, k);
        }
        return count;
    }

    return helper(chessboard, 0);

    // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
    // return solutionCount;
};
