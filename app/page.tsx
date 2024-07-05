import Image from "next/image";
import Mark from "./components/Mark";
import reblogImage from "./images/reblog.png";
import { Button } from "./components/Button";

function Reblog() {
  return (
    <div className="w-screen h-screen bg-[#0D2F4D] text-background p-12 flex flex-col justify-center items-center gap-16 overflow-hidden">
      <div className="flex flex-col gap-4 items-center mt-48">
        <h2 className="font-mono font-bold text-6xl text-white">reblog</h2>
        <span className="text-[#ffffff90] text0">
          轻量的、基于Go的自托管博客系统
        </span>
        <Button href="https://github.com/redish101/reblog">
          在GitHub上查看
        </Button>
      </div>
      <div>
        <Image
          src={reblogImage}
          alt="reblog-demo"
          className="shadow-sky-500 rounded-xl lg:w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}

function QrcodeGenerator() {
  return (
    <div className="w-screen h-screen bg-[#56b0ff] text-background p-12 flex flex-col justify-center items-center gap-16 overflow-hidden">
      <div className="flex flex-col gap-4 items-center mt-48">
        <h2 className="font-mono font-bold text-6xl text-white">reblog</h2>
        <span className="text-[#ffffff90] text0">
          轻量的、基于Go的自托管博客系统
        </span>
        <Button href="https://github.com/redish101/reblog">
          在GitHub上查看
        </Button>
      </div>
      <div>
        <Image
          src={reblogImage}
          alt="reblog-demo"
          className="shadow-sky-500 rounded-xl lg:w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 h-screen justify-center">
        <div className="text-4xl">
          Hi
          <br />
          I&apos;m <Mark>Redish101</Mark>
        </div>
        <div className="text-lg text-gray-700">学生，人，活的</div>
      </div>
      <Reblog />
      {/* <QrcodeGenerator /> */}
    </div>
  );
}
