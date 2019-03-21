import styles from './index.css'
import ImageUpload from './components/imageUpload.js'

export default function(){
    return(
        <div className={styles.htmlWarp}>
            <ImageUpload />
        </div>
    );
}
