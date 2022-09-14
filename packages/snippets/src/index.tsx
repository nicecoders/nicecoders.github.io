// 2022-09-06 - by dev


import { } from 'react'
import { connect, ConnectProps } from 'umi'
import styles from './index.less'


interface I extends ConnectProps {
}

const Name: FC<I> = (props) => {
    return (
      <div className={styles.}></div>
    )
  }

export default connect(({}: {}) => ({
}))(Name)