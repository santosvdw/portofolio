import '../scss/code.scss'

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
                        <span className='dark-blue'>age</span>: <span className="red">new</span> <span className='orange'>Date</span>().<span className='purple'>getFullYear</span>() - <span className='light-blue'>2007</span>
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
                        console.<span className='purple'>log</span>(<span className='light-blue'>`Hi I'm </span>$&#123;name&#125;<span className='light-blue'> and I am </span>$&#123;age&#125;<span className='light-blue'> years old. It's nice to meet you!`</span>)
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
                    <li><span className='dark-blue'>Hi, I'm Santos and I'm {new Date().getFullYear() - 2007} years old. It's nice to meet you!</span></li>
                </ul>
            </div>
        </section>
    )
}