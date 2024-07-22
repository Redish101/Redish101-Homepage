import Image from "next/image";
import Mark from "./components/Mark";
import reblogImage from "./images/reblog.png";
import { Button } from "./components/Button";

function Reblog() {
  return (
    <div className="bg-[#0D2F4D] text-background p-12 flex flex-col justify-center items-center gap-16 overflow-hidden">
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

async function ReMonitor() {
  const monitorRes = await fetch("https://redish101-remonitor.deno.dev", {
    cache: "no-cache",
  });
  const monitorData = await monitorRes.json();

  const latestReMonitorEventTimeDiff =
    monitorData["data"];

  const msToStr = (ms: number) => {
    const sec = Math.floor(ms / 1000);
    const min = Math.floor(sec / 60);
    const hour = Math.floor(min / 60);
    const day = Math.floor(hour / 24);

    const strArr = [];
    if (day > 0) strArr.push(`${day}天`);
    if (hour > 0) strArr.push(`${hour % 24}小时`);
    if (min > 0) strArr.push(`${min % 60}分`);
    if (sec > 0) strArr.push(`${sec % 60}秒`);

    return strArr.join("");
  };

  if (!monitorData["success"]) return null;

  return (
    <div className="p-12 flex flex-col gap-16 h-screen justify-center">
      <div className="flex flex-col gap-4 ">
        <h2 className="font-bold text-2xl text-slate-600">remonitor</h2>
        <h2 className="font-bold text-6xl">活动监测</h2>
      </div>
      <div>
        <div className="font-normal text-2xl">
          上次正常状态上报于
          <span className="font-bold font-mono text-teal-700 text-4xl mx-8">
            {msToStr(latestReMonitorEventTimeDiff)}前
          </span>
        </div>
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
      <ReMonitor />
      {/* <QrcodeGenerator /> */}
    </div>
  );
}
