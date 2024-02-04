import React, { useState } from 'react'
import PrimaryLink from './PrimaryLink'
import { Button } from './Button'
import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from '~/hooks/useBuyCredits';
import Image from 'next/image';
import wizardHat from 'public/images/wizard-hat-stone.png'
import Link from 'next/link';



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
    <header className=' text-white bg-neutral-800 w-screen'>
      <nav
      className='flex items-center justify-between h-11 mx-auto shadow-md ml-5'
      >
        <PrimaryLink href='/'>
          QuestLogLogo
        </PrimaryLink>
 

<div className='relative justify-center align-middle'> 

      <Button
        variant='ghost'
        size='tiny'
        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom"
        tailwind="mt-2  mr-10"
      >
          <Image 
            src={wizardHat}
            alt="avatar image"
            width={35}
            height={35}
            className='border rounded-full p-1 border-neutral-100'
            onClick={toggleMenu}
            />          
      </Button>

      {menuOpen ? <div className='origin-top-right absolute right-0 mt-2 w-48 bg-neutral-500 rounded p-2 flex flex-col'>
          <span className="block text-sm">{session.data?.user.name}</span>

        <ul className="py-2" aria-labelledby="user-menu-button flex justify-end">
          <li>
            <Link href="/generate" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">Generate a Quest</Link>
          </li>
          <li>
            <Link href="/" className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">Quest Log</Link>
          </li>

          {isLoggedIn && 
          <>
          <li>
            <a 
              href="#" 
              onClick={() => {buyCredits().catch(console.error);}}
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">Buy Credits</a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={() => {signOut().catch(console.error);}} 
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">Sign out</a>
          </li>
          </>
          }
 
          {!isLoggedIn && 
          <li>
            <a 
              href="#" 
              onClick={() => {signIn().catch(console.error);}} 
              className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:hover:text-white">Sign In</a>
          </li>}
        </ul></div> 
       : <></>}

</div>
      </nav>
    </header>
  </>
  )
}

export default HeaderNav