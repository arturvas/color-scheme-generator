function PaletteDisplay() {
  return (
    <>
      <div className="">
        <div>RED</div>
        <div>BLACK</div>
        <div>YELLOW</div>
        <div>GREEN</div>
        <div>PURPLE</div>
      </div>
      <div className="">
        <div>#F55A5A</div>
        <div>#2B283A</div>
        <div>#FBF3AB</div>
        <div>#AAD1B6</div>
        <div>#A626D3</div>
      </div>
    </>
  );
}

function ControlBar() {
  return (
    <div className="flex justify-center items-center w-full h-22.5">
      <form className="flex justify-between w-full gap-3 p-5">
        <input type="color" className="shrink-0 h-10" />
        <select
          className="h-10 w-full border border-gray-300 rounded-md px-2 py-2 text-gray-700 cursor-pointer"
          name="scheme"
          id="scheme"
        >
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome-dark</option>
          <option value="monochrome-light">Monochrome-light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-complement</option>
          <option value="triad">Triad</option>
        </select>
        <button
          type="button"
          value=""
          className="h-10 px-4 shrink-0 border border-gray-300 rounded-md text-xs"
        >
          Get color scheme
        </button>
      </form>
    </div>
  );
}

function ColorSchemeGenerator({ colors }) {
  return (
    <div className="w-137.5 h-137.5 bg-white rounded-2xl shadow-lg">
      <ControlBar />
      <PaletteDisplay colors={colors} />
    </div>
  );
}

const COLORS = [
  { mode: 'monochrome', hex: ['#F55A5A', '#C44444', '#962E2E', '#6B1E1E', '#3D0A0A'] },
  { mode: 'monochrome-dark', hex: ['#2B0A0A', '#4A1010', '#6B1E1E', '#8C2C2C', '#AE3A3A'] },
  { mode: 'monochrome-light', hex: ['#F55A5A', '#F77A7A', '#F99A9A', '#FBBABA', '#FDDADA'] },
  { mode: 'analogic', hex: ['#F55A5A', '#F5A55A', '#F5F55A', '#5AF55A', '#5A5AF5'] },
  { mode: 'complement', hex: ['#F55A5A', '#5AF5F5', '#3ADADA', '#1ABABA', '#009A9A'] },
  { mode: 'analogic-complement', hex: ['#F55A5A', '#F5A55A', '#5AF5F5', '#5A5AF5', '#A55AF5'] },
  { mode: 'triad', hex: ['#F55A5A', '#5AF55A', '#5A5AF5', '#F5F55A', '#F55AF5'] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ColorSchemeGenerator colors={COLORS} />
    </div>
  );
}
