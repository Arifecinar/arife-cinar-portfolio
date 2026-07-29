import AuroraBackground from './components/AuroraBackground';
import LandingClient from './components/LandingClient';

export default function Home() {
  return (
    <>
      {/* Aurora + particle canvas background (client, fixed position) */}
      <AuroraBackground />
      {/* Main bilingual landing content */}
      <LandingClient />
    </>
  );
}
