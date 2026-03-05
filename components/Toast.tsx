// components/Toast.tsx
'use client'

import { useState, useEffect, createContext, useContext } from 'react'

type ToastContextType = {
  showToast: (msg: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const showToast = (msg: string) => {
    setMessage(msg)
    setIsVisible(true)
  }

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 3500)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast ${isVisible ? 'show' : ''}`}>
        {message}
      </div>
      <style jsx>{`
        .toast {
          position: fixed;
          bottom: 28px;
          right: 28px;
          background: var(--rose-deep);
          color: white;
          padding: 13px 22px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
          z-index: 9999;
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.4s;
        }
        .toast.show {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </ToastContext.Provider>
  )
}

export default function Toast() {
  return null // This is just a placeholder, the actual toast is rendered by ToastProvider
}