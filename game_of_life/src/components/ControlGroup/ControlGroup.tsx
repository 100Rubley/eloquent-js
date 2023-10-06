import { useGameStore } from '../../store/store'
import './ControlGroup.css'

export const ControlGroup = () => {
  const { interval, updateInterval, isRunning, startGame, endGame } = useGameStore(state => state)

  return (
    <div className="control_wrapper">
      <div className='input_wrapper'>
        <span>Обновлять каждые</span>
        <input type="text" value={interval} onChange={updateInterval} />
        <span>мс</span>
      </div>

      <div className='buttons_wrapper'>
        {isRunning ?
          <button className="button" onClick={endGame}>Закончить</button> :
          <button className="button" onClick={startGame}>Начать</button>
        }
      </div>
    </div>
  )
}
