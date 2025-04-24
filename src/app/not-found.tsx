import Tile from "./components/Tile";
import TileBox from "./components/TileBox";

export default function NotFound() {
  return (
    <TileBox>
      <Tile className="items-center justify-center gap-2">
        <span className="text-2xl font-bold">404</span>
        <p className="text-lg">Page Not Found</p>
      </Tile>
    </TileBox>
  )
}
