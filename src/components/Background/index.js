import React from "react";

export function Background({ ...rest }) {
  const pulse = (pulses) => {
    let sorted = Math.floor(Math.random() * pulses.length);
    for (let k = 0; k < pulses.length; k++) {
      if (k === sorted) {
        pulses[k].setAttribute("class", "pulses active");
      } else {
        pulses[k].setAttribute("class", "pulses");
      }
    }
  };
  setInterval(() => {
    let pulses = document.getElementsByClassName("pulses");
    pulse(pulses);
  }, 4000);

  return (
    <svg
      width="1816"
      height="617"
      viewBox="0 0 1816 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="AnimatedBackground"
      {...rest}
    >
      <g clipPath="url(#clip0)">
        <path d="M300.486 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M300.486 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path d="M543.384 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M543.384 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path d="M1033.92 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M1033.92 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path d="M1258.15 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M1258.15 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path d="M1442.67 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M1442.67 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path d="M1627.63 -0.00012207V616.542Z" fill="#333337" />
        <path
          d="M1627.63 -0.00012207V616.542"
          stroke="#333337"
          strokeWidth="0.799997"
        />
        <path
          className="pulses"
          d="M1262.77 119.143H1253.58V128.329H1262.77V119.143Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1262.77 397.938H1253.58V407.124H1262.77V397.938Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1262.77 537.06H1253.58V546.245H1262.77V537.06Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1447.28 119.143H1438.09V128.329H1447.28V119.143Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1447.28 258.771H1438.09V267.957H1447.28V258.771Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1632.25 258.771H1623.06V267.957H1632.25V258.771Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1632.25 397.938H1623.06V407.124H1632.25V397.938Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1632.25 537.06H1623.06V546.245H1632.25V537.06Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          id="train3"
          d="M1448.95 435.021C1448.95 431.553 1446.14 428.741 1442.67 428.741C1439.2 428.741 1436.39 431.553 1436.39 435.021V456.622C1436.39 460.09 1439.2 462.901 1442.67 462.901C1446.14 462.901 1448.95 460.09 1448.95 456.622V435.021Z"
          fill="#FAC921"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          id="train2"
          d="M1264.44 179.836C1264.44 176.368 1261.63 173.556 1258.16 173.556C1254.69 173.556 1251.88 176.368 1251.88 179.836V201.437C1251.88 204.905 1254.69 207.716 1258.16 207.716C1261.63 207.716 1264.44 204.905 1264.44 201.437V179.836Z"
          fill="#FAC921"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          d="M1449.47 385.202H1443.83V390.838H1441.48V385.202H1435.84V382.847H1441.48V377.196H1443.83V382.847H1449.47V385.202Z"
          fill="#FACD32"
        />
        <path
          d="M1264.96 151.11H1259.32V156.747H1256.97V151.11H1251.33V148.755H1256.97V143.104H1259.32V148.755H1264.96V151.11Z"
          fill="#FACD32"
        />
        <path
          d="M1040.76 81.7835H1035.12V87.4206H1032.77V81.7835H1027.13V79.4289H1032.77V73.7778H1035.12V79.4289H1040.76V81.7835Z"
          fill="#FACD32"
        />
        <path
          id="train1"
          d="M1040.2 287.792C1040.2 284.324 1037.39 281.512 1033.92 281.512C1030.46 281.512 1027.65 284.324 1027.65 287.792V309.393C1027.65 312.861 1030.46 315.673 1033.92 315.673C1037.39 315.673 1040.2 312.861 1040.2 309.393V287.792Z"
          fill="#FAC921"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1632.25 119.143H1623.06V128.329H1632.25V119.143Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          className="pulses"
          d="M1262.77 258.771H1253.58V267.957H1262.77V258.771Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
        <path
          className="pulses"
          d="M1447.28 537.06H1438.09V546.245H1447.28V537.06Z"
          fill="white"
          stroke="#646466"
          strokeWidth="0.799997"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="1815.9" height="616.92" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
