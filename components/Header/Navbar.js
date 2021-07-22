/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../lib/authContext';
import { NavContainer, NavUl, NavItem, NavImg } from './NavbarStyles';
import { SignOutButton } from '../../pages/auth'

const Navbar = () => {
    const { user, username } = useContext(UserContext);

    return (  
        <NavContainer>
            <NavUl>
                <NavItem>
                    <Link href="/" passHref>
                        <em><strong>BLOG</strong></em>
                    </Link>
                </NavItem>

                {/* if the user has a username */}
                {username && (
                    <>
                        <NavItem>
                            <Link href="/admin" passHref>
                                <a>Write Post</a>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <SignOutButton />
                        </NavItem>
                        <NavItem>
                            <Link href={`/${username}`} passHref><NavImg className="profileImg" src={user.photoURL} alt="User Image"/>
                            </Link>
                        </NavItem>
                    </>
                )}

                {!username && (
                    <NavItem>
                        <Link href="/auth" passHref>
                            <a>Log In</a>
                        </Link>
                    </NavItem>
                )}
            </NavUl>
        </NavContainer>
    );
}
 
export default Navbar;