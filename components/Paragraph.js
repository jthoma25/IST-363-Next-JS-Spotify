import classNames from 'classnames/bind'
import styles from './paragraph.module.scss'

let cx = classNames.bind(styles)
const Paragraph = ({children, intro, marginBottom}) => {
    let paragprahClasses = cx({
        paragraph : true,
        [`margin-bottom-${marginBottom}`] : marginBottom,
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