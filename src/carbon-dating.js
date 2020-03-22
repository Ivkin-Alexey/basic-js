const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const numActivity = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string'
      || !sampleActivity
      || Number.isNaN(numActivity)
      || numActivity <= 0
      || numActivity > MODERN_ACTIVITY) return false;
  return Math.ceil((HALF_LIFE_PERIOD/0.693) * Math.log(MODERN_ACTIVITY/numActivity));
};
