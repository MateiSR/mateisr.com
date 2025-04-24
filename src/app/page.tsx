export default function Home() {
  return (
    <div className="h-screen w-screen p-4">
      <div className="flex flex-row h-full w-full gap-4">
        <div className="tile flex flex-col items-center justify-center w-1/2 p-4">
          <p>Tile 1</p>
        </div>
        <div className="tile flex flex-col items-center justify-center w-1/2 p-4">
          <p>Tile 2</p>
        </div>
      </div>
    </div>
  );
}
