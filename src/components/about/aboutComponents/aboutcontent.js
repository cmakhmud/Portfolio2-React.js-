import programmer from '../../../images/aaaa.png'

export default function AboutContents() {
    return (
        <div className='content'>
            <div className='imgDiv'>
                <img className='img' src={programmer} alt='sss' />
            </div>
            <div className='contentText'>
                <h1 style={{ fontWeight: 'bolder' , fontSize:50 }}>I create products not just art</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo assumenda, magnam quam fugiat nam quia molestiae quaerat tenetur cumque debitis omnis
                    reprehenderit amet blanditiis, neque repellat quisquam voluptate ex.Non nemo assumenda, magnam quam fugiat nam quia molestiae quaerat tenetur cumque debitis omnis
                </p>
            </div>
        </div>
    )
}