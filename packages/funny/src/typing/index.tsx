import React, { useRef, useEffect, FC } from 'react';
import Typed, { TypedOptions } from 'typed.js'
import './index.less'

interface TypingProps {
  /**
   *
   */
  title: string;

  config?: TypedOptions;
}

const Typing: FC<TypingProps> = (props) => {
  const { title = '-', config } = props;
  const ref = useRef()

  useEffect(() => {
      let dom = new Typed(ref.current, {
        strings: [title],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,
        ...config
      });
      return () => {
        dom.destroy()
      }
  }, [title])

    return (
      <span ref={ref} >
        {title}
      </span>
    );
}

export default Typing
