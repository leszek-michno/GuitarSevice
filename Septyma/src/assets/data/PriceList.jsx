import img1 from "../images/large/setupfr.webp";
import img2 from "../images/large/setupthom.webp";
import img3 from "../images/main1.webp";
import img4 from "../images/large/siodelko.webp";
import img5 from "../images/large/bridge.webp";
import img6 from "../images/large/maszynki.webp";
import img7 from "../images/large/szlif.webp";
import img8 from "../images/large/jack.webp";
import img9 from "../images/large/derust.webp";
import img10 from "../images/large/switch.webp";



export const PriceList = [
  {
    id: 1,
    name: "Przegląd",
    contents: "Sprawdzenie i ocena stanu technicznego gitary i jej podzespołów",
    price: 20,
    img: img1,
    
  },
  {
    id: 2,
    name: "Setup Standard HT/TOM",
    contents:
      "Wymiana strun, regulacja krzywizny gryfu, akcji strun i menzury w gitarze elektrycznej lub basowej ze stałym mostkiem i w gitarach akustycznych",
    price: 120,
    img: img2,
    
  },
  {
    id: 3,
    name: "Setup Premium HT/TOM",
    contents:
      "Setup Standard + głębokie czyszczenie i konserwacja podstrunnicy. Zalecany regularnie i przy zmianie pór roku. Wraz ze zmianą pory roku zachodzi różnica w wilgotności powietrza, która ma wpływ na zachowanie i kondycję drewna. W zależności od poziomu wilgotności, rozszerza się ono i kurczy, czego efektem są wahania w geometrii gryfu. Długotrwałe pozostawienie podstrunnicy bez konserwacji może prowadzić do jej wypaczenia, a w konsekwencji do kosztownych napraw.",
    price: 160,
    img: img3,
    
  },
  {
    id: 4,
    name: "Setup Standard TR/ET",
    contents:
      "Wymiana strun, regulacja krzywizny gryfu, akcji strun i menzury w gitarze z ruchomym mostkiem typu Floyd Rose, Ibanez Edge, Kahler, itp, oraz z mostkiem Evertune",
    price: 220,
    hideImg: true,
  },
  {
    id: 5,
    name: "Setup Premium TR/ET",
    contents:
      "Setup Standard + głębokie czyszczenie i konserwacja podstrunnicy.",
    price: 260,
    hideImg: true,
  },
  {
    id: 6,
    name: "Wymiana siodełka",
    contents: "Instalacja, obróbka i regulacja nowego siodełka szyjki.",
    price: 120,
    img: img4,
  },
  {
    id: 7,
    name: "Wymiana mostka",
    contents: "Hardtail, Tune-O-Matic, Floyd Rose.",
    price: 120,
    img: img5,
  },
  {
    id: 8,
    name: "Wymiana maszynek",
    contents:
      "Wstawienie nowego zestawu kluczy w główce gitary, w razie potrzeby poszerzenie otworów i zakrycie dziur po śrubkach.",
    price: 70,
    img: img6,
  },
  {
    id: 9,
    name: "Szlif progów HT/TOM",
    contents:
      "Równanie i polerka progów w gitarze ze stałym mostkiem. W zakres usługi wchodzi setup premium.",
    price: 460,
    img: img7,
  },
  {
    id: 10,
    name: "Szlif progów TR/ET",
    contents:
      "Równanie i polerka progów w gitarze z mostkiem pływającym lub evertune. W zakres usługi wchodzi setup premium.",
    price: 560,
    hideImg: true,
  },
  {
    id: 11,
    name: "Wymiana progów",
    contents:
      "Wstawienie nowych progów wedle specyfikacji - usługa obejmuje szlif i setup premium.",
    price: 750,
    hideImg: true,
  },
  {
    id: 12,
    name: "Polerowanie progów",
    contents:
      "Usunięcie korozji i zmatowienia z progów, przywrócenie połysku i gładkości.",
    price: 100,
    img: img9,
  },
  {
    id: 13,
    name: "Wymiana gniazda jack",
    contents: "Instalacja nowego gniazda jack.",
    price: 40,
    img: img8,
  },
  {
    id: 14,
    name: "Wymiana przełącznika",
    contents: "Wymiana przełącznika typu toggle lub slide.",
    price: 40,
    img: img10,
  },
  {
    id: 15,
    name: "Potencjometry",
    contents: "Wymiana jednego potencjometra.",
    price: 30,
    hideImg: true,
  },
  {
    id: 16,
    name: "Wymiana przetworników",
    contents:
      "Wymiana jednego lub więcej przetworników (demontaż, instalacja, połączenie zgodnie z preferencjami i specyfikacją. Doradztwo i dobór odpowiednich podzespołów do usługi.",
    price: 250,
    hideImg: true,
  },
  {
    id: 17,
    name: "Klejenie pękniętej szyjki",
    contents: "Sklejenie pękniętej główki lub gryfu wraz z wymianą strun.",
    price: 180,
    hideImg: true,
  },
  {
    id: 18,
    name: "Odrdzewianie",
    contents: "Usunięcie rdzy z podzespołów, konserwacja.",
    price: 100,
    hideImg: true,
  },
  {
    id: 19,
    name: "Postarzanie (relicking) podzespołów",
    contents:
      "Obróbka papierem ściernym i wytrawienie metalowych częsci gitary (np. mostków, maszynek, pokrywek przetworników, zaczepów paska, itd) w oparach kwasu solnego w celu uzyskania efektu relic/vintage.",
    price: 150,
    hideImg: true,
  },
  {
    id: 20,
    name: "Ekranowanie",
    contents:
      "Wyłożenie komór przetworników i elektroniki taśmą miedzianą. Ekranowanie to przydatny zabieg mający na celu zminimalizowanie brumienia gitary. Folia miedzianą tworzy wewnątrz komory klatkę Faradaya, izolując ją od zewnętrznych zakłóceń elektromagnetycznych, które w normalnych okolicznościach przedostają się do sygnału gitary w postaci szumów i brumienia.",
    price: 200,
    hideImg: true,
  },
];


