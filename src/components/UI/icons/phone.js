export function Phone({ color = "currentColor", size = "20px", ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 14.667 14.667"
      {...rest}
    >
      <path
        d="M14.248,10.365,11.04,8.989a.688.688,0,0,0-.8.2L8.817,10.923A10.618,10.618,0,0,1,3.741,5.847L5.477,4.426a.686.686,0,0,0,.2-.8L4.3.416a.692.692,0,0,0-.788-.4L.533.705A.688.688,0,0,0,0,1.375,13.29,13.29,0,0,0,13.292,14.667a.688.688,0,0,0,.67-.533l.688-2.979A.7.7,0,0,0,14.248,10.365Z"
        transform="translate(0 0)"
      />
    </svg>
  );
}
