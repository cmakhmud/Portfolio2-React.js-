import Introduction from "../../components/intro/intro"
import About from "../../components/about/about"

import '../home/home.css'
export default function Home(){
    return(
        <div className="homecontainer">  
            <Introduction/>
            <About/>
        </div>
    )
}