import React, { useState } from 'react'
import { MdMenu, MdHistory, MdFullscreenExit, MdBackspace } from 'react-icons/md'
export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [shouldReset, setShouldReset] = useState(false)
  const [memory, setMemory] = useState(null)
  const handleMemory = (op) => {
    const v = parseFloat(display) || 0
    if (op === 'MC') setMemory(null)
    else if (op === 'MR') {
      if (memory !== null) { setDisplay(String(memory)); setShouldReset(true) }
    } else setMemory(m => {
      const cur = m ?? 0
      return op === 'MS' ? v : op === 'M+' ? cur + v : cur - v
    })
  }
  const handleDigit = (digit) => {
    if (display === '0' || shouldReset) {
      setDisplay(digit)
      setShouldReset(false)
    } else {
      setDisplay(display + digit)
    }
  }
  const handleOperator = (op) => {
    setEquation(display + ' ' + op + ' ')
    setShouldReset(true)
  }
  const handleEqual = () => {
    try {
      if (!equation) return
      const fullEq = equation + display
      const mathEq = fullEq.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-')
      const result = eval(mathEq)
      setDisplay(String(result))
      setEquation('')
      setShouldReset(true)
    } catch (e) {
      setDisplay('Error')
    }
  }
  const clearAll = () => {
    setDisplay('0')
    setEquation('')
  }
  const handleInverse = () => setDisplay(String(1 / parseFloat(display)))
  const handleSquare = () => setDisplay(String(Math.pow(parseFloat(display), 2)))
  const handleSqrt = () => setDisplay(String(Math.sqrt(parseFloat(display))))
  const handleSign = () => setDisplay(String(parseFloat(display) * -1))
  const handlePercent = () => setDisplay(String(parseFloat(display) / 100))
  return (
    <div className="calc-container">
      <div className="calc-nav">
        <span className="calc-mode">Standard</span>
        <div style={{ display: 'flex', gap: '4px' }}>
        </div>
      </div>
      <div className="calc-display-section">
        <div className="calc-prev-eq">{equation}</div>
        <div className="calc-main-num">{display}</div>
      </div>
      <div className="calc-memory-row">
        {['MC', 'MR', 'M+', 'M-', 'MS'].map(op => (
          <button key={op} className="calc-mem-btn" onClick={() => handleMemory(op)} disabled={['MC','MR'].includes(op) && memory === null}>{op}</button>
        ))}
        <button className="calc-mem-btn" disabled>Mv</button>
      </div>
      <div className="calc-btn-grid">
        <button className="calc-btn-modern" onClick={handlePercent}>%</button>
        <button className="calc-btn-modern" onClick={() => setDisplay('0')}>CE</button>
        <button className="calc-btn-modern" onClick={clearAll}>C</button>
        <button className="calc-btn-modern" onClick={() => setDisplay(display.length > 1 ? display.slice(0, -1) : '0')}>
           <MdBackspace />
        </button>
        <button className="calc-btn-modern" onClick={handleInverse}>1/x</button>
        <button className="calc-btn-modern" onClick={handleSquare}>x²</button>
        <button className="calc-btn-modern" onClick={handleSqrt}>²√x</button>
        <button className="calc-btn-modern" onClick={() => handleOperator('÷')}>÷</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('7')}>7</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('8')}>8</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('9')}>9</button>
        <button className="calc-btn-modern" onClick={() => handleOperator('×')}>×</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('4')}>4</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('5')}>5</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('6')}>6</button>
        <button className="calc-btn-modern" onClick={() => handleOperator('−')}>−</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('1')}>1</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('2')}>2</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('3')}>3</button>
        <button className="calc-btn-modern" onClick={() => handleOperator('+')}>+</button>
        <button className="calc-btn-modern" onClick={handleSign}>+/-</button>
        <button className="calc-btn-modern num" onClick={() => handleDigit('0')}>0</button>
        <button className="calc-btn-modern" onClick={() => display.includes('.') ? null : setDisplay(display + '.')}>.</button>
        <button className="calc-btn-modern equal" onClick={handleEqual}>=</button>
      </div>
    </div>
  )
}
