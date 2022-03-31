{
  //WHITE
  var WRook1 = {
    color: 'W',
    type: 'rook',
    position: [0, 0],
    moves: [],
    alreadyMoved: false
  };

  var WRook2 = {
    color: 'W',
    type: 'rook',
    position: [7, 0],
    moves: [],
    alreadyMoved: false
  };

  var WKnight1 = {
    color: 'W',
    type: 'knight',
    position: [1, 0],
    moves: [],
  };

  var WKnight2 = {
    color: 'W',
    type: 'knight',
    position: [6, 0],
    moves: [],
  };

  var WBishop1 = {
    color: 'W',
    type: 'bishop',
    position: [2, 0],
    moves: [],
  };

  var WBishop2 = {
    color: 'W',
    type: 'bishop',
    position: [5, 0],
    moves: [],
  };

  var WQueen = {
    color: 'W',
    type: 'queen',
    position: [3, 0],
    moves: [],
  };

  var WKing = {
    color: 'W',
    type: 'king',
    position: [4, 0],
    moves: [],
    alreadyMoved: false
  };

  var WPawn1 = {
    color: 'W',
    type: 'pawn',
    position: [0, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn2 = {
    color: 'W',
    type: 'pawn',
    position: [1, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn3 = {
    color: 'W',
    type: 'pawn',
    position: [2, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn4 = {
    color: 'W',
    type: 'pawn',
    position: [3, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn5 = {
    color: 'W',
    type: 'pawn',
    position: [4, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn6 = {
    color: 'W',
    type: 'pawn',
    position: [5, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn7 = {
    color: 'W',
    type: 'pawn',
    position: [6, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn8 = {
    color: 'W',
    type: 'pawn',
    position: [7, 1],
    moves: [],
    jump: 'never'
  };

  //BLACK
  var BRook1 = {
    color: 'B',
    type: 'rook',
    position: [7, 7],
    moves: [],
    alreadyMoved: false
  };

  var BRook2 = {
    color: 'B',
    type: 'rook',
    position: [0, 7],
    moves: [],
    alreadyMoved: false
  };

  var BKnight1 = {
    color: 'B',
    type: 'knight',
    position: [6, 7],
    moves: [],
  };

  var BKnight2 = {
    color: 'B',
    type: 'knight',
    position: [1, 7],
    moves: [],
  };

  var BBishop1 = {
    color: 'B',
    type: 'bishop',
    position: [5, 7],
    moves: [],
  };

  var BBishop2 = {
    color: 'B',
    type: 'bishop',
    position: [2, 7],
    moves: [],
  };

  var BQueen = {
    color: 'B',
    type: 'queen',
    position: [3, 7],
    moves: [],
  };

  var BKing = {
    color: 'B',
    type: 'king',
    position: [4, 7],
    moves: [],
    alreadyMoved: false
  };

  var BPawn1 = {
    color: 'B',
    type: 'pawn',
    position: [7, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn2 = {
    color: 'B',
    type: 'pawn',
    position: [6, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn3 = {
    color: 'B',
    type: 'pawn',
    position: [5, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn4 = {
    color: 'B',
    type: 'pawn',
    position: [4, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn5 = {
    color: 'B',
    type: 'pawn',
    position: [3, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn6 = {
    color: 'B',
    type: 'pawn',
    position: [2, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn7 = {
    color: 'B',
    type: 'pawn',
    position: [1, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn8 = {
    color: 'B',
    type: 'pawn',
    position: [0, 6],
    moves: [],
    jump: 'never'
  };
}

var turn = 'W';
var checkedKing = 'x';
var legalMoves = [];
var checkpoint = 0
var checkpoint2 = 0
var filteredLegalMoves = []
var finalMove = []

let a = [WRook1, WPawn1, 'x', 'x', 'x', 'x', BPawn8, BRook2];
let b = [WKnight1, WPawn2, 'x', 'x', 'x', 'x', BPawn7, BKnight2];
let c = [WBishop1, WPawn3, 'x', 'x', 'x', 'x', BPawn6, BBishop2];
let d = [WQueen, WPawn4, 'x', 'x', 'x', 'x', BPawn5, BQueen];
let e = [WKing, WPawn5, 'x', 'x', 'x', 'x', BPawn4, BKing];
let f = [WBishop2, WPawn6, 'x', 'x', 'x', 'x', BPawn3, BBishop1];
let g = [WKnight2, WPawn7, 'x', 'x', 'x', 'x', BPawn2, BKnight1];
let h = [WRook2, WPawn8, 'x', 'x', 'x', 'x', BPawn1, BRook1];
let board = [a, b, c, d, e, f, g, h];

//START
updateGUI();
checkSquare();

// CHECKSQUARE  
function checkSquare() {
  legalMoves = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] !== 'x') {
        let mouvsPossiblesPourPieceI = deplacement3(deplacement1et2(x, y))
        for (let i = 0; i < mouvsPossiblesPourPieceI.length; i++) {
          legalMoves.push(mouvsPossiblesPourPieceI[i])
        }
      }
    }
  }
  let legalMovesPruned = [];
  legalMoves.forEach(x => {

    if (board[x[0]][x[1]].color == turn) {
      legalMovesPruned.push(x);
    }
  });
  legalMoves = legalMovesPruned
  checkMate();// call checkMate
};

function checkMate() {
  if (legalMoves == false) {
    if (checkedKing == 'W') {
      window.alert('Black wins !');
    } else if (checkedKing == 'B') {
      window.alert('White wins !');
    } else {
      window.alert('Pat !');
    }
  };

  if (turn == 'W') {
    console.log('White to play')
  }
  if (turn == 'B') {
    console.log('Black to play')
  };
}


function deplacement1et2(x, y) {
  let type = board[x][y].type
  let color = board[x][y].color
  let deplacement1 = []

  //Rook movements
  function rookcheck(a, b, c) {
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        deplacement1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        deplacement1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  //Knight movements
  function knightcheck(a, b) {
    if (board[x + a] == undefined || board[x + a][y + b] == undefined || board[x + a][y + b].color == color) { } else {
      deplacement1.push([x + a, y + b, 0])
    }
  }

  //Bishop movements
  function bishopcheck(a, b, c) {
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        deplacement1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        deplacement1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  //King movements
  function kingcheck(a, b) {
    if (board[x + 1 * a] == undefined || board[x + 1 * a][y + 1 * b] == undefined || board[x + 1 * a][y + 1 * b].color == color) { } else {
      deplacement1.push([x + 1 * a, y + 1 * b, 0])
    }
  }

  //Pawn movements (color = W => a = 1, color = B => a = -1)
  function pawncheck(a) {
    if (board[x][y + 1 * a] == 'x') {
      deplacement1.push([x, y + 1 * a, 4])  //Mouvement simple avant
    };
    if (3.5 - 2.5 * a == y && board[x][y + 1 * a] == 'x' && board[x][y + 2 * a] == 'x') {
      deplacement1.push([x, y + 2 * a, 0])  //Mouvement double avant
    };

    for (let j = -1; j < 2; j++) {
      if (board[x + 1 * j] !== undefined && board[x + 1 * j][y + 1 * a] !== undefined && board[x + 1 * j][y + 1 * a] !== 'x' && board[x + 1 * j][y + 1 * a].color !== color) {
        deplacement1.push([x + 1 * j, y + 1 * a, 0])  //Mange
      } else if (board[x + 1 * j] !== undefined && board[x + 1 * j][y] !== 'x' && board[x + 1 * j][y].jump == 'jumping') {
        deplacement1.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
      };
      j++
    }
  };

  if (type == 'rook') {

    rookcheck(0, 1, 7 - y)  //Haut
    rookcheck(0, -1, y) //Bas
    rookcheck(1, 0, 7 - x)  //Droite
    rookcheck(-1, 0, x) //Gauche

  } else if (type == 'knight') {

    knightcheck(2, 1);
    knightcheck(1, 2);
    knightcheck(-1, 2);
    knightcheck(-2, 1);
    knightcheck(1, -2);
    knightcheck(2, -1);
    knightcheck(-1, -2);
    knightcheck(-2, -1);

  } else if (type == 'bishop') {

    bishopcheck(1, 1, 7 - Math.max(x, y)) //Haut Droite
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))  //Bas Droite
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y)) //Bas Gauche
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))  //Haut Gauche

  } else if (type == 'queen') {
    //Mouvement "Tour" de la Dame
    rookcheck(0, 1, 7 - y)  //Haut
    rookcheck(0, -1, y) //Bas
    rookcheck(1, 0, 7 - x)  //Droite
    rookcheck(-1, 0, x) //Gauche
    //Mouvement "Fou" de la Dame
    bishopcheck(1, 1, 7 - Math.max(x, y)) //Haut Droite
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))  //Bas Droite
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y)) //Bas Gauche
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))  //Haut Gauche

  } else if (type == 'king') {
    kingcheck(1, 1);
    kingcheck(1, 0);
    kingcheck(0, 1);
    kingcheck(-1, 1);
    kingcheck(-1, 0);
    kingcheck(-1, -1);
    kingcheck(1, -1);
    kingcheck(0, -1);

    //Pour les Blancs
    if (board[x][y].color == 'W') {
      if (board[x][y].alreadyMoved == false && board[0][0].alreadyMoved == false && board[0][0] == WRook1
        && board[1][0] == 'x' && board[2][0] == 'x' && board[3][0] == 'x') {  //Grand roque 
        deplacement1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][0].alreadyMoved == false && board[7][0] == WRook2
        && board[5][0] == 'x' && board[6][0] == 'x') { //Petit roque
        deplacement1.push([x + 2, y, 2])
      }
    };

    //Pour les Noirs
    if (board[x][y].color == 'B') {
      if (board[x][y].alreadyMoved == false && board[0][7].alreadyMoved == false && board[0][7] == BRook2
        && board[1][7] == 'x' && board[2][7] == 'x' && board[3][7] == 'x') {  //Grand roque
        deplacement1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][7].alreadyMoved == false && board[7][7] == BRook1
        && board[5][7] == 'x' && board[6][7] == 'x') { //Petit roque
        deplacement1.push([x + 2, y, 2])
      }
    };

  } else if (type == 'pawn') {

    if (board[x][y].color == 'W') {
      pawncheck(1);
    };
    if (board[x][y].color == 'B') {
      pawncheck(-1);
    };

  } else if (board[x][y] == 'x') {
    console.log('Ceci est une case vide')
    console.log(x, y)
    console.log(board[x][y])
  } else {
    console.log("Cette pièce a un type qui n'existe pas !")
  }
  //DEP 2
  // If any coordinate is less than 0 or greater than 7, remove it
  for (i = 0; i < deplacement1.length; i++) {
    if (deplacement1[i][0] < 0 || deplacement1[i][0] > 7 || deplacement1[i][1] < 0 || deplacement1[i][1] > 7) {
      deplacement1.splice(i, 1);
      i--
    }
  };

  for (let i = 0; i < deplacement1.length; i++) { //Rajoute x et y au début de chaque élément de deplacement1
    deplacement1[i].unshift(x, y) //ici, deplacement1 renvoi tous les déplacements possibles en pratique sans compter l'échec
  }

  return deplacement1
};

function deplacement3(deplacement1) {
  //deplacement1 est l'array de tous les mouvements possibles d'une pièce
  let depOutput = JSON.parse(JSON.stringify(deplacement1));
  for (let w = 0; w < depOutput.length; w++) {  //Pour chaque array de deplacement1    
    let boardT = JSON.parse(JSON.stringify(board));
    if (depOutput[w] !== undefined) {
      updateT(depOutput[w][0], depOutput[w][1], depOutput[w][2], depOutput[w][3], depOutput[w][4]); //UpdateT va update le boardT en fonction du move w
      //On veut maintenant checker si le roi peut être atteint avec ce move. Pour le roque, on checkera aussi si sa case et la case intermédiaire peuvent l'être 
      checkCube();
      //On lance checkCube.
      function updateT(x, y, x2, y2, z) {
        boardT = JSON.parse(JSON.stringify(board));
        boardT[x2].splice(y2, 1, boardT[x][y]);
        boardT[x].splice(y, 1, 'x');  // suppr piece sur xy

        // Z en passant
        if (z == 1) {                                                     
          boardT[x2].splice(y, 1, 'x');
        } else if (z == 2) {
          boardT[5].splice(y, 1, boardT[7][y]); // Z petit roque copie tour
          boardT[7].splice(y, 1, 'x');  // Z petit roque suppr tour
        } else if (z == 3) {
          boardT[3].splice(y, 1, boardT[0][y]); // Z grand roque copie tour
          boardT[0].splice(y, 1, 'x');  // Z grand roque suppr tour
        }
      };

      function checkCube() {  //checkCube prend la pos des rois et teste si une pièce adverse peut l'atteindre
        function KingPos() {  //checkKingPos prend le boardT et renvoie la position des rois
          for (let KingPosx = 0; KingPosx < 8; KingPosx++) {
            for (let KingPosy = 0; KingPosy < 8; KingPosy++) {
              if (boardT[KingPosx][KingPosy] !== 'x' && boardT[KingPosx][KingPosy].type == 'king') {
                if (boardT[KingPosx][KingPosy].color == turn) {
                  AKingPos.push(KingPosx, KingPosy)
                } else {
                  EKingPos.push(KingPosx, KingPosy)
                }
              }
            }
          }
        };
        let AKingPos = [];
        let EKingPos = [];
        KingPos();
        let Spliceit = 0;

        function deplacement1et2T(x, y) {
          let type = boardT[x][y].type
          let color = boardT[x][y].color
          let deplacement1T = []
          //DEP 1

          //Rook movements
          function rookcheck(a, b, c) {                                   
            for (let i = 1; i <= c; i++) {
              if (boardT[x + i * a][y + i * b] == 'x') {
                deplacement1T.push([x + i * a, y + i * b, 0])
              } else if (boardT[x + i * a][y + i * b].color !== color) {
                deplacement1T.push([x + i * a, y + i * b, 0])
                break
              } else {
                break
              }
            };
          }

          //Knight movements
          function knightcheck(a, b) {                                    
            if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
              deplacement1T.push([x + a, y + b, 0])
            }
          }

          //Bishop movements
          function bishopcheck(a, b, c) {                                 
            for (let i = 1; i <= c; i++) {
              if (boardT[x + i * a][y + i * b] == 'x') {
                deplacement1T.push([x + i * a, y + i * b, 0])
              } else if (boardT[x + i * a][y + i * b].color !== color) {
                deplacement1T.push([x + i * a, y + i * b, 0])
                break
              } else {
                break
              }
            };
          }

          //King movements
          function kingcheck(a, b) {                                       
            if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
              deplacement1T.push([x + 1 * a, y + 1 * b, 0])
            }
          }

          //Pawn movements (color = W => a = 1, color = B => a = -1)
          function pawncheck(a) {                                          
            if (boardT[x][y + 1 * a] == 'x') {
              deplacement1T.push([x, y + 1 * a, 0]) //Mouvement simple avant
            };
            if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
              deplacement1T.push([x, y + 2 * a, 0]) //Mouvement double avant
            };

            for (let j = -1; j < 2; j++) {
              if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
                deplacement1T.push([x + 1 * j, y + 1 * a, 0]) //Mange
              } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'jumping') {
                deplacement1T.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
              };
              j++
            }
          };

          if (type == 'rook') {
            rookcheck(0, 1, 7 - y)  //Haut
            rookcheck(0, -1, y) //Bas
            rookcheck(1, 0, 7 - x)  //Droite
            rookcheck(-1, 0, x) //Gauche
          } else if (type == 'knight') {
            knightcheck(2, 1);
            knightcheck(1, 2);
            knightcheck(-1, 2);
            knightcheck(-2, 1);
            knightcheck(1, -2);
            knightcheck(2, -1);
            knightcheck(-1, -2);
            knightcheck(-2, -1);
          } else if (type == 'bishop') {
            bishopcheck(1, 1, 7 - Math.max(x, y)) //Haut Droite
            bishopcheck(1, -1, 7 - Math.max(x, 7 - y))  //Bas Droite
            bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y)) //Bas Gauche
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))  //Haut Gauche
          } else if (type == 'queen') {
            //Mouvement "Tour" de la Dame
            rookcheck(0, 1, 7 - y)  //Haut
            rookcheck(0, -1, y) //Bas
            rookcheck(1, 0, 7 - x)  //Droite
            rookcheck(-1, 0, x) //Gauche
            //Mouvement "Fou" de la Dame
            bishopcheck(1, 1, 7 - Math.max(x, y)) //Haut Droite
            bishopcheck(1, -1, 7 - Math.max(x, 7 - y))  //Bas Droite
            bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y)) //Bas Gauche
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))  //Haut Gauche
          } else if (type == 'king') {
            kingcheck(1, 1);
            kingcheck(1, 0);
            kingcheck(0, 1);
            kingcheck(-1, 1);
            kingcheck(-1, 0);
            kingcheck(-1, -1);
            kingcheck(1, -1);
            kingcheck(0, -1);

            //Pour les Blancs
            if (boardT[x][y].color == 'W') {
              if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
                && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roque
                deplacement1T.push([x - 2, y, 3])
              };
              if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
                && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roque
                deplacement1T.push([x + 2, y, 2])
              }
            };

            //Pour les Noirs
            if (boardT[x][y].color == 'B') { 
              if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
                && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roque
                deplacement1T.push([x - 2, y, 3])
              };
              if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
                && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roque
                deplacement1T.push([x + 2, y, 2])
              }
            };

          } else if (type == 'pawn') {
            if (boardT[x][y].color == 'W') {
              pawncheck(1);
            };
            if (boardT[x][y].color == 'B') {
              pawncheck(-1);
            };

          } else if (boardT[x][y] == 'x') {
            console.log('Ceci est une case vide')
            console.log(x, y)
            console.log(boardT[x][y])
          } else {
            console.log("Cette pièce a un type qui n'existe pas !")
          }
          //DEP 2
          // If any coordinate is less than 0 or greater than 7, remove it
          for (i = 0; i < deplacement1T.length; i++) {
            if (deplacement1T[i][0] < 0 || deplacement1T[i][0] > 7 || deplacement1T[i][1] < 0 || deplacement1T[i][1] > 7) {
              deplacement1T.splice(i, 1);
              i--
            }
          };

          for (let i = 0; i < deplacement1T.length; i++) {  //Rajoute x et y au début de chaque élément de deplacement1T
            deplacement1T[i].unshift(x, y)  //ici, deplacement1T renvoi tous les déplacements possibles en pratique sans compter l'échec
          }
          return deplacement1T
        };
        for (let o = 0; o < 8; o++) {
          for (let p = 0; p < 8; p++) {
            if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {
              let depT = deplacement1et2T(o, p);
              for (k = 0; k < depT.length; k++) {
                if (AKingPos[0] == depT[k][2] && AKingPos[1] == depT[k][3]) {
                  Spliceit++;
                } else {
                }
              }
            }
            if (boardT[o][p] !== 'x' && boardT[o][p].color == turn) {
              let depT = deplacement1et2T(o, p)
              for (k = 0; k < depT.length; k++) {
                if (EKingPos[0] == depT[k][2] && EKingPos[1] == depT[k][3]) {
                  if (turn == 'W') {
                    depOutput[w][5] = 'B';
                  } else {
                    depOutput[w][5] = 'W';
                  }
                }
              }
            }
          }
        }
        if (Spliceit == 0) {
        } else {
          depOutput.splice(w, 1);
          w--;
        }
      }
    }
  }
  return depOutput
}

