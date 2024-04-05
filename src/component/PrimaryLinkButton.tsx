import React from 'react'
import Link, {type LinkProps} from "next/link"
import { type ReactNode } from "react"

const PrimaryLinkButton = (props: LinkProps & {children: ReactNode}) => {
  return (
    <Link className={'self-end rounded bg-blue-400 px-4 py-2 hover:bg-blue-500'} {...props}>
        {props.children}
    </Link>
  )
}

export default PrimaryLinkButton