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
      if( i === j ){
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
window.countNRooksSolutions = function(n) {
  
  var count = 0;
  var aBoard = new Board({n:n});

  if(n===0 || n===1){
    return 1;
  }

  var helper = function(row){
    
    // exit for the recursion
    if(row === n){
      count++;
      return;
    }

    for(var i=0; i<n; i++){

      // place a queen at specific position
      aBoard.togglePiece(row, i);

      // let it go deeper(recursive) if it fits with condition(rook: vertical && horizontal)
      if( !aBoard.hasAnyRowConflicts() && !aBoard.hasAnyColConflicts() ){

        // recursion
        helper(row + 1);
      }
      
      // toggling out --> recursive item that reached the end(n===row) cannot approach here
      aBoard.togglePiece(row, i);
    }
  };

  // put inital location for the proising funciton
  helper(0);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  if(n === 0 || n === 1){
    return [[1]];
  }

  if(n === 2){
    return [[0, 0], [0, 0]];
  }

  if(n > 3){

    var bigArr = [];
    var subArr = [];

    var count = 0;
    var aBoard = new Board({n:n});

    var helper = function(row){
      

      if(row === n){
        if(subArr.length === n){
          bigArr.push(subArr);
          subArr = [];
        }else{
          subArr = [];
        }
        return;
      }

      for(var i=0; i<n; i++){
        subArr.push(i); 
        aBoard.togglePiece(row, i);

        if( !aBoard.hasAnyRowConflicts() && !aBoard.hasAnyColConflicts() && !aBoard.hasAnyMajorDiagonalConflicts() && !aBoard.hasAnyMinorDiagonalConflicts()){
          // row++;
          helper(row + 1);
          // console.log(i);
        }

        subArr.pop();
        aBoard.togglePiece(row, i);
      }
    };

    helper(0);
      

    var oneOfSolution = bigArr[0];
    var bBoard = new Board({n:n});
    for(var m=0; m<oneOfSolution.length; m++){
      bBoard.togglePiece(m, oneOfSolution[m]);
    }

    var solutionBoardObj = bBoard.attributes
    var solutionMatrix = [];

    for( var key in solutionBoardObj ){
      solutionMatrix.push(solutionBoardObj[key]);
    }

    var sliced = solutionMatrix.splice(0, solutionMatrix.length-1);
    return sliced;
  }
  //create a board instance size

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //return solution;

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var bigArr = [];
  var subArr = [];

  var count = 0;
  var aBoard = new Board({n:n});
  if(n===0 || n===1){
    return 1;
  }

  var helper = function(row){
    

    if(row === n){
      // if(subArr.length === n){
        bigArr.push(subArr);
        console.log(JSON.stringify(subArr));
        subArr = [];
      // }else{
      //   subArr = [];
      // }
      count++;
      return;
    }

    for(var i=0; i<n; i++){
      subArr.push(i); 
      aBoard.togglePiece(row, i);

      if( !aBoard.hasAnyRowConflicts() && !aBoard.hasAnyColConflicts() && !aBoard.hasAnyMajorDiagonalConflicts() && !aBoard.hasAnyMinorDiagonalConflicts()){
        // row++;
        helper(row + 1);
        // console.log(i);
      }

      subArr.pop();
      aBoard.togglePiece(row, i);
    }
  };

  helper(0);
    

  // console.log(bigArr);
  return count;
};