// PLAY                                 
function play(click) {

  let y = click[0];
  let x = click[1];
  let input = [x, y];

  if (filteredLegalMoves.length !== 0) {
    filteredLegalMoves.forEach(move => {
      if (move[2] == input[0] && move[3] == input[1]) {
        finalMove.push(move);
        filteredLegalMoves = []
        update(finalMove);
      } else {
        filteredLegalMoves = [];
      }
    })
  } else {
    filteredLegalMoves = [];
    legalMoves.forEach(move => {
      if (move[0] == input[0] && move[1] == input[1]) {
        filteredLegalMoves.push(move)
        console.log(move)
      };
    })
  }
};


function update(finalMoveInput) {
  x = finalMoveInput[0][0]
  y = finalMoveInput[0][1]
  x2 = finalMoveInput[0][2]
  y2 = finalMoveInput[0][3]
  z = finalMoveInput[0][4]
  checkedKingT = finalMoveInput[0][5]
  finalMove = []

  function jumpingPawn(y, y2) { // teste si pion jump
    if (y - y2 == 2 || y - y2 == -2) {
      return true;
    }
  }

  board[x2].splice(y2, 1, board[x][y]); // copie piece sur x2y2
  board[x].splice(y, 1, 'x'); // supprime piece sur xy

  checkedKing = checkedKingT; // mise à jour de checkedKing
  if (checkedKing == 'B') {
    console.log('Roi Noir en échec !');
  } else if (checkedKing == 'W') {
    console.log('Roi Blanc en échec !');
  }

  // Z en passant
  if (z == 1) {                                                  
    board[x2].splice(y, 1, 'x');
  } else if (z == 2) {
    board[5].splice(y, 1, board[7][y]); // Z petit roque copie tour
    board[7].splice(y, 1, 'x'); // Z petit roque suppr tour
  } else if (z == 3) {
    board[3].splice(y, 1, board[0][y]); // Z grand roque copie tour
    board[0].splice(y, 1, 'x'); // Z grand roque suppr tour
  }

  board.forEach(row => {
    row.forEach(slab => {
      if (slab.type == 'pawn' && slab.jump == 'jumping') { // update jump de jumping en jumped
        slab.jump = 'jumped'
      }
    })
  })

  if (board[x2][y2].type == 'rook' || board[x2][y2].type == 'king') { // mise à jour de la propriété roque
    board[x2][y2].alreadyMoved = true;
  } else if (board[x2][y2].type == 'pawn' && jumpingPawn(y, y2) == true) { // mise à jour de jump de never à jumped
    board[x2][y2].jump = 'jumping';
  } else if (board[x2][y2].type == 'pawn' && board[x2][y2].jump == 'jumping') { // update jump de jumping en jumped
    board[x2][y2].jump = 'jumped';
  }

  board[x2][y2].position = [x2, y2];  // mise à jour de la propriete position
   console.log(board[0])
  if (turn == 'W') {  // nouveau tour
    turn = 'B'
  } else {
    turn = 'W'
  };
  updateGUI()
  checkSquare();
};

