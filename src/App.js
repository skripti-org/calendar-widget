import React, { useState, useEffect } from 'react'
import './App.css'
import EventMapper from './components/EventMapper'

function App() {
  const events = [
    {
      kind: 'calendar#events',
      etag: '"p330apl7ku6fv40g"',
      summary: 'Skripti ry',
      description:
        'Skripti ry:n tapahtumakalenteri. Lue lisää osoitteessa www.skripti.org',
      updated: '2021-08-07T21:48:58.856Z',
      timeZone: 'Europe/Helsinki',
      accessRole: 'reader',
      defaultReminders: [],
      nextSyncToken: 'CMCs1PTxn_ICEAAYASDBqeO4AQ==',
      items: [
        {
          kind: 'calendar#event',
          etag: '"3108913711260000"',
          id: '45kb4rkovpvisuqirsr9pqi7bn',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=NDVrYjRya292cHZpc3VxaXJzcjlwcWk3Ym4gc2tyaXB0aXJ5QG0',
          created: '2019-04-05T09:34:15.000Z',
          updated: '2019-04-05T09:34:15.630Z',
          summary: 'Torisitsit',
          description:
            '\nTorisitsit? Wappuna? Joensuussa?\n\nTODELLAKIN!\n\nKotex ry tuo muun muassa Kuopiossa ja Helsingissä tutut opiskelijoiden vappuperinteisiin kuuluvat Torisitsit Joensuun uudistetulle Kauppatorille. Jokaisen opiskelijan kuuluu kokea edes kerran elämässään nämä poikkitieteelliset suursitsit! \n\nSitsien tarkka hinta varmentuu myöhemmin ja lipunmyynti tulee tapahtumaan Kide.appin kautta. Tapahtumaan ovat tervetulleita kaikki korkeakouluopiskelijat, myös muista kaupungeista.\n\nSitsialue on anniskelualuetta, joten omat juomat jätetään tällä kertaa odottelemaan sitsien päättymistä kotiin tai kaupan hyllylle. Juomapuolesta huolehtii Ravintola Kerubi. \n\nMITÄ: Wapun Torisitsit 2019 \nMISSÄ: Kauppatori, Joensuu\nMILLOIN: tiistaina 30.4.2019 klo 12-14.30\nKENELLE: Kaikille korkeakouluopiskelijoille\nPUKUKOODI: Haalarit + vappu!\nMITÄ MAKSAA: Tarkentuu myöhemmin.\nMIKSI: Torisitsit Wapun tekee 🎉🎈🥂',
          location: 'Kauppatori',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-04-30T12:00:00+03:00',
          },
          end: {
            dateTime: '2019-04-30T14:30:00+03:00',
          },
          iCalUID: '45kb4rkovpvisuqirsr9pqi7bn@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3108914449374000"',
          id: '4rdnvjm6376ubdf0ee10i0bsm3',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=NHJkbnZqbTYzNzZ1YmRmMGVlMTBpMGJzbTMgc2tyaXB0aXJ5QG0',
          created: '2019-04-05T09:38:25.000Z',
          updated: '2019-04-05T09:40:24.687Z',
          summary: 'postwabukalyptiset sitsit',
          description:
            'Mitä jää jäljelle, kun vappu on ohi? Valvottavatko liskot öitäsi? Vapun jälkeiseen olotilaan on hyvä alkaa valmistautumaan hyvissä ajoin. Oidipus ryn vappu ei lopu, vaan se jatkuu poikkitieteellisillä sitseillä. Maailmanloppu koittaa postwabukalyptisillä sitseillä vappupäivän jälkeen 2.5.! Laita päivämäärä jo kalenteriin!\n\nMiten sinä varaudut maailman loppuun? Mitä maailmanlopun jälkeen jää jäljelle? Tule paikalle näyttämään ja ottamaan selvää, mitä maailmanloppu vapun jälkeen on! \n\nMITÄ: Postwabukalyptiset sitsit\nMISSÄ: E200\nMILLOIN: 2.5.2019 klo 18-\u003e\nPUKUKOODI: haalarit + maailmanlopun tamineet\nHINTA: 8e\nILMO: 25.3.-8.4.2019\nOtathan omat menovetesi mukaan, sillä alkoholia ei tarjota sitseillä. Ohjelmanumeroihin saattaa sisältyä alkoholia, mutta oma pullo mukaan!\n\nPostwabukalyptiset bailut jatkuu Las Palmasissa maailmanlopun elkein sitsien jälkeen!\n\nHUOM! Ilmottautuminen aukeaa 25.3.2019 klo 12.00! Tapahtumassa julkaistaan linkki, josta ilmottaudutaan.',
          location: 'E200',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-05-02T18:00:00+03:00',
          },
          end: {
            dateTime: '2019-05-03T00:00:00+03:00',
          },
          iCalUID: '4rdnvjm6376ubdf0ee10i0bsm3@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3109284232152000"',
          id: '7s4e5im4coh1efrs20sdk9f2fu',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=N3M0ZTVpbTRjb2gxZWZyczIwc2RrOWYyZnUgc2tyaXB0aXJ5QG0',
          created: '2019-04-07T12:34:09.000Z',
          updated: '2019-04-07T13:01:56.076Z',
          summary: 'Joensuun vappusoudut 2019',
          description:
            'Nyt on jälleen aika katsoa, mistä joukkueesta löytyy Joensuun vahvimmat hauikset ja paras yhteinen rytmi, sillä Joensuun metsäylioppilaat järjestää jälleen Vappusoudut! Kilpailussa eri ainejärjestöt tai muut organisaatiot pääsevät mittelemään toisiaan vastaan kirkkovenesoudussa. Kilpa käydään 14-henkisillä joukkueilla ja järjestäjän tarjoamilla veneillä. Kilpailu tapahtuu perinteisesti Jokiasemalla, ja paikalla on oheisaktiviteettia myös odottelun ajaksi! Lisää informaatiota luvassa ihan kohta, joten ei kuin vaan joukkueita kokoamaan!\n\nNopeimman kierroksen lisäksi palkitaan tottakai perinteiseen tapaan paras meininki!\n\nNetti-ilmoittautuminen avataan 5.4., joten ei kun joukkue kasaan!\n\nKysymykset ym. yhteydenotot sähköpostitse vappusoudut@jmyo.fi\nMITÄ: Vappusoudut\nMISSÄ: Jokiasemalla\nMILLOIN: 27.4.2019\nMITÄ MAKSAA: 80€/venekunta, eli alle 6/hlö!',
          location: 'Jokiasema, Hasanniementie 3, 80110 Joensuu, Suomi',
          creator: {
            email: 'arkko.eetu@gmail.com',
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-04-27T12:00:00+03:00',
          },
          end: {
            dateTime: '2019-04-27T16:00:00+03:00',
          },
          iCalUID: '7s4e5im4coh1efrs20sdk9f2fu@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3109657695322000"',
          id: '1ddlmlh0n3lhjngoik3mjb0c44',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=MWRkbG1saDBuM2xoam5nb2lrM21qYjBjNDQgc2tyaXB0aXJ5QG0',
          created: '2019-04-09T16:54:07.000Z',
          updated: '2019-04-09T16:54:07.661Z',
          summary: 'Vappuleijonan metsästys',
          description:
            'Oletko valmis nappaamaan jo aivan liian pitkään uinuneen mystisen Vappuleijonan? Jos vastasit KYLLÄ, kasaa itsellesi joukkue ja tule mukaan vapun seikkailuntäyteisimpään tapahtumaan. Tätä spektaakkelia et todellakaan halua missata!\n\nSpektaakkelin tarjoaa Poikkeus Ry, joka toivottaa kaikki korkeakouluopiskelijat tervetulleiksi mukaan metsästykseen jo viidennen kerran vappuaattona 30.4.2019! \n\nTuon viekkaan eläimen metästys karjaistaan käyntiin kello 16 Sirkkalan puistossa, Kimmelin takana. Metsästyksen tiimellyksessä erotellaan jyvät akanoista ja otetaan selvää kenen rahkeet riittävät Vappuleijonan kesyttämiseen!\n\nLeijonanmetsästyksessä kaikki keinot ovat sallittuja ja se näkyy sekä kuuluu kauas, kun toinen toistaan erikoisempia leijonametsästysjoukkueita kilpailee toisiaan vastaan Joensuun savanneilla. Suurimman pistemäärän saavuttava joukkue pääsee nauttimaan mainetta ja kunniaa sekä ennen kaikkea itse kuninkaasta, Suuresta Leijonasta.\n-------------------------------------------------------------------------------\nKILPAILUN KULKU:\n\nJoukkueet suorittavat heittäytymiskykyä sekä järjen viisasta ääntä vaativia tehtäviä, joista vaikeusasteen mukaan tulee eri määrä pisteitä. Mitä enemmän ja kekseliäämmin joukkue tehtäviä suorittaa, sitä lähemmäksi se pääsee suurempia pisteitä sekä suurta Leijonaa. Suurimmat pisteet saanut joukkue nimetään vuoden Leijonanmetsästäjäksi, vappuaaton sankariksi! \n\nOn myös tärkeää mainita, että omaperäisin ja persoonallisimmalta näyttävä leijonanmetsästysjoukkue pääsee takuuvarmasti silittämään hyvinkin lähietäisyydeltä itse Leijonaa. \n\nRauhoitettu kun Leijonakin on, myös metsästysaikaa on rajoitettu. Leijonanmetsästykseen on varattu aikaa klo 16–20:30 välillä, jolloin Leijonan on todettu onneksemme olevan aktiivisimmillaan. \n-------------------------------------------------------------------------------\nILMOITTAUTUMINEN:  \n\nIlmoittautuminen aukeaa 3.4.2019 kello 12. Joukkueen vastuuhenkilö ilmoittaa joukkueensa kaikki jäsenet kerralla mukaan jahtiin. Tarkemmat ohjeet päivitetään myöhemmin.\n-------------------------------------------------------------------------------\nTIIVISTELMÄ:\n\nAika: 30.4.2019 klo 16–20.30\nPaikka: Joensuun keskustan alue, lähtö Sirkkalan puistosta (Kimmelin takaa)\nMaksu: 5 € / henkilö (+palvelumaksu) (hinta sisältää poikkeuksellisen upean vappuhaalarimerkin ja raadollisen määrän nestemäistä dopingia metsästäjille) \nJoukkueen koko: 4-7 hlöä\nIlmoittautuminen: tiedot tulossa!',
          location: 'Keskusta',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-04-30T15:30:00+03:00',
          },
          end: {
            dateTime: '2019-04-30T20:00:00+03:00',
          },
          iCalUID: '1ddlmlh0n3lhjngoik3mjb0c44@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3110360191564000"',
          id: '6pbl4lvu3mtm1anf7a0tpdt8sd',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=NnBibDRsdnUzbXRtMWFuZjdhMHRwZHQ4c2Qgc2tyaXB0aXJ5QG0',
          created: '2019-04-13T17:13:36.000Z',
          updated: '2019-04-13T18:28:15.782Z',
          summary: 'Kyykkätreenit',
          description:
            '\nhttps://www.facebook.com/events/1176136312546070/TEK sponsoroi kyykän Skriptin jäsenille, joten lähdetään treenaamaan kyykkää yhdessä! Kokemusta ei tarvitse olla ja yhdessä opetellaan. Mukaan vain hyvää asennetta ja pelihenkeä.',
          location: 'Kenttä tiedepuiston vieressä',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-04-26T16:00:00+03:00',
          },
          end: {
            dateTime: '2019-04-26T19:00:00+03:00',
          },
          iCalUID: '6pbl4lvu3mtm1anf7a0tpdt8sd@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3112043280604000"',
          id: '6gdnmcbr8nc7mvvp3roqnsjcfm',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=Nmdkbm1jYnI4bmM3bXZ2cDNyb3Fuc2pjZm0gc2tyaXB0aXJ5QG0',
          created: '2019-04-05T09:43:38.000Z',
          updated: '2019-04-23T12:14:00.302Z',
          summary: 'Vappupicnic',
          description:
            '\nSkripti ry ja Oidipus ry lyöttäytyvät yhteen juhlistamaan vappua Ilosaaressa! Luvassa yleistä hengailua ja kyykkää ja mitä muuta kivaa nyt keksitäänkään. Paikalla on grilli, joten halutessasi voit grillailla. Meidät tunnistaa turkooseista ja hopeanharmaista haalareista. Mukaan omat ruoat ja juomat. Tapahtuma on Ilosaaren yleisen vappupicnicin yhteydessä.\n\nMITÄ: Skriptin & Oidipuksen vappupicnic\nMISSÄ: Ilosaari, yleisen vappupicnicin yhteydessä\nMILLOIN: 1.5.2019 klo 12 eteenpäin\nKENELLE: Skripti ry:n ja Oidipus ry:n jäsenet\n\nhttps://www.facebook.com/events/288525532076969/',
          location: 'Ilosaari, 80100 Joensuu, Suomi',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-05-01T12:00:00+03:00',
          },
          end: {
            dateTime: '2019-05-01T18:00:00+03:00',
          },
          iCalUID: '6gdnmcbr8nc7mvvp3roqnsjcfm@google.com',
          sequence: 1,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3112043629736000"',
          id: '01bp0jpfj3g5ia4seh4ge61ds4',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=MDFicDBqcGZqM2c1aWE0c2VoNGdlNjFkczQgc2tyaXB0aXJ5QG0',
          created: '2019-04-05T09:42:57.000Z',
          updated: '2019-04-23T12:16:54.868Z',
          summary: 'Wappusauna',
          description:
            '\nTervetuloa hengähtämään hetkeksi vapun rientojen keskellä ja viettämään yhteistä välikuolemaa Skriptin ja Tombolon kesken Suvaksen saunatilalle sunnuntaina 28.4. klo 18 alkaen. Luvassa kodikasta ja rentoa illanviettoa. Tarjolla itsetehtyjä tuoreita munkkeja (ruokavammaiset huomioitu) sekä simaa (ja mahdollista terästystä).\n\nPaikassa on saunomismahdollisuus (omat pyyhkeet mukaan) ja mikäli suuta kovasti kuivaa, niin ota omia juomia mukaan.\n\nMITÄ: Skriptin ja Tombolon vappusauna\nMISSÄ: Suvaksen saunatila, Suvantokatu 6\nMILLOIN: 28.4.  klo 18 eteenpäin\nKENELLE: Skriptin ja Tombolon jäsenet\n\n\nhttps://www.facebook.com/events/380848006102662/',
          location: 'Suvantokatu 6, 80100 Joensuu, Suomi',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-04-28T18:00:00+03:00',
          },
          end: {
            dateTime: '2019-04-28T23:00:00+03:00',
          },
          iCalUID: '01bp0jpfj3g5ia4seh4ge61ds4@google.com',
          sequence: 0,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
        {
          kind: 'calendar#event',
          etag: '"3129173045662000"',
          id: '2dc0kfqfqdfsasga4kafq17koq',
          status: 'confirmed',
          htmlLink:
            'https://www.google.com/calendar/event?eid=MmRjMGtmcWZxZGZzYXNnYTRrYWZxMTdrb3Egc2tyaXB0aXJ5QG0',
          created: '2019-04-05T14:09:20.000Z',
          updated: '2019-07-31T15:22:02.831Z',
          summary: 'Fuksisauna',
          creator: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          organizer: {
            email: 'skriptiry@gmail.com',
            self: true,
          },
          start: {
            dateTime: '2019-09-13T18:00:00+03:00',
          },
          end: {
            dateTime: '2019-09-13T19:00:00+03:00',
          },
          iCalUID: '2dc0kfqfqdfsasga4kafq17koq@google.com',
          sequence: 1,
          extendedProperties: {
            private: {
              everyoneDeclinedDismissed: '-1',
            },
          },
          eventType: 'default',
        },
      ],
    },
  ]
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('https://skripti.org/calendarApi', {
      headers: {
        accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response.statusCode)
        if (response.ok) {
          return response.json()
        }
      })
      .then(function (myJson) {
        setData(myJson)
      })
  }

  return (
    <div className="App">
      {data && data.length > 0 && <EventMapper events={data} />}

      {data.length === 0 && <EventMapper events={events} />}

      <div className="App-info">
        <a
          className="App-link"
          href="https://github.com/skriptiry/calendar-widget"
        >
          tapahtumakalenteri v. 0.1
        </a>
      </div>
    </div>
  )
}

export default App
