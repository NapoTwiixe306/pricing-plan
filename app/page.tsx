import React from 'react'
import '../src/scss/App.scss';
import Essential from '../src/img/Essential.svg'
import Ultime from '../src/img/Ultime.svg'
import Premium from '../src/img/Premium.svg'
import Check from '../src/img/check.svg'
import Image from 'next/image';
export default function Home() {
  return (
   <>
      <div className="mainContainer">
        <div className="title">
          <div className="offre">
            <p>Nos offres</p>
          </div>
          <h1>Des prix en accord avec <span>notre vision</span></h1>
          <div className="buttons">
            <div className="firstButton">
              <p>Paiement Mensuel</p>
            </div>
            <div className="secondButton">
              <p>Paiement Annuel (-20%)</p>
            </div>
          </div>
        </div>
        <div className="cardsContainer">
          <div className="cards">
            <div className="firstCard">
              <Image src={Essential} alt=''/>
              <h3>Essentiel</h3>
              <p>$179 <span>/month</span></p>
              <div className="sep"></div>
              <div className="infos">
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+2500 vues/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+60 clics sur votre site</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+15 appels/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+15 demande d&#39;itinéraires</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>Plus de visibilité sur Google</p>
                </div>
                <div className="text">
                  <p>Résponse aux avis google inclus</p>
                </div>
                <div className="buy">
                  <button>Je m&#39;abonne</button>
                </div>
              </div>
            </div>
            <div className="secondCard">
              <Image src={Ultime} alt=''/>
             <div className="subtitle">
              <h3>Ultime</h3>
                <div className="best">
                  <p>Best offer</p>
                </div>
             </div>
              <p>$439 <span>/month</span></p>
              <div className="sep"></div>

              <div className="infos">
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+6500 vues/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+200 clics sur votre site</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+40 appels/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+40 demande d&#39;itinéraires</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>Plus de visibilité sur Google</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>Résponse aux avis google inclus</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>1 shooting</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>QR code personnalisé</p>
                </div>
                <div className="buy">
                  <button>Je m&#39;abonne</button>
                </div>
              </div>
            </div>
            <div className="thirdCard">
              <Image src={Premium} alt=''/>
              <h3>Premium</h3>
              <p>$319 <span>/month</span></p>
              <div className="sep"></div>

              <div className="infos">
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+11 000 vues/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+500 clics sur votre site</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+80 appels/mois</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>+80 demande d&#39;itinéraires</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>Plus de visibilité sur Google</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>Résponse aux avis google inclus</p>
                </div>
                <div className="text">
                  <Image src={Check} alt=''/>
                  <p>1 shooting</p>
                </div>
                <div className="buy">
                  <button>Je m&#39;abonne</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
