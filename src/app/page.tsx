import Link from "next/link";
import TerminalLine from "./components/TerminalLine";
import Tile from "./components/Tile";
import TileBox from "./components/TileBox";
import CollapseBox from "./components/CollapseBox";

export const metadata = {
  title: "Home | mateisr.com",
  description: "Matei Radu's personal website",
};

const sshKeyBox = () => {
  const sshKey = "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAntGag8vt1c90nopowfknpezmjKEtC+9b1P5tiCzslIMgU8jZpIwKK9CIfHMRnp4mxWcIYCjtHa46DOFZ2obZIAvfuHToW8pR6cBIHaqGma7bOFR3AYJk05KHdgeV5S4yr1jMEVkERvdMBh6mDX/XCdQRuUlf442VHX78rKBet7rAIJ6a3D7tHfKtij80bLx+NwrgGLPVxM04jZSMq0GiExJWVT5ZHSGtJdRLqLniZDHx3h9nMXxxrzh+rVea4x/nZD+usFIB5kWeGSUGcCs0cGY05ADJ0iaLwabkFMBwBMMSeIQofPt4etUE7B6QojW++crkwJsts6E78hJIQIhLHw==";
  const truncatedKey = sshKey.substring(0, 100) + "...";

  return <CollapseBox
    collapsedContent={<span className="text-[#cc7700] text-xs lg:text-sm">{truncatedKey}</span>}
    expandedContent={<span className="text-[#cc7700] text-xs lg:text-sm">{sshKey}</span>}
    copyText={sshKey}
  />
}

export default function Home() {
  return (
    <TileBox className="flex-col md:flex-row">
      <Tile>

        <div className="flex flex-col">

          <TerminalLine className="text-base lg:text-lg xl:text-xl">whoami</TerminalLine>

          <span className="text-white text-base lg:text-lg xl:text-xl font-mono">Matei Radu</span>
          <span className="text-white text-base lg:text-lg xl:text-xl font-mono">---------------------------</span>

          <div className="flex">
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono w-24">email:</span>
            <Link href="mailto:mateisr@pm.me">
              <span className="text-[#995900] text-base lg:text-lg xl:text-xl font-mono">mateisr@pm.me</span>
            </Link>
          </div>

          <div className="flex">
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono w-24">github:</span>
            <Link href="https://github.com/MateiSR/" target="_blank" rel="noopener noreferrer">
              <span className="text-[#995900] text-base lg:text-lg xl:text-xl font-mono">github.com/mateisr</span>
            </Link>
          </div>

        </div>

        <div className="flex flex-col mt-2">
          <TerminalLine className="text-base lg:text-lg xl:text-xl">about</TerminalLine>
          <div className="flex flex-col gap-2 md:gap-4">
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono">I'm a Bachelor's student at the <Link href="https://www.info.uaic.ro/" target="_blank" rel="noopener noreferrer"><span className="underline text-[#c0c0c0]">Faculty of Computer Science</span></Link>, part of <span className="italic">"Alexandru Ioan Cuza" University</span> of Iasi.</span>
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono">My expertise spans building projects in <span className="underline decoration-dashed">C/C++</span>, <span className="underline decoration-dashed">Java</span>, <span className="underline decoration-dashed">Python</span>, <span className="underline decoration-dashed">TypeScript/JavaScript</span>, <span className="underline decoration-dashed">bash</span> scripting, deploying apps with  <span className="underline decoration-dashed">Docker</span> as well as <span className="underline decoration-dashed">full-stack development</span> with <span className="underline decoration-dashed">React</span> and <span className="underline decoration-dashed">Next.js</span>,</span>
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono">I enjoy tinkering with <span className="underline decoration-dashed">Linux environments</span>, be it crafting bash scripts to make life easier, re-writing my <Link href="https://github.com/mateisr/dotfiles" target="_blank" rel="noopener noreferrer" className="underline text-[#995900]">dotfiles</Link>, or writing Dockerfiles to deploy stuff via <Link href="https://github.com/dokku/dokku" target="_blank" rel="noopener noreferrer" className="italic text-[#800b00]">dokku</Link> and <span className="underline decoration-dashed">Cloudflare Tunnels</span> to my <span className="underline decoration-dashed">Proxmox</span> environment.</span>
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono">Furthermore, I'm also passionate about <span className="underline decoration-dashed">DevOps</span> practices and implementing <span className="underline decoration-dashed">CI/CD pipelines</span> with <span className="underline decoration-dashed">GitHub Actions</span>.</span>
            <span className="text-white text-base lg:text-lg xl:text-xl font-mono">If you're interested in collaborating on a project, don't hesitate to get in contact.</span>
          </div>
        </div>

      </Tile>
      <TileBox className="flex-col">
        <Tile>
          <div className="flex flex-col">
            <TerminalLine className="text-base lg:text-lg xl:text-xl">identity</TerminalLine>
            <div className="flex flex-col">
              <div className="flex">
                <span className="text-white text-base lg:text-lg xl:text-xl font-mono w-36">linkedin:</span>
                <Link href="https://www.linkedin.com/in/matei-radu-4a4718196/" target="_blank" rel="noopener noreferrer">
                  <span className="text-[#995900] text-base lg:text-lg xl:text-xl font-mono">linkedin.com/in/matei-radu-4a4718196/</span>
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <TerminalLine className="text-base lg:text-lg xl:text-xl">cat ~/.ssh/id_rsa.pub</TerminalLine>
                {sshKeyBox()}
              </div>
            </div>
          </div>
        </Tile>
        <Tile>
          programming languages & technologies
        </Tile>
      </TileBox>
    </TileBox>
  );
}
