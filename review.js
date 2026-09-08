// Simple graduated-interval scheduler. Timestamps are absolute; days are 24 hours.
const ReviewScheduler = (() => {
  const DAY = 86400000;
  function next(previous, rating, now = Date.now()) {
    if (!['again','hard','good','easy'].includes(rating)) throw new Error('Unknown review rating');
    const old = previous || {};
    const interval = Number.isFinite(old.interval) ? Math.max(0, old.interval) : 0;
    let days;
    if (rating === 'again') days = 10 / 1440;
    if (rating === 'hard') days = Math.max(1, Math.round(interval * 1.2));
    if (rating === 'good') days = interval < 1 ? 1 : interval === 1 ? 3 : Math.round(interval * 2);
    if (rating === 'easy') days = Math.max(4, Math.round(interval * 3));
    days = Math.min(365, days);
    return {interval:days, due:now + Math.round(days * DAY), reviews:(old.reviews || 0) + 1, lastReviewed:now};
  }
  function valid(value) {
    return value && typeof value === 'object' && !Array.isArray(value) && Number.isFinite(value.due) && Number.isFinite(value.interval) && value.interval >= 0;
  }
  return {next,valid};
})();
if (typeof module !== 'undefined') module.exports = ReviewScheduler;
