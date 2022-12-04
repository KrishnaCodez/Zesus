import Head from "next/head";
import { useEffect } from "react";
import styles from "../pages/new.module.css";

const LandingDesktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.landingDesktop}>
      <div className={styles.navigationDesktop10}></div>
      <div className={styles.heroDiv}>
        <img
          className={styles.backgroundShapeIcon}
          alt=""
          src="../background-shape@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.backgroundShapeIcon1}
          alt=""
          src="../background-shape1@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.backgroundShapeIcon2}
          alt=""
          src="../background-shape2@2x.png"
          data-animate-on-scroll
        />
        <img
          className={styles.backgroundShapeIcon3}
          alt=""
          src="../background-shape3@2x.png"
          data-animate-on-scroll
        />
        <div className={styles.backgroundDiv} />
        <div className={styles.heroDesktop04}>
          <div className={styles.blockContent1}>
            <div className={styles.textDiv}>
              <div className={styles.zEUSUIDiv}>ZEUS UI</div>
              <b className={styles.landingPageTemplate}>
                Landing page template
              </b>
              <div className={styles.paragraphDiv}>
                <div className={styles.velitOdioBibendumEuViver}>
                  Velit, odio bibendum eu, viverra sit laoreet posuere. Ut
                  scelerisque posuere massa amet. Ornare lacinia vitae at
                  vestibulum morbi. Volutpat libero curabitur feugiat risus dui
                  pulvinar. Elementum.
                </div>
              </div>
            </div>
            <button className={styles.buttonWrapperHorizontal}>
              <div className={styles.inputDiv}>
                <input
                  className={styles.masterInput}
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <div className={styles.buttonDiv9}>
                <button className={styles.masterButton1}>
                  <img className={styles.iconL} alt="" src="../icon--l12.svg" />
                  <div className={styles.contactSalesDiv}>Contact sales</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r12.svg"
                  />
                </button>
              </div>
              <button className={styles.button}>
                <button className={styles.masterButton2}>
                  <img className={styles.iconL} alt="" src="../icon--l13.svg" />
                  <b className={styles.letsSellB}>Let’s sell</b>
                  <img className={styles.iconL} alt="" src="../icon--r13.svg" />
                </button>
              </button>
              <div className={styles.buttonDiv9}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" src="../icon--l14.svg" />
                  <div className={styles.clickMeDiv}>Click me</div>
                  <img className={styles.iconL} alt="" src="../icon--r14.svg" />
                </div>
              </div>
            </button>
            <div className={styles.buttonWrapperVertical}>
              <div className={styles.inputDiv1}>
                <div className={styles.masterInputDiv}>
                  <div className={styles.labelDiv}>Label</div>
                  <div className={styles.contentDiv}>
                    <div className={styles.leftPartDiv}>
                      <img className={styles.iconL} alt="" />
                      <div className={styles.textDiv1}>Your email</div>
                      <div className={styles.cursorDiv} />
                    </div>
                    <div className={styles.rightPartDiv}>
                      <div className={styles.textDiv2}>Text</div>
                      <img className={styles.iconR7} alt="" />
                    </div>
                  </div>
                  <div className={styles.labelDiv}>Helper</div>
                </div>
              </div>
              <div className={styles.buttonDiv14}>
                <div className={styles.masterButtonDiv12}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Contact sales</div>
                  <img className={styles.iconR7} alt="" />
                </div>
              </div>
              <button className={styles.button1}>
                <div className={styles.masterButtonDiv13}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.tryForFree}>Try for free</div>
                  <img className={styles.iconR7} alt="" />
                </div>
              </button>
              <div className={styles.buttonDiv15}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Click me</div>
                  <img className={styles.iconL} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoDesktop03}>
        <div className={styles.contentDiv1}>
          <div className={styles.blockContent11}>
            <div className={styles.textDiv3}>
              <div className={styles.zEUSUIDiv}>ZEUS UI</div>
              <div className={styles.elementumIdTellusNequeSag}>
                Elementum id tellus neque, sagittis
              </div>
              <div className={styles.paragraphDiv1}>
                <div className={styles.trustedBy200CompaniesArou}>
                  Trusted by 200+ companies around the world
                </div>
              </div>
            </div>
            <div className={styles.actionWrapperHorizontal}>
              <div className={styles.inputDiv}>
                <select className={styles.masterInputSelect} />
              </div>
              <div className={styles.buttonDiv9}>
                <div className={styles.masterButtonDiv12}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Contact sales</div>
                  <img className={styles.iconR7} alt="" />
                </div>
              </div>
              <div className={styles.buttonDiv17}>
                <div className={styles.masterButtonDiv13}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Try for free</div>
                  <img className={styles.iconR7} alt="" />
                </div>
              </div>
              <div className={styles.buttonDiv15}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Click me</div>
                  <img className={styles.iconL} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapperVertical1}>
              <div className={styles.inputDiv1}>
                <div className={styles.masterInputDiv}>
                  <div className={styles.labelDiv}>Label</div>
                  <div className={styles.contentDiv}>
                    <div className={styles.leftPartDiv}>
                      <img className={styles.iconL} alt="" src="../icon.svg" />
                      <div className={styles.textDiv1}>Your email</div>
                      <div className={styles.cursorDiv} />
                    </div>
                    <div className={styles.rightPartDiv}>
                      <div className={styles.textDiv2}>Text</div>
                      <img
                        className={styles.iconR7}
                        alt=""
                        src="../icon1.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.labelDiv}>Helper</div>
                </div>
              </div>
              <div className={styles.buttonDiv14}>
                <div className={styles.masterButtonDiv12}>
                  <img className={styles.iconL} alt="" src="../icon--l15.svg" />
                  <div className={styles.companyDiv}>Contact sales</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r15.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonDiv20}>
                <div className={styles.masterButtonDiv13}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Try for free</div>
                  <img className={styles.iconR7} alt="" />
                </div>
              </div>
              <div className={styles.buttonDiv15}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" />
                  <div className={styles.companyDiv}>Click me</div>
                  <img className={styles.iconL} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.logosLineDiv}>
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--28.svg"
            />
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--01.svg"
            />
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--04.svg"
            />
            <img className={styles.logoIcon1} alt="" src="../logo1.svg" />
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--27.svg"
            />
            <img
              className={styles.logoipsum28}
              alt=""
              src="../logoipsum--02.svg"
            />
          </div>
          <div className={styles.actionWrapperHorizontal}>
            <div className={styles.inputDiv4}>
              <div className={styles.masterInputDiv}>
                <div className={styles.labelDiv}>Label</div>
                <div className={styles.contentDiv}>
                  <div className={styles.leftPartDiv}>
                    <img className={styles.iconL} alt="" src="../icon2.svg" />
                    <div className={styles.textDiv1}>Your email</div>
                    <div className={styles.cursorDiv} />
                  </div>
                  <div className={styles.rightPartDiv}>
                    <div className={styles.textDiv2}>Text</div>
                    <img className={styles.iconR7} alt="" src="../icon3.svg" />
                  </div>
                </div>
                <div className={styles.labelDiv}>Helper</div>
              </div>
            </div>
            <div className={styles.buttonDiv9}>
              <div className={styles.masterButtonDiv12}>
                <img className={styles.iconL} alt="" src="../icon--l16.svg" />
                <div className={styles.companyDiv}>Contact sales</div>
                <img className={styles.iconR7} alt="" src="../icon--r16.svg" />
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <div className={styles.masterButtonDiv22}>
                <img className={styles.iconL} alt="" src="../icon--l17.svg" />
                <div className={styles.companyDiv}>See all integrations</div>
                <img className={styles.iconR7} alt="" src="../icon--r17.svg" />
              </div>
            </div>
            <div className={styles.buttonDiv15}>
              <div className={styles.masterButtonDiv11}>
                <img className={styles.iconL} alt="" src="../icon--l18.svg" />
                <div className={styles.companyDiv}>Click me</div>
                <img className={styles.iconL} alt="" src="../icon--r18.svg" />
              </div>
            </div>
          </div>
          <div className={styles.actionWrapperVertical} />
        </div>
      </div>
      <div className={styles.featuresDesktop13}>
        <div className={styles.blockContentDiv}>
          <div className={styles.blockContent12}>
            <div className={styles.textDiv8}>
              <div className={styles.zEUSUIDiv}>ZEUS UI</div>
              <b className={styles.hottestCollectionsB}>Hottest Collections</b>
              <div className={styles.paragraphDiv2}>
                <div
                  className={styles.velitOdioBibendumEuViver}
                >{`Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. `}</div>
              </div>
            </div>
            <div className={styles.buttonWrapperHorizontal2}>
              <div className={styles.inputDiv5}>
                <div className={styles.masterInputDiv}>
                  <div className={styles.labelDiv}>Label</div>
                  <div className={styles.contentDiv}>
                    <div className={styles.leftPartDiv}>
                      <img className={styles.iconL} alt="" src="../icon4.svg" />
                      <div className={styles.textDiv1}>Your email</div>
                      <div className={styles.cursorDiv} />
                    </div>
                    <div className={styles.rightPartDiv}>
                      <div className={styles.textDiv2}>Text</div>
                      <img
                        className={styles.iconR7}
                        alt=""
                        src="../icon5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.labelDiv}>Helper</div>
                </div>
              </div>
              <div className={styles.buttonDiv14}>
                <div className={styles.masterButtonDiv12}>
                  <img className={styles.iconL} alt="" src="../icon--l19.svg" />
                  <div className={styles.companyDiv}>Contact sales</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r19.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonDiv17}>
                <div className={styles.masterButtonDiv13}>
                  <img className={styles.iconL} alt="" src="../icon--l20.svg" />
                  <div className={styles.companyDiv}>Try for free</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r20.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonDiv15}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" src="../icon--l21.svg" />
                  <div className={styles.companyDiv}>Click me</div>
                  <img className={styles.iconL} alt="" src="../icon--r21.svg" />
                </div>
              </div>
            </div>
            <div className={styles.buttonWrapperVertical2}>
              <div className={styles.inputDiv1}>
                <div className={styles.masterInputDiv}>
                  <div className={styles.labelDiv}>Label</div>
                  <div className={styles.contentDiv}>
                    <div className={styles.leftPartDiv}>
                      <img className={styles.iconL} alt="" src="../icon6.svg" />
                      <div className={styles.textDiv1}>Your email</div>
                      <div className={styles.cursorDiv} />
                    </div>
                    <div className={styles.rightPartDiv}>
                      <div className={styles.textDiv2}>Text</div>
                      <img
                        className={styles.iconR7}
                        alt=""
                        src="../icon7.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.labelDiv}>Helper</div>
                </div>
              </div>
              <div className={styles.buttonDiv14}>
                <div className={styles.masterButtonDiv12}>
                  <img className={styles.iconL} alt="" src="../icon--l22.svg" />
                  <div className={styles.companyDiv}>Contact sales</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r22.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonDiv20}>
                <div className={styles.masterButtonDiv13}>
                  <img className={styles.iconL} alt="" src="../icon--l23.svg" />
                  <div className={styles.companyDiv}>Try for free</div>
                  <img
                    className={styles.iconR7}
                    alt=""
                    src="../icon--r20.svg"
                  />
                </div>
              </div>
              <div className={styles.buttonDiv15}>
                <div className={styles.masterButtonDiv11}>
                  <img className={styles.iconL} alt="" src="../icon--l24.svg" />
                  <div className={styles.companyDiv}>Click me</div>
                  <img className={styles.iconL} alt="" src="../icon--r24.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionWrapperVertical1}>
            <div className={styles.inputDiv1}>
              <div className={styles.masterInputDiv}>
                <div className={styles.labelDiv}>Label</div>
                <div className={styles.contentDiv}>
                  <div className={styles.leftPartDiv}>
                    <img className={styles.iconL} alt="" src="../icon8.svg" />
                    <div className={styles.textDiv1}>Your email</div>
                    <div className={styles.cursorDiv} />
                  </div>
                  <div className={styles.rightPartDiv}>
                    <div className={styles.textDiv2}>Text</div>
                    <img className={styles.iconR7} alt="" src="../icon9.svg" />
                  </div>
                </div>
                <div className={styles.labelDiv}>Helper</div>
              </div>
            </div>
            <div className={styles.buttonDiv14}>
              <div className={styles.masterButtonDiv12}>
                <img className={styles.iconL} alt="" src="../icon--l25.svg" />
                <div className={styles.companyDiv}>Contact sales</div>
                <img className={styles.iconR7} alt="" src="../icon--r25.svg" />
              </div>
            </div>
            <div className={styles.buttonDiv17}>
              <div className={styles.masterButtonDiv13}>
                <img className={styles.iconL} alt="" src="../icon--l26.svg" />
                <div className={styles.companyDiv}>Try for free</div>
                <img className={styles.iconR7} alt="" src="../icon--r26.svg" />
              </div>
            </div>
          </div>
          <div className={styles.featuresLineDiv}>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Moonbirds</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Faucibus odio elementum nulla venenatis, libero. Ullamcorper
                  duis fringilla pulvinar nibh diam sit.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l27.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r27.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen1.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>
                  Clone X - X Takashi Murakami
                </div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Magna in condimentum praesent pretium vitae mattis facilisis
                  nunc. Lectus in ac ac.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l28.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r28.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen2.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Mutant Ape Yacht Club</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget
                  cursus nulla risus euismod. Netus.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l29.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r29.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuresLineDiv}>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen3.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>
                  "MOAR" by Joan Cornella
                </div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Faucibus odio elementum nulla venenatis, libero. Ullamcorper
                  duis fringilla pulvinar nibh diam sit.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l30.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r30.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen4.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Doodles</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Magna in condimentum praesent pretium vitae mattis facilisis
                  nunc. Lectus in ac ac.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l31.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r31.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen5.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>KIWAMI Genesis</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget
                  cursus nulla risus euismod. Netus.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l32.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r32.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.featuresLineDiv}>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen6.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Arcade Land</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Faucibus odio elementum nulla venenatis, libero. Ullamcorper
                  duis fringilla pulvinar nibh diam sit.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l33.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r33.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen7.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Goons of Balatroon</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Magna in condimentum praesent pretium vitae mattis facilisis
                  nunc. Lectus in ac ac.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l34.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r34.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardDiv}>
              <img className={styles.screenIcon} alt="" src="../screen8.svg" />
              <div className={styles.textBlockDiv}>
                <div className={styles.moonbirdsDiv}>Meta Toy DragonZ</div>
                <div className={styles.faucibusOdioElementumNulla}>
                  Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget
                  cursus nulla risus euismod. Netus.
                </div>
                <div className={styles.buttonDiv33}>
                  <div className={styles.masterButtonDiv11}>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--l35.svg"
                    />
                    <div className={styles.companyDiv}>Click me</div>
                    <img
                      className={styles.iconL}
                      alt=""
                      src="../icon--r35.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDesktop;
