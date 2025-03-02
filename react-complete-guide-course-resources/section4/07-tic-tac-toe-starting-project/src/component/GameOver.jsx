export default function GameOver({ winner }) {
    return <div id="game-over">
        <h2>Game Over</h2>
        
        {winner ? <p>{winner} wins!</p> : <p>It's a draw!</p>}
        {/* Button to restart the game */}
        <p><button>Restart</button></p>
        </div>;
}