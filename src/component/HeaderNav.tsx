import React from 'react'
import PrimaryLink from './PrimaryLink'
import { Button } from './Button'
import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from '~/hooks/useBuyCredits';




const HeaderNav = () => {

  const session= useSession();

  const isLoggedIn = !!session.data;

  const { buyCredits } = useBuyCredits()

  return (
  <>
    <header className='dark:bg-gray-900'>
      <nav
      className='container flex items-center justify-between h-11 mx-auto'
      >
        <PrimaryLink href='/'>
          QuestLogLogo
        </PrimaryLink>
    <ul className=''>
      <li className=''>

      {!isLoggedIn && (
          <Button onClick={() => {
            signIn().catch(console.error)}}>
              Login
          </Button>
          )}
        {isLoggedIn && (
          <>
            <Button
              onClick={() => {
                buyCredits().catch(console.error);
              }}>
            Buy Credits
          </Button>
          <Button 
              onClick={() => {
                signOut().catch(console.error)}}>
              Logout
          </Button>
          </>
          )}

            {session.data?.user.name}


      </li>



    </ul>

      </nav>
    </header>
  </>
  )
}

export default HeaderNav