/*

    ICI COMMENCE LA PARTIE GUI


*/

function updateGUI() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let type = board[x][y].type
      let idToFind = y.toString() + x.toString()
      if (board[x][y].color == 'W') {
        switch (type) {
          case 'rook':
            document.getElementById(idToFind).innerHTML = "♖"
            break;
          case 'pawn':
            document.getElementById(idToFind).innerHTML = "♙"
            break;
          case 'knight':
            document.getElementById(idToFind).innerHTML = "♘"
            break;
          case 'bishop':
            document.getElementById(idToFind).innerHTML = "♗"
            break;
          case 'queen':
            document.getElementById(idToFind).innerHTML = "♕"
            break;
          case 'king':
            document.getElementById(idToFind).innerHTML = "♔"
            break;
          default:
            console.log('Hello World!');
        }
      } else if (board[x][y].color == 'B') {
        switch (type) {
          case 'rook':
            document.getElementById(idToFind).innerHTML = "♜"
            break;
          case 'pawn':
            document.getElementById(idToFind).innerHTML = "♟"
            break;
          case 'knight':
            document.getElementById(idToFind).innerHTML = "♞"
            break;
          case 'bishop':
            document.getElementById(idToFind).innerHTML = "♝"
            break;
          case 'queen':
            document.getElementById(idToFind).innerHTML = "♛"
            break;
          case 'king':
            document.getElementById(idToFind).innerHTML = "♚"
            break;
          default:
            console.log('Hello World!');
        }
      } else {
        document.getElementById(idToFind).innerHTML = ""
      }
    };
  };
}