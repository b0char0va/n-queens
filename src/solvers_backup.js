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
  //console.log(chessboard.attributes);
  
//------------
  
  var subArr = [];


  var nodesArr = [];
  
  function nodeMaker(chessboard){
    for(var i=0; i<4; i++){
      // {0: 0, 1: [0, 1, 2]}
      var node = {}
      node[i] = i;
      node[i+1] = childSetMaker(num);
      nodesArr.push( node );
    }
  }
  

  function childSetMaker(num){
    var result = [];
    for(var i=0; i<num; i++){
      result.push(i);
    }
    return result;
  }


  for(var i=0; i<nodesArr.length; i++){
    
    helper(nodesArr[i][i+1], i+1)


  }

  function helper(arr, row){
    //[0, 1, 2, 3]
    // 1

    // [[1, 0], [1, 1], [1, 2], [1, 3]]
    var bigArr = [];
    for(var i=0)
    
    var okToGo;
    
    fn(row, arr[0])
    
    return okToGo;
  }
  
    // helper(node);
    // [{1:1, 2:[0, 1, 2]}, {1:2, 2: [0, 1, 2]}]
    
    


  // helper(node[i+1]);

  // if(subArr.length === num ){
  //   solutionArray.push(subArr);
  // }
  
  // subArr = []
  

  //----------------
  
  // var j = 0;

  // function helper(matrix, numberOfRooks) {
  //   if(numberOfRooks === num) {
  //     solutionCount++;
  //     return;
  //   }
  //   if(numberOfRooks <= num){
  //       matrix[0][j]; 
  //       j++;  
  //   }
  //   if(!this.hasAnyRowConflicts() && !this.hasAnyColConflicts()){
        
    
  //   }
  //   helper(matrix, rooks, );
    
    


  // }

  // helper(chessboard.attributes, rooks);

  
  // return 

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
