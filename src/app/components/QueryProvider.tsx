"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
type Props={
    children: React.ReactNode,
}

export const QueryProvider = ({children}:Props) => {
  return (
    <div><QueryClientProvider client ={queryClient}>
        {children}
    </QueryClientProvider>
        </div>
  )
}
