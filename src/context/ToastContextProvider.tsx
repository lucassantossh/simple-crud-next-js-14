'use client'
import React, { createContext, useContext, useState } from 'react'

interface ToastContextProps {
  toast: (props: {
    title: string
    description: string
    status: 'success' | 'error'
  }) => void
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined)

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toasts, setToasts] = useState<any[]>([])

  const toast = ({
    title,
    description,
    status,
  }: {
    title: string
    description: string
    status: 'success' | 'error'
  }) => {
    setToasts([...toasts, { title, description, status }])
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Render your toast UI here */}
      {toasts.map((t, i) => (
        <div
          key={i}
          className={`toast bg-black fixed${t.status}`}
        >
          <h4 className='text-red-900'>{t.title}</h4>
          <p>{t.description}</p>
        </div>
      ))}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}
