import '../stylesheets/code.scss'

export default function Code() {
    return (
        <section id="abt-me">
            <div className="code">
                <ul id='js'>
                    <li>
                        <span className="red">const</span> ik <span className="purple">= &#123;</span>
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>voornaam</span>: <span className='light-blue'>"Santos"</span>,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>leeftijd</span>: <span className="red">new</span> <span className='orange'>Date</span>().<span className='purple'>getFullYear</span>() - <span className='light-blue'>{(new Date().getMonth() > 6 ? 2007 : 2006)}</span>
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br/></li>
                    <li>
                        <span className="red">const </span><span className='purple'>&#123;</span>voornaam, leeftijd<span className="purple">&#125;</span> <span className='light-blue'>=</span> ik
                    </li>
                    <li><br /></li>
                    <li>
                        <span className="red">function </span><span className='purple'>voorstellen</span><span className="purple">(</span>naam, leeftijd<span className="purple">) &#123;</span>
                    </li>
                    <li className='indent'>
                        console.<span className='purple'>log</span>(<span className='light-blue'>`Hoi! Ik ben </span>$&#123;naam&#125;<span className='light-blue'> en ik ben </span>$&#123;leeftijd&#125;<span className='light-blue'> jaar oud. Leuk je te ontmoeten!`</span>)
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br /></li>
                    <li>
                        <span className='purple'>voorstellen</span><span className="purple">(</span>voornaam, leeftijd<span className="purple">)</span>
                    </li>
                </ul>
                <ul id='console'>
                    <li><span className='dark-blue'>Hoi! Ik ben Santos en ik ben {new Date().getFullYear() - (new Date().getMonth() > 6 ? 2007 : 2006)} jaar oud. Leuk je te ontmoeten!</span></li>
                </ul>
            </div>
        </section>
    )
}