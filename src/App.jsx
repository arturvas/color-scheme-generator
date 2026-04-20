import './App.css';

function PaletteDisplay() {
  return (
    <>
      <div className="colors-visual">
        <div>RED</div>
        <div>BLACK</div>
        <div>YELLOW</div>
        <div>GREEN</div>
        <div>PURPLE</div>
      </div>
      <div className="colors-hex">
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
    <div>
      <form>
        <input type="color"/>
        <label htmlFor="scheme">Select a scheme:</label>
        <select name="scheme" id="scheme">
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome-dark</option>
          <option value="monochrome-light">Monochrome-light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic-complement</option>
          <option value="triad">Triad</option>
        </select>
        <button type="submit" value="Submit">Get color scheme</button>
      </form>
    </div>
  );
}

function ColorSchemeGenerator({ colors }) {
  return (
    <div>
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
  return <ColorSchemeGenerator colors={COLORS} />;
}
