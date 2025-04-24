export default function Home() {
  return (
      <div className="flex flex-col md:flex-row h-full w-full gap-4">
        <div className="tile flex flex-col items-center justify-center flex-1 p-4">
          <p>Tile 1</p>
        </div>
        <div className="tile flex flex-col items-center justify-center flex-1 p-4">
          <p>Tile 2</p>
        </div>
      </div>
  );
}
