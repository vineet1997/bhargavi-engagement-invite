"use client";

import { useState } from "react";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Uttaradi%20Mutt%2C%204th%20Floor%2C%20Pampa%20Mahakavi%20Road%2C%20Shankarapura%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004";

const address = `Uttaradi Mutt, 4th Floor
Pampa Mahakavi Road, Shankarapura
Basavanagudi, Bengaluru, Karnataka 560004`;

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    await navigator.clipboard?.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <main className={opened ? "invitation invitation--open" : "invitation"}>
      <div className="paper-grain" aria-hidden="true" />
      <div className="palace-shadow" aria-hidden="true" />
      <div className="frame frame--outer" aria-hidden="true" />
      <div className="frame frame--inner" aria-hidden="true" />

      {!opened && (
        <section className="welcome" aria-label="Open invitation">
          <div className="welcome__mark" aria-hidden="true"><span /><span /><span /></div>
          <p className="eyebrow">With the blessings of our parents</p>
          <p className="invocation">Shree Laxmi Venkateshwara Prasanna<br />Shree Halliraya Prasanna</p>
          <h1>Bhargavi <i>&amp;</i> Sukruth</h1>
          <p className="welcome__event">Engagement Ceremony</p>
          <button className="open-button" onClick={() => setOpened(true)}>Open invitation <span aria-hidden="true">→</span></button>
        </section>
      )}

      <div className="content">
        <header className="hero section">
          <p className="eyebrow">With the blessings of our parents</p>
          <p className="invocation">Shree Laxmi Venkateshwara Prasanna<br />Shree Halliraya Prasanna</p>
          <div className="ornament" aria-hidden="true"><span /> <b>✦</b> <span /></div>
          <p className="hero__kicker">Engagement Ceremony</p>
          <h2>Bhargavi <i>&amp;</i> Sukruth</h2>
          <div className="hero__date">Thursday <span>·</span> 27 August 2026</div>
        </header>

        <section className="schedule section" aria-labelledby="schedule-title">
          <p id="schedule-title" className="section-label">The celebration</p>
          <div className="time-card">
            <div className="time-card__date"><strong>27</strong><span>August<br />Thursday</span></div>
            <div className="time-card__line" aria-hidden="true" />
            <div className="time-card__time"><strong>8:45</strong><span>AM onwards</span></div>
          </div>
          <div className="programme">
            <p><span>01</span><b>Engagement Ceremony</b><em>8:45 AM onwards</em></p>
            <p><span>02</span><b>Followed by Cake Cutting</b><em>A sweet beginning</em></p>
            <p><span>03</span><b>Lunch</b><em>12:30 PM onwards</em></p>
          </div>
        </section>

        <section className="venue section" aria-labelledby="venue-title">
          <p id="venue-title" className="section-label">Venue</p>
          <h3>Uttaradi Mutt</h3>
          <address>4th Floor, Pampa Mahakavi Road<br />Shankarapura, Basavanagudi<br />Bengaluru, Karnataka 560004</address>
          <div className="venue__actions">
            <a className="map-button" href={mapUrl} target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
            <button className="copy-button" onClick={copyAddress}>{copied ? "Address copied" : "Copy address"}</button>
          </div>
        </section>

        <footer className="closing section">
          <div className="ornament ornament--small" aria-hidden="true"><span /> <b>✦</b> <span /></div>
          <p className="section-label">With best compliments</p>
          <p className="family">Smt Chaya and Shri Santosh Kumar Sandur<br />Vinayak Sandur</p>
          <p className="closing__note">We look forward to celebrating with you.</p>
        </footer>
      </div>
    </main>
  );
}
