import EmployeeCard from "./EmployeeCard.jsx"

export default {
  render() {
    return <>
      <div class="aboutUs" style="height: 100%; width: 100%; padding: 16px;">
        <h1>Among Us</h1>

        <br />
        <img style="width: 20%; height:20%; " src='/xijinping.png' />
        <br />
        Vi er en hyggelig gjeng som laget ett lite rosjekt på skolen og endte opp med at det ble dratt ut. <br />
        Etter mye artige kommentarer og "yapping", så er dette resultatet av mange timer med å jobbe med skole prosjekt<br />
        med en liten gjeng artige karer som har hode skrudd litt for hardt på hodet. <br />
        Vi har alle litt forskjelig unnskaps nivåer som gjør at dette kan bli litt spennende og at det skjer MYE artig<br />
        mens man holder på med oppgaver.  <br />
        <h1>Vårt Team</h1>
        <div style="padding: 16px; display: flex; flex-direction: column; gap: 12px;">
          <EmployeeCard
            name='Benjamin Larsen'
            title='Chief Executive Officer'
            img='/benjamin.jpg'
            desc='Jeg har det veldig stressende med late ansate, se under for eksempel. Helt ubrukelig, burde kansje bannlyse.'
            email='benjamin@bribery.no' />

          <EmployeeCard
            name='Petter Robin Aarhus'
            title='Chief Technology Officer'
            desc='Jeg jobber når jeg har lyst...'
            img='/robin.png'
            email='robin@bribery.no' />

          <EmployeeCard
            name='Jon Fredrik Strømberg'
            title='Chief Operating Officer'
            img='/jon.png'
            desc='Hemmelig Kommentar:(kan bare jeg se denne kommentaren eller er den for alle og se???) Hvorfor gidder jeg å møte opp?.. vil bare ha lønn...'
            email='jonfredrik@bribery.no' />
        </div>
      </div>
    </>
  }
}