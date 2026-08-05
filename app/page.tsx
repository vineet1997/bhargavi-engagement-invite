"use client";

import { useEffect, useRef, useState } from "react";

const mapUrl = "https://www.google.com/maps/search/?api=1&query=Uttaradi%20Mutt%2C%204th%20Floor%2C%20Pampa%20Mahakavi%20Road%2C%20Shankarapura%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004";
const address = "Uttaradi Mutt, 4th Floor\nPampa Mahakavi Road, Shankarapura\nBasavanagudi, Bengaluru, Karnataka 560004";

function ZariMark() {
  return <span className="zari-mark" aria-hidden="true"><i /><b /><i /></span>;
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.16 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [opened]);

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

  function openInvitation() {
    setOpened(true);
    window.setTimeout(() => heroRef.current?.focus({ preventScroll: true }), 420);
  }

  return <main className={`invite${opened ? " invite--opened" : ""}`}>
    <div className="zari-rails" aria-hidden="true"><i /><i /></div>
    <span className="sr-only" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span>

    {!opened && <section className="threshold" aria-label="Engagement invitation gateway">
      <div className="threshold__photo" aria-hidden="true" />
      <div className="threshold__veil" aria-hidden="true" />
      <div className="threshold__top"><p>Shree Laxmi Venkateshwara Prasanna</p><p>Shree Halliraya Prasanna</p></div>
      <div className="threshold__center">
        <p className="threshold__names">Bhargavi <i>&amp;</i> Sukruth</p>
        <p className="threshold__label">Engagement Ceremony</p>
        <span className="threshold__date">Thursday, 27 August 2026 · Bengaluru</span>
        <button className="threshold__open" type="button" onClick={openInvitation}>Open invitation <span aria-hidden="true">→</span></button>
      </div>
    </section>}

    <div className="story" aria-hidden={!opened}>
      <section id="hero" ref={heroRef} className="scene hero reveal" tabIndex={-1}>
        <p className="utility-copy">With the blessings of our parents</p>
        <div className="hero__invocation">Shree Laxmi Venkateshwara Prasanna<br />Shree Halliraya Prasanna</div>
        <ZariMark />
        <p className="hero__occasion">Engagement Ceremony</p>
        <h1><span>Bhargavi</span><em>&amp;</em><span>Sukruth</span></h1>
        <div className="hero__date"><span>Thursday</span><b>27 August 2026</b><span>Bengaluru</span></div>
        <div className="hero__palace" aria-hidden="true" />
      </section>

      <section className="scene time-scene reveal" aria-labelledby="time-title">
        <div className="time-scene__number" aria-hidden="true">27</div>
        <div className="time-scene__content">
          <p id="time-title" className="utility-copy">Thursday</p><h2>August <span>2026</span></h2><ZariMark />
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
        <div className="venue-scene__actions"><a href={mapUrl} className="directions" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a><button type="button" className="copy-address" onClick={copyAddress}>{copied ? "Address copied" : "Copy address"}</button></div>
      </section>

      <footer className="scene closing-scene reveal">
        <div className="closing-scene__image" aria-hidden="true" />
        <p className="utility-copy">With best compliments</p>
        <p className="closing-scene__family">Smt Chaya and Shri Santosh Kumar Sandur<br />Vinayak Sandur</p>
        <button className="share" type="button" onClick={shareInvite}>Share invitation <span aria-hidden="true">↗</span></button>
      </footer>
    </div>
  </main>;
}
