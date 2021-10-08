const playResult = (player, enemy) => {
    
    if(player === enemy) {
        return 'Draw'
    } else {
        if(player === 0) {
            if(enemy === 1 || enemy === 3) {
                return 'YOU WIN'
            } else if(enemy === 2 || enemy === 4) {
                return 'YOU LOSE'
            }
        }

        if(player === 1) {
            if(enemy === 2 || enemy === 4) {
                return 'YOU WIN'
            } else if(enemy === 0 || enemy === 3) {
                return  'YOU LOSE'
            }
        }

        if(player === 2) {
            if(enemy === 0 || enemy === 3) {
                return 'YOU WIN'
            } else if(enemy === 1 || enemy === 4) {
                return 'YOU LOSE'
            }
        }

        if(player === 3) {
            if(enemy === 1 || enemy === 4) {
                return 'YOU WIN'
            } else if(enemy === 0 || enemy === 2) {
                return 'YOU LOSE'
            }
        }

        if(player === 4) {
            if(enemy === 0 || enemy === 2) {
                return 'YOU WIN'
            } else if(enemy === 1 || enemy === 3) {
                return 'YOU LOSE'
            }
        }
    }
}



export default playResult