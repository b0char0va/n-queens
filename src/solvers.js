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


window.findNRooksSolution = function(n) {
  var solution = [];
   
  for(var i = 0; i < n; i++){
    var subArray = [];
    for(var j = 0; j < n; j++){
      if( i === j){
        subArray.push(1);
      } else{
        subArray.push(0);
      }
    }
    solution.push(subArray);
  }
  
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(num) {
  var solutionCount = 0;
  var solutionArray = [];
  var rooks = 0;
  var chessboard = new Board({n: 4});
  var i = 0;
  var j = 0;

  function helper(chessboard) {
    chessboard.togglePiece(i, j);
    helper2(chessboard);


  }

  function helper2(chessboard){
    for(var i = 0; i < num; i++) {
      for(var j = 0; j < num; j++) {
        if(!chessboard.attributes[i][j] && !(chessboard.togglePiece(i,j)).hasAnyRowConflicts() && !(chessboard.togglePiece(i,j)).hasAnyColConflicts()){
          chessboard.togglePiece(i,j);
        }
      }
    }

  }

  helper(chessboard);
  


  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
