import classNames from 'classnames/bind'
import styles from './paragraph.module.scss'

let cx = classNames.bind(styles)
const Paragraph = ({children, intro}) => {
    let paragprahClasses = cx({
        paragraph : true,
        intro : intro
    })
    if(intro){
        return <p className={paragprahClasses}>{children}</p>
    }
    else{
        return <p>{children}</p>
    }
    
    
}
export default Paragraph;