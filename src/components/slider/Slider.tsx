import clsx from 'clsx';
import type { FC, ReactElement } from 'react';
import { useState } from 'react';

import styles from './Slider.module.css';
import { ISliderProps } from './Slider.props';
import arrow from './arrow.svg';

const FADE_DURATION = 300;

export const Slider: FC<ISliderProps> = ({ sliderData }): ReactElement => {
  const [slide, setSlide] = useState<number>(0);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');
  const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

  const handleClick = (move: number) => {
    const timer = setTimeout(() => {
      setSlide((s) => s + move);
      setFadeState('fade-in')
    }, FADE_DURATION);
    clearTimeout(currentTimer);
    setFadeState('fade-out');
    setCurrentTimer(timer);
  };

  return (
    <>
      <div className={styles.slider}>
        <div className={ clsx(styles.slide, styles[fadeState]) }
          style={{transitionDuration: `${FADE_DURATION}ms`}}
        >
          <div className={styles.left}>
            <div className={styles.text}>{sliderData[slide].text} </div>
            <div className={styles.name}>{sliderData[slide].name} </div>
            <div className={styles.jobPosition}>{sliderData[slide].jobPosition} </div>
          </div>
          <div className={styles.right} style={{ backgroundImage: `url(${sliderData[slide].image})` }}></div>
        </div>
        {slide > 0 && (
          <button className={clsx(styles.arrow, styles.arrowLeft)} onClick={() => handleClick(-1)}>
            <img src={arrow} alt="LeftArrow" />
          </button>
        )}
        {slide < sliderData.length - 1 && (
          <button className={clsx(styles.arrow, styles.arrowRight)} onClick={() => handleClick(1)}>
            <img src={arrow} alt="LeftArrow" />
          </button>
        )}
      </div>
    </>
  );
};
