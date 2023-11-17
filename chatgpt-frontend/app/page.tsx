'use client'
import ChatPage from '@/components/ChatPage'
import Login from '@/components/Login'

import { useState } from 'react'

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  function sendLog() {
    setLoggedIn(true)
    console.log('parent')
  }

  return loggedIn ? <ChatPage /> : <Login sendLog={sendLog} />;
}
