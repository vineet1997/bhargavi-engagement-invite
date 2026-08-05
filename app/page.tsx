"use client";

import { useEffect, useRef, useState } from "react";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Uttaradi%20Mutt%2C%204th%20Floor%2C%20Pampa%20Mahakavi%20Road%2C%20Shankarapura%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004";
const address = "Uttaradi Mutt, 4th Floor\nPampa Mahakavi Road, Shankarapura\nBasavanagudi, Bengaluru, Karnataka 560004";

function ZariMark() {
  return <span className="zari-mark" aria-hidden="true"><i /><b /><i /></span>;
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const introRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.16 },
    );
    sections.forEach((section) => observer.observe(section));

    const intro = introRef.current;
    if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => observer.disconnect();

    let frame: number | null = null;
    const smoothstep = (start: number, end: number, value: number) => {
      const t = Math.min(1, Math.max(0, (value - start) / (end - start)));
      return t * t * (3 - 2 * t);
    };
    const updateIntro = () => {
      frame = null;
      const range = Math.max(1, intro.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -intro.getBoundingClientRect().top / range));
      const copyExit = smoothstep(0.08, 0.30, progress);
      const palacePush = smoothstep(0.18, 0.52, progress);
      const paperArrival = smoothstep(0.36, 0.62, progress);

      intro.style.setProperty("--intro-progress", progress.toFixed(4));
      intro.style.setProperty("--cover-copy-opacity", (1 - copyExit).toFixed(4));
      intro.style.setProperty("--cover-copy-lift", (copyExit * 30).toFixed(2));
      intro.style.setProperty("--cover-cue-opacity", (1 - smoothstep(0.01, 0.13, progress)).toFixed(4));
      intro.style.setProperty("--palace-scale", (1 + palacePush * 0.16).toFixed(4));
      intro.style.setProperty("--palace-shift", (palacePush * 1.5).toFixed(3));
      intro.style.setProperty("--veil-opacity", (0.94 - palacePush * 0.12).toFixed(4));
      intro.style.setProperty("--paper-y", `${(100 - paperArrival * 100).toFixed(2)}%`);
    };
    const requestUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateIntro);
    };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  async function shareInvite() {
    const data = { title: "Bhargavi & Sukruth", text: "Engagement Ceremony - 27 August 2026 - Bengaluru", url: window.location.href };
    if (navigator.share) await navigator.share(data);
    else {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  }

  return <main className="invite">
    <a className="skip-link" href="#hero">Skip to invitation</a>
    <div className="zari-rails" aria-hidden="true"><i /><i /></div>
    <span className="sr-only" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span>

    <section ref={introRef} className="intro-chapter" aria-label="Bhargavi and Sukruth engagement invitation">
      <div className="intro-stage">
        <div className="cover-stage__photo" aria-hidden="true" />
        <div className="cover-stage__veil" aria-hidden="true" />
        <div className="cover-stage__copy">
          <div className="cover-stage__top"><p>Shree Laxmi Venkateshwara Prasanna</p><p>Shree Halliraya Prasanna</p></div>
          <div className="cover-stage__center">
            <p className="cover-stage__names">Bhargavi <i>&amp;</i> Sukruth</p>
            <p className="cover-stage__label">Engagement Ceremony</p>
            <span className="cover-stage__date">Thursday, 27 August 2026 &middot; Bengaluru</span>
          </div>
          <p className="cover-stage__cue">Scroll to enter <span aria-hidden="true" /></p>
        </div>

        <section id="hero" className="intro-paper hero" tabIndex={-1}>
          <div className="intro-paper__grain" aria-hidden="true" />
          <div className="hero__content">
            <p className="utility-copy">With the blessings of our parents</p>
            <div className="hero__invitation">We would love your presence on this auspicious day</div>
            <ZariMark />
            <p className="hero__occasion">Engagement Ceremony</p>
            <h1><span>Bhargavi</span><em>&amp;</em><span>Sukruth</span></h1>
            <div className="hero__date"><span>Thursday</span><b>27 August 2026</b><span>Bengaluru</span></div>
          </div>
          <div className="hero__palace" aria-hidden="true" />
        </section>
      </div>
    </section>

    <div className="story">
      <section className="scene time-scene reveal" aria-labelledby="time-title">
        <div className="time-scene__number" aria-hidden="true">27</div>
        <div className="time-scene__content">
          <p id="time-title" className="utility-copy">Thursday</p>
          <p className="time-scene__date"><span>27 August</span><small>2026</small></p><ZariMark />
          <p className="time-scene__hour">8:45 <small>AM</small></p><p className="time-scene__onwards">Onwards</p>
          <p className="time-scene__note">The celebration begins</p>
        </div>
      </section>

      <section className="scene programme-scene reveal" aria-labelledby="programme-title">
        <div className="programme-scene__heading"><p id="programme-title" className="utility-copy">The celebration</p><h2>The ceremony unfolds</h2></div>
        <div className="ceremony-path">
          <article className="moment"><span className="moment__index">01</span><span className="moment__dot" aria-hidden="true" /><div><p>Engagement Ceremony</p><small>8:45 AM onwards</small></div></article>
          <article className="moment moment--interlude"><span className="moment__index">02</span><span className="moment__dot" aria-hidden="true" /><div><p>Cake Cutting</p><small>Following the ceremony</small></div></article>
          <article className="moment"><span className="moment__index">03</span><span className="moment__dot" aria-hidden="true" /><div><p>Lunch</p><small>12:30 PM onwards</small></div></article>
        </div>
      </section>

      <section className="scene venue-scene reveal" aria-labelledby="venue-title">
        <div className="venue-scene__image" aria-hidden="true" />
        <p id="venue-title" className="utility-copy">Venue</p><h2>Uttaradi Mutt</h2><p className="venue-scene__city">Basavanagudi, Bengaluru</p><ZariMark />
        <address>4th Floor, Pampa Mahakavi Road<br />Shankarapura, Basavanagudi<br />Bengaluru, Karnataka 560004</address>
        <div className="venue-scene__actions"><a href={mapUrl} className="directions" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">{"\u2197"}</span></a><button type="button" className="copy-address" onClick={copyAddress}>{copied ? "Address copied" : "Copy address"}</button></div>
      </section>

      <footer className="scene closing-scene reveal">
        <div className="closing-scene__image" aria-hidden="true" />
        <p className="utility-copy">With best compliments</p>
        <p className="closing-scene__family">Smt Chaya and Shri Santosh Kumar Sandur<br />Vinayak Sandur</p>
        <button className="share" type="button" onClick={shareInvite}>Share invitation <span aria-hidden="true">{"\u2197"}</span></button>
      </footer>
    </div>
  </main>;
}
