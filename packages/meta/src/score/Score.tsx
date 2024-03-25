//@ts-nocheck
import React, { useMemo } from 'react';
import classNames from 'classnames';
import './index.less';

const componentName = `nicecode-image__score`;
export interface ScoreProps {
  score: number;
  showTitle?: boolean;
  r?: number;
  fontSize?: number;
  borderColor?: string;
  borderSize?: number;
  waveColor?: string;
}
export const Score: React.FC<ScoreProps> = (props) => {
  const {
    score,
    r = 44,
    showTitle = true,
    fontSize = 28,
    borderSize = 8,
    borderColor = 'rgb(0 153 255 / 10%)',
    waveColor = 'linear-gradient(180deg, #a0efff 0%, #09f 100%)',
  } = props;
  const waveHeight = `${score * r * 2}px`;
  return useMemo(
    () => (
      <div className={classNames(`${componentName}`)}>
        <div
          className={classNames(`${componentName}-box`)}
          style={{ border: `${borderSize}px solid ${borderColor}` }}
        >
          <div
            style={{ width: r * 2, height: r * 2 }}
            className={classNames(`${componentName}-box-bg`)}
          >
            <div
              className={classNames(`${componentName}-box-bg-inner`)}
              style={{ height: waveHeight, background: waveColor }}
            />
          </div>
          <div
            style={{ fontSize }}
            className={classNames(`${componentName}-score`)}
          >{`${Math.floor(score * 100)}%`}</div>
        </div>
        {showTitle && <div className={classNames(`${componentName}-text`)}>相似度</div>}
      </div>
    ),
    [score]
  );
};

Score.displayName = componentName;

export default Score;
