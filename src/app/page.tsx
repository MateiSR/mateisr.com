import Tile from "./components/Tile";
import TileBox from "./components/TileBox";

export default function Home() {
  return (
    <TileBox className="flex-col md:flex-row">
      <Tile>
        <p>Tile 1</p>
      </Tile>
      <TileBox className="flex-col">
        <Tile>
          <p>Tile 2</p>
        </Tile>
        <Tile>
          <p>Tile 3</p>
        </Tile>
      </TileBox>
    </TileBox>
  );
}
