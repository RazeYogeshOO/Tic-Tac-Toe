import './App.css'

function App() {
  const turnX = true;
  function handleClick(e) {
    const button = e.target
    if (button.textContent === '') {
      if (turnX) {
        button.textContent = 'X'
      } else {
        button.disabled = true;
      }
    } else {
      button.textContent = ''
    }
  }

  return (
    <div>
      <div id="top">
        <div className="top">
          <h1>Tic Tac Toe</h1>
        </div>
      </div>
      <div id="main">
        <div className="main">
          <button id="cell-0" onClick={handleClick}></button>
          <button id="cell-1" onClick={handleClick}></button>
          <button id="cell-2" onClick={handleClick}></button>
          <button id="cell-3" onClick={handleClick}></button>
          <button id="cell-4" onClick={handleClick}></button>
          <button id="cell-5" onClick={handleClick}></button>
          <button id="cell-6" onClick={handleClick}></button>
          <button id="cell-7" onClick={handleClick}></button>
          <button id="cell-8" onClick={handleClick}></button>
        </div>
      </div>
    </div>
  )
}

export default App