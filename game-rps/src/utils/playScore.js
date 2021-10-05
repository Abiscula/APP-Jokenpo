import { usePlay } from '../providers/p-plays'

let wins = 0

const PlayScore = () => {
    const { score } = usePlay()
    if(score == 'YOU WIN') {
        return wins += 1
    } else if(score == 'YOU LOSE') {
        return wins -= 1
    } else {
        return  wins
    }


}

export default PlayScore