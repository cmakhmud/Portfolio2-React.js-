import './aboutSkill.css'
export default function AboutSkills() {
    return (
        <div className="aboutSkillContainer">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className='column'>
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#FE3E57' }}>75%</h1>
                    <progress className="progres" value='75' max='100'></progress>
                    <p className='text'>Communication Skills</p>
                </div>
                <div className='column'>
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#F1F965' }}>80%</h1>
                    <progress className="progres" value='75' max='100'></progress>
                    <p className='text'>Analitical Abilities</p>
                </div>
                <div className='column'>
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#54FAAE' }}>90%</h1>
                    <progress className="progres" value='90' max='100'></progress>
                    <p className='text'>Project Management</p>
                </div>
                <div className='column' >
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#FF8C2F' }}>90%</h1>
                    <progress className="progres" value='75' max='100'></progress>
                    <p className='text'>Problem Solving</p>
                </div>
                <div className='column'>
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#FF0173' }}>95%</h1>
                    <progress className="progres" value='75' max='100'></progress>
                    <p className='text'>Creativity</p>
                </div>
                <div className='column'>
                    <h1 style={{ fontFamily: 'fantasy', fontSize: 150, color: '#FF8C2F' }}>55%</h1>
                    <progress className="progres" value='75' max='100'></progress>
                    <p className='text'>Organization</p>
                </div>
            </div>
        </div>)
}