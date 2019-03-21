import styles from './index.css'
import Home from './home.js'

export default function(){
    return(
        <div>
            <div className={`${styles.headerContent}} ${styles.cls}`} >
                <div className={`${styles.head} ${styles.wrap}`}>
                    <ul className="styles.nav">
                        <li className="styles.group-item"><a href="">主页</a></li>
                        <li className="styles.group-item"><a href="">人物</a></li>
                        <li className="styles.group-item"><a href="">图片展</a></li>
                        <li className="styles.group-item"><a href="">文章</a></li>
                        <li className="styles.group-item"><a href="">小说读物</a></li>
                        <li className="styles.group-item"><a href="">漫画</a></li>
                        <li className="styles.group-item"><a href="">音乐馆</a></li>
                        <li className="styles.group-item"><a href="">最爱</a></li>
                    </ul>
                </div>
            </div>
            <Home></Home>
        </div>
    )
}
