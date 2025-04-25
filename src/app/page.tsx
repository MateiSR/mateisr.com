import TerminalLine from "./components/TerminalLine";
import Tile from "./components/Tile";
import TileBox from "./components/TileBox";

export default function Home() {
  return (
    <TileBox className="flex-col md:flex-row">
      <Tile>
        <TerminalLine>whoami</TerminalLine>
      </Tile>
      <TileBox className="flex-col">
        <Tile>
        </Tile>
        <Tile>
        </Tile>
      </TileBox>
    </TileBox>
  );
}
