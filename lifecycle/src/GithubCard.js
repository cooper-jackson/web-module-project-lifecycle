import React from 'react'
import './GithubCard.css'

export default function GithubCard(props) {
    const {githubAccount} = props
    const githubUrl = `https://github.com/${githubAccount.login}`
    const cardImage = `url(${githubAccount.avatar_url})`

    return (
        <div className="card">
            <div
                className="card-image"
                // width='100'
                alt="pritee boi"
                style={{backgroundImage: cardImage}}
                // background=`url(${githubAccount.avatar_url})`

            ></div>
            <div className="card-text"><h2>Handle: <a href={githubUrl}>{githubAccount.login}</a></h2></div>
            <div className="card-stats"></div>
        </div>
    )
}