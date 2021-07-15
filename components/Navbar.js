/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';


const Navbar = () => {
    const { user, username } = useContext(UserContext);

    return (  
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <button>HOME</button>
                    </Link>
                </li>

                {/* if the user has a username */}
                {username && (
                    <>
                        <li>
                            <Link href="/admin" passHref>
                                <button>Write Post</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`} passHref><img className="profileImg" src={user.photoURL} alt="User Image"/>
                            </Link>
                        </li>
                    </>
                )}

                {!username && (
                    <li>
                        <Link href="/enter" passHref>
                            <button>Log In</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;