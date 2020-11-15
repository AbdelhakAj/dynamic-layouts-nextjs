import React, { useState, useEffect } from 'react'

import usersLayout from '../../../layouts/UsersLayout';


const SingleUser = ({ user = {} }) => {

    if (!user) {return <p>not found</p>}
    const { id, name, image, country, createdAt } = user
    return (
        <div>
            <div className='user-card'>
                <h3>{name}</h3>
                <p>{id}</p>
                <p>{country}</p>
                <p>{createdAt}</p>
                <img src={image} />
            </div>
        </div>
    )
}

SingleUser.Layout = usersLayout;

export default SingleUser;

export async function getStaticProps({ params }) {
    const response = await fetch(`https://5e78fa39491e9700162de71b.mockapi.io/api/users/${params.userId}`)
    const user = await response.json()
    return {
        props: {
            user
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { userId: '1' } },
            { params: { userId: '2' } },
            { params: { userId: '3' } },
            { params: { userId: '4' } },
            { params: { userId: '5' } },
            { params: { userId: '6' } },
            { params: { userId: '7' } },
            { params: { userId: '8' } },
            { params: { userId: '9' } },
            { params: { userId: '10' } },
        ],
        fallback: false
    };
}