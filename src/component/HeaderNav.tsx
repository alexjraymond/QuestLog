import React, { useState } from 'react'
import PrimaryLink from './PrimaryLink'
import { Button } from './Button'
import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from '~/hooks/useBuyCredits';
import Image from 'next/image';
import wizardHat from 'public/images/wizard-hat-stone.png'



const HeaderNav = () => {
  const session= useSession();
  const isLoggedIn = !!session.data;
  const { buyCredits } = useBuyCredits()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
  <>
    <header className='bg-stone-700 text-stone-100'>
      <nav
      className='container flex items-center justify-between h-11 mx-auto shadow-md'
      >
        <PrimaryLink href='/'>
          QuestLogLogo
        </PrimaryLink>
 
        <ul
            className='hidden lg:flex space-y-3 lg:space-y-0 lg:space-x-3 transition duration-300'
          >
            <li className="">
              {!isLoggedIn && (
                <Button
                  onClick={() => {
                    signIn().catch(console.error);
                  }}
                >
                  Login
                </Button>
              )}
              {isLoggedIn && (
                <>
                  <Button
                    onClick={() => {
                      buyCredits().catch(console.error);
                    }}
                  >
                    Buy Credits
                  </Button>
                  <Button
                    onClick={() => {
                      signOut().catch(console.error);
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}

              {session.data?.user.name}
            </li>
          </ul>





      <Button
        variant='ghost'
        size='tiny'
      >
          <Image 
            src={wizardHat}
            alt="avatar image"
            width={35}
            height={35}
            className='border rounded-full p-1 border-stone-100'
            />          
      </Button>
      </nav>
    </header>
  </>
  )
}

export default HeaderNav