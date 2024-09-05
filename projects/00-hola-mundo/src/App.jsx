import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App () {

    return (
        <section className="App">
            <TwitterFollowCard userName={"midudev"}>
                Miguel Ángel Durán {/* Todo lo que este dentro es el elemento children */}
            </TwitterFollowCard> 


            <TwitterFollowCard userName={"cesarmilan16"}>
                César Fernández Milán
            </TwitterFollowCard> 

            <TwitterFollowCard userName={"FarraPalma"}>
                Morsa Alienígena
            </TwitterFollowCard> 

            <TwitterFollowCard>
                Alba Tapiador Segovia
            </TwitterFollowCard> 
        </section>
    )
}