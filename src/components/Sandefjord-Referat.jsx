import './Sandefjord-Referat.css'
import { RouterLink } from 'noctes.jsx-router'

export default {
  render() {
    return (<>
    <div style="height: 100%; width: 100%; display: flex; flex-direction: column; padding: 16px; overflow: auto; align-items: center;">
      <RouterLink class="button" style="align-self: start;" to='/projects/sandefjord'>Gå tilbake</RouterLink>
      <h2 style="margin-bottom: 0;">Kundereferat</h2>
      <h2 style="margin-top: 0;">Ansvarlig: <span style="font-weight: 500; font-size: 18px;">Jon Fredrik Strømberg, Alex Dahal og Benjamin Larsen</span></h2>
      <p style="margin-top: 0; margin-bottom: 32px;">Dette er kundereferat fra første møte med Ole Hagen (Sandefjord Frisbeeklub).</p>
      <div class="sandefjord-referat">
         <h3 class="c10" id="h.3xdlvwmqhhj7"><span class="c2 c9">Referat &ndash; Diskgolf-l&oslash;sning for Sandefjord Disc
      Golf Klubb</span></h3>
  <p class="c6"><span class="c2">Dato:</span><span>&nbsp;13.10.2026<br /></span><span
      class="c2">Deltakere:</span><span>&nbsp;Benjamin, Alex, Jon Fredrik (Bribery &amp; Co.) og </span><span
      class="c2">Ole (Sandefjord Disc golfklubb)</span><br />
      <span class="c2">Tema:</span><span class="c3">&nbsp;Digital l&oslash;sning for
      baneadministrasjon og tilbakemeldingssystem</span></p>
  <hr />
  <p class="c13 c7"><span class="c3"></span></p>
  <h4 class="c5" id="h.to5t0sgxelm1"><span class="c4 c2">Bakgrunn </span></h4>
  <p class="c6"><span>Ole (</span><span class="c3">Sandefjord Disc Golf Klubb) har mange baner og medlemmer, og
      &oslash;nsker en enkel digital l&oslash;sning for administrasjon, tilbakemeldinger og rapportering fra spillere.
      L&oslash;sningen skal bidra til bedre oversikt og effektiv kommunikasjon mellom spillere, baneansvarlige og
      klubbens administrasjon for vedlikeholde og drifte klubbens baner.</span></p>
  <hr />
  <p class="c7 c13"><span class="c3"></span></p>
  <h4 class="c5" id="h.l1wewu3bei3e"><span class="c2 c4">Hovedpunkter i l&oslash;sningen</span></h4>
  <ul class="c0 lst-kix_xqqcx8232w4-0 start">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Brukerh&aring;ndtering:<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span>Mulighet for </span><span class="c2">anonym bruker</span><span>&nbsp;og </span><span class="c2">registrerte medlemmer</span><span class="c3">.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c3">Enkel innlogging for testing og oppstart.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c2">Spillprofiler</span><span class="c3">&nbsp;med informasjon som alder,
        kj&oslash;nn og rating.<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-0">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Roller og rettigheter:<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span class="c2">Admin:</span><span class="c3">&nbsp;Forvalter brukere, tildeler roller
        og rettigheter, og kan se/filtrere innmeldte saker.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c2">Baneansvarlig:</span><span class="c3">&nbsp;Underliggende rolle som
        h&aring;ndterer rapporter knyttet til spesifikke baner.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c2">Dugnad/frivillig:</span><span class="c3">&nbsp;Gruppe som kan tildeles
        oppgaver.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c2">Spiller:</span><span class="c3">&nbsp;Sender inn rapporter og
        tilbakemeldinger.<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-0">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Baner og rapportering:<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span>Oversikt over </span><span class="c2">baner</span><span>&nbsp;og </span><span
        class="c2">antall hull</span><span class="c3">&nbsp;(typisk 18 hull). En dropdown liste av hull, Admin skriver
        opp antall hull.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c3">Baner skal ha Banenavn, evt. bilde</span></li>
    <li class="c1 li-bullet-0"><span class="c3">I koden skal baner v&aelig;re en gruppe som har en hovedadmin og andre
        Baneansvarlig. Denne gruppen kan bli valgt for rapporter for brukere.<br /></span></li>
    <li class="c1 li-bullet-0"><span>Mulighet for &aring; </span><span class="c2">rapportere feil eller
        problemer</span><span class="c3">&nbsp;knyttet til enkelt-hull.<br /></span></li>
    <li class="c1 li-bullet-0"><span>Bruker kan </span><span class="c2">legge ved bilde</span><span class="c3">&nbsp;ved
        innsending av rapport.<br /></span></li>
    <li class="c1 li-bullet-0"><span>Bruker velge bane p&aring; &ldquo;Navbar&rdquo; eller n&aring;r du logger inn
        f&oslash;rste gang.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c2">Rapport kategorier</span><span class="c3">, Admin skal lage kategorier
        som kan bli valgt av brukere. Det skal v&aelig;re et valg for andre rapporter i tilfelle.<br /></span></li>
    <li class="c1 li-bullet-0"><span>Systemet skal ha en </span><span class="c2">enkel l&oslash;sning</span><span
        class="c3">&nbsp;for &aring; sende inn og f&oslash;lge opp rapporter.<br /></span></li>
    <li class="c1 li-bullet-0"><span>Lage rapport som </span><span class="c2">Dugnadsgruppe</span><span
        class="c3"><br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-0">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Administrering av Rapporter</span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span class="c2">Admin</span><span class="c3">&nbsp;kan se alle rapporter.</span></li>
    <li class="c1 li-bullet-0"><span class="c2">Baneansvarlig</span><span class="c3">&nbsp;kan bare se rapporter for sin
        bane.</span></li>
    <li class="c1 li-bullet-0"><span class="c3">Admin eller Admin for Bane kan sette hvem som er ansvarlig for &aring;
        utarbeide det som nevnt i rapporten.</span></li>
    <li class="c1 li-bullet-0"><span class="c3">Baneansvarlig kan ogs&aring; sette seg selv som ansvarlig hvis ingen har
        blitt valgt som ansvarlig av Admin/Bane Admin.</span></li>
    <li class="c1 li-bullet-0"><span class="c3">Den som er ansvarlig for en rapport kan legge inn kommentarer og markere
        status.</span></li>
    <li class="c1 li-bullet-0"><span class="c3">N&aring;r en Rapport er laget har det Status &ldquo;Ikke Tildelt&rdquo;,
        n&aring;r den er tildelt s&aring; har den status &ldquo;Tildelt&rdquo;, n&aring;r den er ferdig skal den ha
        status &ldquo;L&oslash;st&rdquo;</span></li>
    <li class="c1 li-bullet-0"><span class="c3">Den som er ansvarlig for Rapport kan sette custom status etter at den er
        tildelt, for eksempel Work in Progress.</span></li>
    <li class="c1 li-bullet-0"><span class="c3">Dato p&aring; rapporter og kommentarer.</span></li>
    <li class="c1 li-bullet-0"><span>Historikk av status og kommentarer.</span><span class="c3"><br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-0">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Administrasjon og filtrering:<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span>Admin kan filtrere meldinger etter </span><span class="c2">Dato, Tid, Rating eller
        Bane</span><span class="c3">.<br /></span></li>
    <li class="c1 li-bullet-0"><span class="c3">Mulighet for &aring; se rating/favoritt(admin kan sette spiller fav kun
        synlig adm).<br /></span></li>
    <li class="c1 li-bullet-0"><span>Roller kan se innleverte meldinger og </span><span class="c2">dele/tildele
        ansvar</span><span class="c3">&nbsp;for oppgaver.<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-0">
    <li class="c6 c12 li-bullet-0"><span class="c4 c2">Teknisk:<br /></span></li>
  </ul>
  <ul class="c0 lst-kix_xqqcx8232w4-1 start">
    <li class="c1 li-bullet-0"><span>L&oslash;sning tilgjengelig via </span><span class="c2">nettside</span><span
        class="c3">.(i f&oslash;rste utgivelse for testing/unders&oslash;kelse for markeds behov)<br /></span></li>
    <li class="c1 li-bullet-0"><span>Fokus p&aring; </span><span class="c2">enkel bruk og lav terskel</span><span
        class="c3">&nbsp;for innmelding. </span></li>
  </ul>
  <p class="c6 c7"><span class="c3"></span></p>
  <ul class="c0 lst-kix_bo25lmvza5g6-0 start">
    <li class="c6 c12 li-bullet-0"><span>&nbsp; &nbsp; </span><span class="c4 c2">&nbsp;Sp&oslash;rsm&aring;l</span>
    </li>
  </ul>
  <ul class="c0 lst-kix_bo25lmvza5g6-1 start">
    <li class="c1 li-bullet-0"><span class="c3">Skal rating evt kobles opp til annen side for rating inhenting
        (udisc)</span></li>
  </ul>
  <p class="c6 c7"><span class="c3"></span></p>
  <p class="c6"><span class="c3">Dette er v&aring;res oppsummering av m&oslash;tet, og h&aring;per vi har f&aring;tt med
      oss det du &oslash;nsker. Gi beskjed hvis vi har glemt noe eller er noe du &oslash;nsker spesifikt at vi skal
      gj&oslash;re </span></p>
  <p class="c6"><span
      style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 214.70px; height: 212.52px;"><img
        alt="" src="/src/assets/docs/image2.png"
        style="width: 214.70px; height: 212.52px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
        title="" /></span></p>
  <p class="c6"><span class="c2">MVH Briberi &amp; </span><span class="c2">CO</span></p>
  <p class="c6"><span>Benjamin Larsen (</span><span class="c2">CEO</span><span class="c3">)</span></p>
  <p class="c6"><span>Jon Fredrik Str&oslash;mberg (</span><span class="c2">COO</span><span class="c3">)</span></p>
  <p class="c6"><span>Alex Dahal (</span><span class="c2">Ansatt</span><span class="c3">)</span></p>
  <p class="c6"><span>Petter Robin Aarhus (</span><span class="c2">CTO</span><span class="c3">)</span></p>
  <p class="c6"><span>Haider (</span><span class="c2">Ansatt</span><span class="c3">)</span></p>
  <p class="c7 c11"><span class="c3"></span></p>
    </div>
    </div>
    </>)
  }
}