import React, { FC } from 'react';
import './index.less';

interface AmazingCardProps {
  /**
   *
   */
  title: string;
}

const AmazingCard: FC<AmazingCardProps> = (props) => {
  const { title = '-' } = props;

    return (
      <div className="cont">
        <div className="amazingCard">
          {title}
        </div>
      </div>
    );
}

export default AmazingCard
