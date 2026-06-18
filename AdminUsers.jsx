// Renders five stars. Pass `value` to display a rating, or `onChange` to
// make it interactive (used when a normal user submits/edits their rating).
export default function StarRating({ value = 0, onChange, disabled = false, size }) {
  const stars = [1, 2, 3, 4, 5];
  const rounded = Math.round(value || 0);

  return (
    <span className="star-row" style={size ? { fontSize: size } : undefined}>
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          className={`star-btn ${n <= rounded ? 'filled' : ''}`}
          disabled={disabled || !onChange}
          onClick={onChange ? () => onChange(n) : undefined}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
    </span>
  );
}
