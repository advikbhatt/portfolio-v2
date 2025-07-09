'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Loader.css';

export default function Loader({ onComplete }) {
  const leftPanel = useRef(null);
  const rightPanel = useRef(null);
  const wrapper = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);

  const images = [
    'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg',
    'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg',
    'https://images.pexels.com/photos/698500/pexels-photo-698500.jpeg',
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    'https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg',
    'https://images.pexels.com/photos/32924879/pexels-photo-32924879/free-photo-of-vibrant-ganga-aarti-ceremony-in-varanasi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/32920051/pexels-photo-32920051.jpeg',
  ];

  const [index, setIndex] = useState(0);

  // Preload all images once at start
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Change background image only after next image is loaded
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
      img.onload = () => {
        const imageUrl = `url(${images[nextIndex]})`;
        if (leftText.current) leftText.current.style.backgroundImage = imageUrl;
        if (rightText.current) rightText.current.style.backgroundImage = imageUrl;
        setIndex(nextIndex);
      };
    }, 700);
    return () => clearInterval(interval);
  }, [index]);

  // Loader animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to(leftPanel.current, { y: '-100%', duration: 1, delay: 4 })
      .to(rightPanel.current, { y: '-100%', duration: 1 }, '-=0.9')
      .to(wrapper.current, { display: 'none' }, '-=0.1')
      .add(() => onComplete());

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div className="loader" ref={wrapper}>
      <div className="panel left" ref={leftPanel}>
        <h1 className="textleft" ref={leftText}>
          Advik
        </h1>
      </div>
      <div className="panel right" ref={rightPanel}>
        <h1 className="textright" ref={rightText}>
          Bhatt
        </h1>
      </div>
    </div>
  );
}
