"""
Tic Tac Toe Player
"""

import math
import copy

X = "X"
O = "O"
EMPTY = None


def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]


def player(board):
    """
    Returns player who has the next turn on a board.
    """
    countX = 0
    countO = 0

    for row in range(len(board)):
        for col in range(len(board[row])):
            if board[row][col] == X:
                countX += 1
            if board[row][col] == O:
                countO += 1

    if countX > countO:
        return O
    else:
        return X

def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    allMovesAvailable = set()

    for row in range(len(board)):
        for col in range(len(board[0])):
            if board[row][col] == EMPTY:
                allMovesAvailable.add(row(row,col))

    return allMovesAvailable


def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """
    
    if action not in actions(board):
        raise Exception("Not Valid move")
    
    row, col = action
    board_copy = copy.deepcopy(board)
    board_copy[row][col] = player(board)
    return board_copy

def checkRow(board, player):
    for row in range(len(board)):
        if board[row][0] == player and board[row][1] == player and board[row][2] == player:
            return True
    return False

def checkCol(board, player):
    for col in range(len(board[0])):
        if board[0][col] == player and board[1][col] == player and board[2][col] == player:
            return True
    return False

def checkFirstDiag(board, player):
    count = 0
    for row in range(len(board)):
       for col in range(len(board[0])):
            if row == col and board[row][col] == player:
                count += 1
    if count == 3:
        return True
    else: 
        return False 
    
def checkSecondDiag(board, player):
    count = 0
    for row in range(len(board)):
        for col in range(len(board)):
            if (len(board) - row - 1) == col and board[row][col] == player:
                count +=1
    if count == 3:
        return True
    else:
        return False
    

def winner(board):
    """
    Returns the winner of the game, if there is one.
    """
    if checkRow(board, X) or checkCol(board, X) or checkFirstDiag(board, X) or checkSecondDiag(board, X):
        return X
    elif checkRow(board, O) or checkCol(board, O) or checkFirstDiag(board, O) or checkSecondDiag(board, O):
        return O
    else:
        return None
    

def terminal(board):
    """
    Returns True if game is over, False otherwise.
    """



def utility(board):
    """
    Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    """
    raise NotImplementedError


def minimax(board):
    """
    Returns the optimal action for the current player on the board.
    """
    raise NotImplementedError
