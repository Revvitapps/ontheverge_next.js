import Image from "next/image";
import LivePreview from "./LivePreview";
import { styleOptions } from "./styles";
import ThemeToggle from "./ThemeToggle";

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
    <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="hero">
        <svg className="hero-arc" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 560 C 260 430, 640 210, 1240 60" />
          <path d="M-40 600 C 300 470, 700 260, 1240 120" />
        </svg>
        <div className="gutter hero-inner">
          <p className="eyebrow">Website design directions · Prepared for KD</p>
          <Image
            className="hero-logo logo-night"
            src="/assets/otv-logo-reverse.png"
            alt="On the Verge Enrichment"
            width={1000}
            height={624}
            priority
          />
          <Image
            className="hero-logo logo-day"
            src="/assets/otv-logo.png"
            alt="On the Verge Enrichment"
            width={1000}
            height={624}
            priority
          />
          <h1>
            Three ways to tell <em>your story.</em>
          </h1>
          <p className="lede">
            Each direction is built from your logo's navy and gold. Open them on your phone and your computer, scroll
            all the way through, and notice which one feels most like you and the people you serve.
          </p>
          <nav className="jump" aria-label="Style options">
            {styleOptions.map((o) => (
              <a key={o.slug} href={`#${o.slug}`}>
                <span>{o.number}</span>
                {o.name}
              </a>
            ))}
            <a href="/brand">
              <span>Plus</span>Brand guide
            </a>
          </nav>
        </div>
      </header>

      {styleOptions.map((o, i) => (
        <section
          key={o.slug}
          id={o.slug}
          className={`option ${i % 2 ? "flip" : ""}`}
          style={{
            ["--band-dark" as string]: o.ground,
            ["--band-ink-dark" as string]: o.ink,
            ["--band-light" as string]: o.groundLight,
            ["--band-ink-light" as string]: o.inkLight,
          }}
        >
          <div className="gutter option-inner">
            <div className="option-copy">
              <p className="option-num">Option {o.number}</p>
              <h2>{o.name}</h2>
              <p className="feel">{o.feel}</p>
              <p className="desc">{o.description}</p>
              <ul className="swatches" aria-label={`${o.name} palette`}>
                {o.swatches.map((c) => (
                  <li key={c} style={{ background: c }} title={c} />
                ))}
              </ul>
              <a className="btn" href={`/${o.slug}`}>
                <Star className="btn-star" />
                View the {o.name} site
              </a>
            </div>
            <a className="option-art" href={`/${o.slug}`} aria-label={`Open the ${o.name} style`}>
              <div className="device desktop">
                <div className="device-bar">
                  <i />
                  <i />
                  <i />
                  <span>otvenrichment.com</span>
                </div>
                <LivePreview src={`/${o.slug}`} title={`${o.name} desktop preview`} device="desktop" />
              </div>
              <div className="device phone">
                <LivePreview src={`/${o.slug}`} title={`${o.name} phone preview`} device="phone" />
              </div>
            </a>
          </div>
        </section>
      ))}

      <section className="brand-band">
        <div className="gutter brand-inner">
          <div>
            <p className="eyebrow">The foundation under all three</p>
            <h2>Your brand guide</h2>
            <p className="lede">
              The colors sampled straight from your logo, the typefaces, how to use the logo, the kind of photos to
              take, and the voice of the ministry. Whichever style you choose, it all comes from here.
            </p>
            <a className="btn btn-gold" href="/brand">
              Open the brand guide
            </a>
          </div>
          <a className="brand-art" href="/brand" aria-label="Open the brand guide">
            <Image src="/assets/otv-mark-reverse.png" alt="" width={520} height={364} loading="eager" />
            <div className="chips">
              {["#13303E", "#1E4C63", "#BC9045", "#D9B465", "#F6F3EC"].map((c) => (
                <span key={c} style={{ background: c }}>
                  {c}
                </span>
              ))}
            </div>
          </a>
        </div>
      </section>

      <section className="next">
        <div className="gutter next-inner">
          <h2>What happens next</h2>
          <ol>
            <li>
              <p>
                <b>Pick your favorite.</b> Tell Matthew which direction feels right. You can mix in a detail you love
              from another.
              </p>
            </li>
            <li>
              <p>
                <b>Send your pieces.</b> Your bio and portrait, mission, programs, upcoming events and a handful of
              photos from real gatherings. The dashed gold tags on each page show what we still need.
              </p>
            </li>
            <li>
              <p>
                <b>We build it for real.</b> Your one-page site goes live on otvenrichment.com, fast on every phone
              and ready to grow with the ministry.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <footer className="foot">
        <div className="gutter foot-inner">
          <span>On the Verge Enrichment · Design preview</span>
          <span>Prepared by Revvit · Photos and copy are placeholders</span>
        </div>
      </footer>
      <ThemeToggle />
    </main>
  );
}
