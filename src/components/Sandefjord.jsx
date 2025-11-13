import { RouterLink } from "noctes.jsx-router"

function copyFn(e) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(this);
  selection.removeAllRanges();
  selection.addRange(range);

  navigator.clipboard.writeText(this.textContent);
}

const nCopy = {
  onMounted(el) {
    el.addEventListener("click", copyFn);
  },

  onDestroy(el) {
    el.removeEventListener("click", copyFn);
  }
}

export default {
  render() {
    return <>
    <div style="display: flex; flex-direction: column;padding: 16px;">
      <img src='/src/assets/sandefjord.png' style='max--width: 100%; align-self: center;' />
      <h1 style="margin-bottom: 0px; align-self: center;">Driftsmelding System</h1>
      <h2 style="margin-top: 0px; align-self: center;">Sandefjord Frisbeeklub</h2>
      <p style="margin-bottom: 0;">En Kunde kontaktet oss i Bribery & CO. for utvikling av en APP ide som kunne gjøre drifting av en "Disc-golf bane enkelt og effektivt.</p>
      <p style="margin: 0; margin-top: 16px;">Ole Hagen ønsket en enkel og effektiv app for rapportering av diverse driftmeldinger om Sandefjord frisbee klubb sine anlegg. Med dette skal medlemmer og gjester kunne rapportere avvik/feil/skryt på baner de har og skal til enhver tid. </p>
      <p style="margin: 0; margin-top: 16px;">Dette ga oss i Bribery & CO noen utfordring i håndtering av kunde (vil si vedkommende var VELDIG vanskelig og ha med å gjøre), men vi fikk en bra og grei forståelse av bestillingen som Ole Hagen(herved ref “Kunden”)  </p>
      <p style="margin: 0;">ønsket og så for seg av produkt. Kundens vanskelighet var bare for å gi oss en lærepenge og vi forstod raskt at vi måtte være bedre forberedt. </p>
      <p style="margin: 0; margin-top: 16px;">Starten av prosjektet gikk litt tregt grunnet sykdom og bemanningsproblemer i prosjektet. Resterende uker gikk  ganske flytende og problemfritt av seg. Benjamin stod på med koding og framvisning av det han har gjort par ganger </p> 
      <p style="margin: 0;">daglig for teamet. Benjamin stod for hele oppsettet av siden, routing, og meldingsbehandling. Robin deltok senere i  kodingen og lagde diverse administrerende sider og registreringsfunksjoner. Jon holdt dem med selskap, </p> 
      <p style="margin: 0;">lagde god stemning og gjorde notater =).</p>
      <div>
        <h3>Brukere til Nettsiden</h3>
        <p style="margin-bottom: 0;">E-post: <span nCopy style="color: #4DD0E1; cursor: pointer;">ole@bribery.no</span></p>
        <p style="margin-top: 0;">Passord: <span nCopy style="color: #81C784; cursor: pointer;">ole</span></p>
        <p style="margin-bottom: 0;">E-post: <span nCopy style="color: #4DD0E1; cursor: pointer;">geir@geir.geir</span></p>
        <p style="margin-top: 0;">Passord: <span nCopy style="color: #81C784; cursor: pointer;">geir</span></p>
        <p style="margin-bottom: 0;">E-post: <span nCopy style="color: #4DD0E1; cursor: pointer;">KasterLangt@sol.no</span></p>
        <p style="margin-top: 0;">Passord: <span nCopy style="color: #81C784; cursor: pointer;">wtfscrub</span></p>
      </div>
      <div style="display: flex; gap: 8px; margin: 12px 0;">
        <a class="button" target="_blank" href='https://sandefjord.bribery.no/'>Gå til nettsiden</a>
        <RouterLink class="button" to='/projects/sandefjord/referat'>Gå til Kundereferat</RouterLink>
      </div>
      
      <img src='/src/assets/image.png' style="width: 50%; align-self: center;"></img>
    </div>
    </>
  }
}