import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: "cesarmilan16",
        name: "César Fernández Milán",
        isFollowing: false
    },
    {
        userName: "FarraPalma",
        name: "Morsa Alienígena",
        isFollowing: false
    },
    {
        userName: "alba__mariaa",
        name: "Alba Tapiador Segovia",
        isFollowing: false
    }
]

export function App () {

    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
                ))
            }
        </section>
    )
}