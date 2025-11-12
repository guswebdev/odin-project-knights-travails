import { knightMoves } from "./knightMoves.js";

console.log(knightMoves([0, 0], [7, 7])); // [ 3, 3 ], [ 5, 4 ], [ 3, 5 ], [ 4, 3 ]
//console.log(knightMoves([3, 3], [4, 3])); // [ 3, 3 ], [ 5, 4 ], [ 3, 5 ], [ 4, 3 ]
//console.log(knightMoves([0, 0], [0, 0])); // [ 0, 0 ]
//console.log(knightMoves([0, 0], [7, 7])); //  0, 0 ], [ 2, 1 ], [ 4, 2 ], [ 6, 3 ], [ 4, 4 ], [ 6, 5 ], [ 7, 7 ]
//console.log(knightMoves([8, 2], [3, 6])); // Error: Las posiciones deben estar comprendidas entre 0 y 7, ambos inclusive.
/*
knightMoves([0, 0], [1, 2]);
Devuelve [[0,0],[1,2]]
*/

/*
knightMoves([0,0],[3,3]);
may return [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]].
*/

/*
knightMoves([3,3],[0,0])
may return [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]].
*/

/*
knightMoves([0,0],[7,7]) 
may return [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] 
or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]].
*/
