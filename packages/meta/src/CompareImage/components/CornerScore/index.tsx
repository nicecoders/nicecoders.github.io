//@ts-nocheck
import React, { useMemo } from 'react';
import classNames from 'classnames';
import './index.less';

const componentName = `nicecode-image__CornerScore`;

export interface ScoreProps {
  scoreTxt: number;
}
export const CornerScore: React.FC<ScoreProps> = (props) => {
  const { scoreTxt } = props;
  return useMemo(
    () => (
      <div className={classNames(`${componentName}`)}>
        <span>{~~(scoreTxt * 100)}%</span>
      </div>
    ),
    [scoreTxt]
  );
};

CornerScore.displayName = componentName;

export default CornerScore;
