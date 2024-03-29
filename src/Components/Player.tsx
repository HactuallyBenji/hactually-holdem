import './Player.css';
import Betting from './Betting'

interface PlayerProps {
    name: String;
    money: number;
    bet: number;
    turn: string;
    avatar: string;
    handleCheck: () => void;
    handleRaise: () => void;
    handleBet: () => void;
}

const Player = ({name, money, bet, turn, avatar, handleCheck, handleRaise, handleBet}: PlayerProps) => {
    const isTurn = turn === name;
    return (
        <div className={`player-container ${isTurn ? "active" : "not-active"}`}>
            <section className='player'>
                <div className='image-wrapper'>
                    <img src={avatar} alt="Player Avatar"></img>
                </div>
                <p>
                Name: {name}
                <br />
                Money: {money}
                <br />
                Bet: {bet}
                </p>
            </section>
            <section className='actions'>
                <Betting prevBet={true} isTurn={isTurn} handleCheck={handleCheck} handleRaise={handleRaise} handleBet={handleBet}/>
            </section>
        </div>
    );
}

export default Player;