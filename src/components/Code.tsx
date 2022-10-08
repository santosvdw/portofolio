import '../stylesheets/code.scss'

export default function Code() {
    return (
        <section id="abt-me">
            <div className="code">
                <ul id='js'>
                    <li>
                        <span className="red">const</span> me <span className="purple">= &#123;</span>
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>first_name</span>: <span className='light-blue'>"Santos"</span>,
                    </li>
                    <li className='indent'>
                        <span className='dark-blue'>age</span>: <span className="red">new</span> <span className='orange'>Date</span>().<span className='purple'>getFullYear</span>() - <span className='light-blue'>{(new Date().getMonth() > 6 ? 2007 : 2006)}</span>
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br/></li>
                    <li>
                        <span className="red">const </span><span className='purple'>&#123;</span>first_name, age<span className="purple">&#125;</span> <span className='light-blue'>=</span> me
                    </li>
                    <li><br /></li>
                    <li>
                        <span className="red">function </span><span className='purple'>greeting</span><span className="purple">(</span>name, age<span className="purple">) &#123;</span>
                    </li>
                    <li className='indent'>
                        console.<span className='purple'>log</span>(<span className='light-blue'>`Hoi! Ik ben </span>$&#123;name&#125;<span className='light-blue'> en ik ben </span>$&#123;age&#125;<span className='light-blue'> jaar oud. Leuk je te ontmoeten!`</span>)
                    </li>
                    <li>
                        <span className="purple">&#125;</span>
                    </li>
                    <li><br /></li>
                    <li>
                        <span className='purple'>greeting</span><span className="purple">(</span>first_name, age<span className="purple">)</span>
                    </li>
                </ul>
                <ul id='console'>
                    <li><span className='dark-blue'>Hoi! Ik ben Santos en ik ben {new Date().getFullYear() - (new Date().getMonth() > 6 ? 2007 : 2006)} jaar oud. Leuk je te ontmoeten!</span></li>
                </ul>
            </div>
        </section>
    )
}