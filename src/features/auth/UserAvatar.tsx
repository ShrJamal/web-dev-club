import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { MdExpandMore } from 'react-icons/md'

export default function UserAvatar() {
  const { data } = useSession()
  const user = data?.user

  if (user) {
    return (
      <div className="dropdown dropdown-bottom dropdown-end flex items-center p-0">
        <div
          tabIndex={0}
          className="avatar btn btn-circle btn-ghost px-3 w-full flex items-center"
        >
          <div className=" rounded-full m-1">
            <Image
              src={user.image || 'https://i.pravatar.cc/500?img=32'}
              alt="avatar"
              height={32}
              width={32}
            />
          </div>
          <h2>{user.name}</h2>
          <MdExpandMore className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-neutral p-2 rounded-box w-[13rem] h-[4rem]"
        >
          <li className="h-10 " onClick={() => signOut()}>
            <span className="">Logout</span>
          </li>
        </ul>
      </div>
    )
  }
  return null
}
