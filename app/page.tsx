import StarField from './components/StarField';
import LandingClient from './components/LandingClient';

export default function Home() {
  return (
    <>
      {/* Animated star background (client, fixed position) */}
      <StarField />
      {/* Main bilingual landing content */}
      <LandingClient />
    </>
  );
}
