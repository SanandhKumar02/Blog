/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../lib/authContext';



const Navbar = () => {
    const { user, username } = useContext(UserContext);

    return (  
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <a>HOME</a>
                    </Link>
                </li>

                {/* if the user has a username */}
                {username && (
                    <>
                        <li>
                            <Link href="/admin" passHref>
                                <a>Write Post</a>
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
                            <a>Log In</a>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;