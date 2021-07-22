/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const UserProfileSection = styled.section`
    margin: auto;
    padding: 10px;
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const UserProfileImg = styled.img`
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%;
`

export default function UserProfile({ user }){
    return(
        <>
            <UserProfileSection>
                <UserProfileImg src={user.photoURL} alt="UserImage" />
                <p><span>@{user.username}</span></p>
                <h1>{user.displayName}</h1>
            </UserProfileSection>
        </>
    );
}