import Header from "../components/Header";
import MembershipForm from "../components/MembershipForm";
import UberBookingForm from "../components/UberBookingForm";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main className="container py-8 space-y-8">
        <MembershipForm />
        <UberBookingForm />
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}
