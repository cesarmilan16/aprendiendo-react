import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName={"midudev"} name={"Miguel Ángel Durán"}/>
            <TwitterFollowCard userName={"cesarmilan16"} name={"César Fernández Milán"}/>
            <TwitterFollowCard userName={"FarraPalma"} name={"Morsa Alienígena"}/>
        </section>
    )
}