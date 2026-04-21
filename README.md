# Color Scheme Generator

A React app that generates color palettes from a chosen color and scheme mode using the [The Color API](https://www.thecolorapi.com/).

## Skills practiced

- **`useState`** — managing color input, scheme mode, fetched palette, and loading state
- **`fetch`** — calling the Color API and chaining `.then()` to parse and transform the response
- **`Array.map`** — rendering scheme mode options, palette swatches, and hex labels from arrays
- **Tailwind CSS** — utility-first styling for layout, colors, and responsive design without writing custom CSS

## How it works

1. Pick a color and a scheme mode (monochrome, complement, triad, etc.)
2. Click **Get color scheme**
3. The app fetches from `https://www.thecolorapi.com/scheme?hex=<hex>&mode=<mode>` and displays 5 swatches with their hex codes
