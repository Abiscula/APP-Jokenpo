const playResult = (player, enemy) => {
    
    if(player === enemy) {
        return 'Draw'
    } else {
        if(player === 0) {
            if(enemy === 1) {
                return 'YOU LOSE'
            } else if(enemy === 2) {
                return 'YOU WIN'
            }
        }

        if(player === 1) {
            if(enemy === 0) {
                return 'YOU WIN'
            } else if(enemy === 2) {
                return  'YOU LOSE'
            }
        }

        if(player === 2) {
            if(enemy === 0) {
                return 'YOU LOSE'
            } else if(enemy === 1) {
                return  'YOU WIN'
            }
        }
    }
}



export default playResult