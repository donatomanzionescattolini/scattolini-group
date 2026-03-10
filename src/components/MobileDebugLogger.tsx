import { useEffect, useState } from 'react';

interface LogEntry {
  type: 'log' | 'error' | 'warn';
  message: string;
  timestamp: Date;
}

export default function MobileDebugLogger() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const originalError = console.error;
    const originalLog = console.log;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      setLogs((prev) => [...prev, { type: 'error', message: args.join(' '), timestamp: new Date() }]);
      originalError.apply(console, args);
    };

    console.log = (...args: any[]) => {
      const message = args.join(' ');
      if (message.includes('[S3') || message.includes('Error') || message.includes('Firebase')) {
        setLogs((prev) => [...prev, { type: 'log', message, timestamp: new Date() }]);
      }
      originalLog.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      setLogs((prev) => [...prev, { type: 'warn', message: args.join(' '), timestamp: new Date() }]);
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.log = originalLog;
      console.warn = originalWarn;
    };
  }, []);

  if (!isVisible && logs.length === 0) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '80px',
          left: '10px',
          zIndex: 9999,
          padding: '8px 12px',
          background: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '12px',
        }}
      >
        Show Debug
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        right: '10px',
        maxHeight: '300px',
        background: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '11px',
        overflowY: 'auto',
        zIndex: 9999,
        fontFamily: 'monospace',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <strong>Debug Log</strong>
        <button
          onClick={() => {
            setLogs([]);
            setIsVisible(false);
          }}
          style={{
            background: '#666',
            color: 'white',
            border: 'none',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '10px',
          }}
        >
          Clear & Hide
        </button>
      </div>
      {logs.length === 0 ? (
        <div style={{ color: '#888' }}>No logs yet...</div>
      ) : (
        logs.slice(-10).map((log, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '8px',
              padding: '6px',
              background: log.type === 'error' ? '#ff000033' : log.type === 'warn' ? '#ffaa0033' : '#00000033',
              borderRadius: '4px',
              borderLeft: `3px solid ${log.type === 'error' ? '#ff0000' : log.type === 'warn' ? '#ffaa00' : '#00ff00'}`,
            }}
          >
            <div style={{ fontSize: '9px', color: '#aaa', marginBottom: '2px' }}>
              {log.timestamp.toLocaleTimeString()}
            </div>
            <div style={{ wordBreak: 'break-word' }}>{log.message}</div>
          </div>
        ))
      )}
    </div>
  );
}
