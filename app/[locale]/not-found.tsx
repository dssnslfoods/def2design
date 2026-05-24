import { Link } from "@/i18n/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="page-wrap">
      <Nav />
      <section style={{ padding: "160px var(--page-x)", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(72px, 10vw, 148px)", lineHeight: 0.92, letterSpacing: "-.02em", marginBottom: 40 }}>
          404. This page is{" "}
          <em style={{ fontStyle: "italic", color: "var(--emerald)" }}>unsigned.</em>
        </h1>
        <Link
          href="/"
          style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gray)", textDecoration: "none" }}
        >
          ← Return home
        </Link>
      </section>
      <Footer />
    </div>
  );
}
