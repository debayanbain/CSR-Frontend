const RangeSlider = (props) => {
  const { min, max, value, step, onChange, className } = props;

  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      className={`block dark:focus:border-blue-500 ${className}`}
    />
  );
};

export default RangeSlider;
