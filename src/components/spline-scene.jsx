"use client";

import Spline from '@splinetool/react-spline/next';

export function SplineScene() {
  return (
    <div className="absolute top-0 right-0 w-1/2 h-full">
      <Spline
        scene="https://prod.spline.design/QP2-GPmAXKm9CJIg/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0
        }}
      />
    </div>
  );
} 