export const PriceListEng = [
  {
    id: 1,
    name: "Review",
    contents: "Check-up and evaluation of instrument's and it's sub-component's technical shape",
    price: 20,
    img: img1,
    
  },
  {
    id: 2,
    name: "Setup Standard HT/TOM",
    contents:
      "String replacement, neck relief, action and intonation setup for electric guitars and basses equipped hard tail and tune-o-matic bridge, and acoustic guitars",
    price: 120,
    img: img2,
    
  },
  {
    id: 3,
    name: "Setup Premium HT/TOM",
    contents:
      "Setup standard + deep cleanse and conservation of the fretboard. Recommended regularly and at the change of seasons. As the seasons change, there occurs a difference in air humidity, which affects the behavior and condition of the wood. Depending on the humidity level, it expands and contracts, resulting in fluctuations in the geometry of the neck. Leaving the fingerboard without maintenance for a long time can lead to its warping and, consequently, to costly repairs.",
    price: 160,
    img: img3,
    
  },
  {
    id: 4,
    name: "Setup Standard TR/ET",
    contents:
      "String replacement, neck relief, action and intonation setup for guitars equipped with floating tremolo bridge eg. Floyd Rose, Ibanez Edge, Kahler etc, and Evertune bridge",
    price: 220,
    hideImg: true,
  },
  {
    id: 5,
    name: "Setup Premium TR/ET",
    contents:
      "Setup Standard + deep cleanse and conservation of the fretboard.",
    price: 260,
    hideImg: true,
  },
  {
    id: 6,
    name: "Nut replacement",
    contents: "Installation, filing and setup of a new nut.",
    price: 120,
    img: img4,
  },
  {
    id: 7,
    name: "Bridge replacement",
    contents: "Hardtail, Tune-O-Matic, Floyd Rose.",
    price: 120,
    img: img5,
  },
  {
    id: 8,
    name: "Machine heads replacement",
    contents:
      "Inserting a new set of keys into the guitar's headstock, widening the holes if necessary, and covering the screw holes..",
    price: 70,
    img: img6,
  },
  {
    id: 9,
    name: "Fret filing TH/TOM",
    contents:
      "Fret alignment, filing and polishing for guitars equipped hard tail and tune-o-matic bridge. Service includes Setup Premium.",
    price: 460,
    img: img7,
  },
  {
    id: 10,
    name: "Fret filing FR/ET",
    contents:
      "Fret alignment, filing and polishing for guitars equipped with floating tremolo bridge eg. Floyd Rose, Ibanez Edge, Kahler etc, and Evertune bridge. Service includes Setup Premium.",
    price: 560,
    hideImg: true,
  },
  {
    id: 11,
    name: "Fret replacement",
    contents:
      "Inserting new frets according to specifications - the service includes filing and premium setup.",
    price: 750,
    hideImg: true,
  },
  {
    id: 12,
    name: "Fret polishing",
    contents:
      "Removing corrosion and dullness from frets, restoring shine and smoothness.",
    price: 100,
    img: img9,
  },
  {
    id: 13,
    name: "Jack replacement",
    contents: "Installation of a new jack input.",
    price: 40,
    img: img8,
  },
  {
    id: 14,
    name: "Switch replacement",
    contents: "nstallation of a new toggle or slide switch.",
    price: 40,
    img: img10,
  },
  {
    id: 15,
    name: "Potentiometer replacement",
    contents: "Installation of one potentiometer.",
    price: 30,
    hideImg: true,
  },
  {
    id: 16,
    name: "Pickup replacement",
    contents:
      "Installation of one or a set of pickups. Wiring according to individual specs. Consulting and selection of appropriate components for the service.",
    price: 250,
    hideImg: true,
  },
  {
    id: 17,
    name: "Gluing of fractured neck/head",
    contents: "Gluing a cracked headstock or neck together with replacing the strings.",
    price: 180,
    hideImg: true,
  },
  {
    id: 18,
    name: "Rust removal",
    contents: "Removing rust from components, maintenance.",
    price: 100,
    hideImg: true,
  },
  {
    id: 19,
    name: "Relicking (aging) of components",
    contents:
      "Processing with sandpaper and etching metal parts of the guitar (e.g. bridges, headstock, pickup covers, strap buttons, etc.) in hydrochloric acid fumes to obtain a relic/vintage effect.",
    price: 150,
    hideImg: true,
  },
  {
    id: 20,
    name: "Shielding",
    contents:
      "lining the pickups and electronics chambers with copper tape. Shielding is a useful technique to minimize the hum of a guitar. The copper foil creates a Faraday cage inside the chamber, isolating it from external electromagnetic interference that would normally enter the guitar signal in the form of noise and hum.",
    price: 200,
    hideImg: true,
  },
];
