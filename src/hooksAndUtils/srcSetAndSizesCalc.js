// Nice to know during debugging
console.log('widow.innerWidth (logical pixels)', window.innerWidth);
console.log('devicePixelRatio', window.devicePixelRatio);
console.log('window width in physical pixels',
  window.innerWidth * window.devicePixelRatio);

export function srcSetCalc(basePath) {
  return [250, 500, 1000, 1500, 2000].reverse().map(w =>
    `${basePath}-${w}w.jpg ${w}w`).join(', ');
}

export function sizesCalc(colSizes) {
  // Bootstrap breakpoints (v 5.x of Bootstrap)
  let breakPoints = {
    'xs': 1,
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200,
    'xxl': 1400
  };
  let sizes = Object.keys(breakPoints);
  let colSize = 12;
  // fill 'holes' in the input values
  for (let size of sizes) {
    colSize = colSizes[size] = colSizes[size] || colSize;
  }
  // calculate sizes attribute value
  let value = sizes.slice().reverse().map(size =>
    `(min-width:${breakPoints[size]}px) ` +
    `${Math.round(100 * colSizes[size] / 12)}vw `
  ).join(', ');
  return value;
}