import { Fragment } from 'react';
import Link from 'next/link'
import usersLayout from '../../layouts/UsersLayout';

export default function users({ allUsers }) {
    return (
        <Fragment>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <div className='user-list'>
                {
                    allUsers.map(p => {
                        return (
                            <Link href={`/users/${p.id}`} key={p.id}>
                                <div className='user-card'>
                                    <h3>{p.name}</h3>
                                    <img src={p.image} />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <style jsx global>{`
                .user-list {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .user-card {
                    background-color: #E8E8E8;
                    margin: 8px;
                    padding: 8px;
                    border-radius: 4px;
                }
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 4px;
                }
            `}</style>

        </Fragment>
    )
}

users.Layout = usersLayout;

export async function getStaticProps() {
    const response = await fetch('https://5e78fa39491e9700162de71b.mockapi.io/api/users')
    const allUsers = await response.json()

    return {
        props: {
            allUsers
        }
    }
}