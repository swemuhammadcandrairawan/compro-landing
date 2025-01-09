import Hero from "@/app/components/section/hero";
import Service from "@/app/components/section/service";
import About from "@/app/components/section/about";
import Process from "@/app/components/section/process";

async function getSettings() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/get-public-setting`,{
    cache:"force-cache"
  })
  return response.json()
}

export default async function Home() {
  const settings = await getSettings()
  return (
    <>
      <Hero />
      <Service />
      <div className="container">
        <hr />
      </div>
      <About settings={settings?.data || {}} />
      <Process />
    </>
  );
}
