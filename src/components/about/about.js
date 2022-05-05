import { useEffect, useState } from 'react'
import '../about/about.css'
import AboutContents from './aboutComponents/aboutcontent'
import AboutSkills from './aboutComponents/aboutSkills/aboutSkills'
import AboutSocial from './aboutComponents/social/socialMedia'
export default function About() {

    const [navContent , setNavContent] = useState({
        activeObjects:[]
    })
    const [aboutNav, setAboutNav] = useState(
        {
            activeObjects: [],
            objects: [
                { id: 0, title: 'About' , content:<AboutContents/>},
                { id: 1, title: 'Skills', content:<AboutSkills/> }, 
                { id: 2, title: 'Services' }, 
                { id: 3, title: 'Social Media' , content:<AboutSocial/>}, 
                { id: 4, title: 'Awards' }
            ]
        })
    
    useEffect(()=>{
        setAboutNav({...aboutNav, activeObjects: aboutNav.objects[0] })
        setNavContent({...navContent , activeObjects:aboutNav.objects[0]})
    },[])

    function toggleActive(index) {
        setAboutNav({...aboutNav, activeObjects: aboutNav.objects[index] })
        setNavContent({...navContent ,activeObjects:aboutNav.objects[index] })
    }

    function toggleActiveStyles(index){
        if(aboutNav.objects[index] === aboutNav.activeObjects){
            return 'activeAbout'
        }else{
            return 'about'
        }
    }

    return (
        <div className="aboutContainer container">
            <div className='text'><h1 className='aboutH1'>About Me</h1></div>
            <div className='aboutContents'>
                <div className='wrapperTexts'>
                    {
                        aboutNav.objects.map((nav, index) => {
                            return (
                                <div
                                    key={index}
                                    className={toggleActiveStyles(index)}
                                    onClick={() => { toggleActive(index) }}
                                >{nav.title}</div>
                            )
                        })
                    }
                </div>
                <hr className='horizontal' color='white'/>
                {
                    navContent.activeObjects.content
                }
            </div>
        </div>
    )
}