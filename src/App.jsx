import { useState } from 'react';

function PaletteDisplay({ scheme }) {
  // const COLORS = [
  //   {
  //     mode: 'monochrome',
  //     colors: { hex: { value: ['#F55A5A', '#C44444', '#962E2E', '#6B1E1E', '#3D0A0A'] } },
  //   },
  //   {
  //     mode: 'monochrome-dark',
  //     colors: { hex: { value: ['#2B0A0A', '#4A1010', '#6B1E1E', '#8C2C2C', '#AE3A3A'] } },
  //   },
  //   {
  //     mode: 'monochrome-light',
  //     colors: { hex: { value: ['#F55A5A', '#F77A7A', '#F99A9A', '#FBBABA', '#FDDADA'] } },
  //   },
  //   {
  //     mode: 'analogic',
  //     colors: { hex: { value: ['#F55A5A', '#F5A55A', '#F5F55A', '#5AF55A', '#5A5AF5'] } },
  //   },
  //   {
  //     mode: 'complement',
  //     colors: { hex: { value: ['#F55A5A', '#5AF5F5', '#3ADADA', '#1ABABA', '#009A9A'] } },
  //   },
  //   {
  //     mode: 'analogic-complement',
  //     colors: { hex: { value: ['#F55A5A', '#F5A55A', '#5AF5F5', '#5A5AF5', '#A55AF5'] } },
  //   },
  //   {
  //     mode: 'triad',
  //     colors: { hex: { value: ['#F55A5A', '#5AF55A', '#5A5AF5', '#F5F55A', '#F55AF5'] } },
  //   },
  // ];

  return (
    <div className="h-full flex flex-col">
      <div className="inline-grid grid-cols-5 w-full text-center flex-1">
        {scheme != null ? (
          scheme.colors.map((objColor) => {
            return <div key={objColor.clean} style={{ backgroundColor: objColor.value }}></div>;
          })
        ) : (
          <span>Choose a color</span>
        )}
      </div>
      <div className="inline-grid items-center grid-cols-5 w-full text-center h-11.5">
        {scheme != null ? (
          scheme.colors.map((colorTextHex) => {
            return <div key={colorTextHex.clean}>{colorTextHex.value}</div>;
          })
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

function ControlBar({ fetchColors, hex, setHex, loading, setMode }) {
  const modes = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
  ];

  return (
    <div className="flex justify-center items-center w-full h-22.5">
      <form className="flex justify-between w-full gap-3 p-5">
        <input
          type="color"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          className="shrink-0 h-10"
        />
        <select
          className="h-10 w-full border border-gray-300 rounded-md px-2 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
          onChange={(e) => setMode(e.target.value)}
          name="scheme"
          id="scheme"
        >
          {modes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={fetchColors}
          value=""
          className="h-10 px-4 shrink-0 border border-gray-300 rounded-md text-xs cursor-pointer hover:bg-gray-100"
        >
          {loading ? 'Getting colors...' : 'Get color scheme'}
        </button>
      </form>
    </div>
  );
}

function ColorSchemeGenerator() {
  const [scheme, setScheme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hex, setHex] = useState('#ff5050');
  const [mode, setMode] = useState('monochrome');

  function fetchColors() {
    setLoading(true);

    const cleanHex = hex.replace('#', '');

    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanHex}&mode=${mode}`)
      .then((res) => res.json())
      .then((data) => {
        return {
          mode: data.mode,
          colors: data.colors.map((color) => ({
            value: color.hex.value,
            clean: color.hex.clean,
          })),
        };
      })
      .then((cleanScheme) => {
        setScheme(cleanScheme);
        console.log(cleanScheme);
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col w-137.5 h-137.5 bg-white rounded-2xl shadow-lg">
      <ControlBar
        fetchColors={fetchColors}
        loading={loading}
        hex={hex}
        setHex={setHex}
        setMode={setMode}
      />
      <PaletteDisplay scheme={scheme} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ColorSchemeGenerator />
    </div>
  );
}
