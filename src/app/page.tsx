import Link from "next/link";
import TerminalLine from "./components/TerminalLine";
import Tile from "./components/Tile";
import TileBox from "./components/TileBox";

export const metadata = {
  title: "Home | mateisr.com",
  description: "Matei Radu's personal website",
};

export default function Home() {
  return (
    <TileBox className="flex-col md:flex-row">
      <Tile>

        <div className="flex flex-col">

          <TerminalLine className="text-lg">whoami</TerminalLine>

          <span className="text-white text-lg font-mono">Matei Radu</span>
          <span className="text-white text-lg font-mono">---------------------------</span>

          <div className="flex">
            <span className="text-white text-lg font-mono w-24">email:</span>
            <Link href="mailto:mateisr@pm.me">
              <span className="text-[#995900] text-lg font-mono">mateisr@pm.me</span>
            </Link>
          </div>

          <div className="flex">
            <span className="text-white text-lg font-mono w-24">github:</span>
            <Link href="https://github.com/MateiSR/" target="_blank" rel="noopener noreferrer">
              <span className="text-[#995900] text-lg font-mono">github.com/mateisr</span>
            </Link>
          </div>

        </div>

        <div className="flex flex-col mt-2">

          <TerminalLine className="text-lg">about</TerminalLine>

          <div className="flex flex-col">
            <span className="text-white text-lg font-mono">I am a Bachelor's student at the <span className="underline decoration-dashed">Faculty of Computer Science</span>, part of <span className="italic">"Alexandru Ioan Cuza" University</span> of Iasi.</span>

            <span className="text-white text-lg font-mono">My expertise spans <span className="underline decoration-dashed">full-stack development</span> with <span className="underline decoration-dashed">React</span> and <span className="underline decoration-dashed">Next.js</span>, crafting <span className="underline decoration-dashed">API integrations</span>, and developing <span className="underline decoration-dashed">Discord bots</span>.</span>

            <span className="text-white text-lg font-mono">I enjoy tackling <span className="underline decoration-dashed">system administration</span> challenges, working with <span className="underline decoration-dashed">Linux environments</span>, <span className="underline decoration-dashed">Proxmox virtualization</span>, and <span className="underline decoration-dashed">Docker containerization</span>.</span>

            <span className="text-white text-lg font-mono">I'm passionate about <span className="underline decoration-dashed">DevOps</span> practices, implementing <span className="underline decoration-dashed">CI/CD pipelines</span>, and automating deployments with <span className="underline decoration-dashed">GitHub Actions</span>.</span>

            <span className="text-white text-lg font-mono">I'm constantly exploring ways to combine these technologies to build cool and useful apps.</span>

            <span className="text-white text-lg font-mono">If you're interested in collaborating with me, or have a good project suggestion, don't hesitate to get in contact.</span>
          </div>

        </div>
      </Tile>
      <TileBox className="flex-col">
        <Tile>
          public ssh key, linkedin
        </Tile>
        <Tile>
          programming languages & technologies
        </Tile>
      </TileBox>
    </TileBox>
  );
}
