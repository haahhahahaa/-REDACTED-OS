import { useState, useEffect, useRef } from 'react'

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Microsoft Windows [Version 10.0.22621.1]' },
    { type: 'output', content: '(c) Microsoft Corporation. All rights reserved.' },
    { type: 'output', content: '\n' },
  ])
  const [currentLine, setCurrentLine] = useState('')
  const bottomRef = useRef(null)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(' ')
    const command = args[0].toLowerCase()
    let output = ''
    switch (command) {
      case 'help':
        output = 'Available commands: help, clear, echo, date, time, ver'
        break
      case 'clear':
        setHistory([])
        return
      case 'echo':
        output = args.slice(1).join(' ')
        break
      case 'date':
        output = 'The current date is: ' + new Date().toLocaleDateString()
        break
      case 'time':
        output = 'The current time is: ' + new Date().toLocaleTimeString()
        break
      case 'ver':
        output = 'Microsoft Windows [Version 10.0.22621.1]'
        break
      case 'apt': case 'apt-get': case 'sudo': case 'mkdir': case 'rm': case 'rmdir': case 'ls': case 'cd': case 'pwd': case 'cat': case 'nano': case 'vi': case 'vim': case 'code':
        output = 'This is windows not linux. 😂🫵'
        break
      case 'curl': case 'wget': case 'fetch': case 'git': case 'npm': case 'yarn': case 'pip': case 'pip3':
        output = 'This is not a real PC, why bother download anything? 😂🫵'
        break
      case '':
        break
      default:
        output = `'${command}' is not recognized as a command, program or batch file.`
    }
    setHistory(prev => [
      ...prev,
      { type: 'input', content: 'C:\\Desktop>' + cmd },
      ...(output ? [{ type: 'output', content: output }] : []),
      { type: 'output', content: '' }
    ])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentLine)
      setCurrentLine('')
    }
  }
  return (
    <div className="terminal-app" style={{ 
      background: '#0c0c0c', 
      color: '#cccccc', 
      fontFamily: 'Consolas, monospace', 
      height: '100%', 
      padding: '4px',
      overflowY: 'auto',
      fontSize: '14px',
      lineHeight: '1.2'
    }} onClick={() => document.getElementById('term-input')?.focus()}>
      {history.map((line, i) => (
        <div key={i} style={{ whiteSpace: 'pre-wrap', marginBottom: '2px' }}>
          {line.content}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        <span>C:\Desktop&gt;</span>
        <input
          id="term-input"
          type="text"
          value={currentLine}
          onChange={(e) => setCurrentLine(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            outline: 'none',
            flex: 1,
            marginLeft: '0px'
          }}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  )
}
