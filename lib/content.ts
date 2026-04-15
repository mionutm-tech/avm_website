export const org = {
  shortName: "AVM-UI",
  fullName: "Asociația pentru Viitorul Mobilității Urbane și Interurbane",
  tagline: "Viitorul mobilității începe în orașele noastre.",
  established: 2021,
};

export const hero = {
  eyebrow: "Asociație non-profit · România",
  titleLead: "Viitorul",
  titleDisplay: "mobilității",
  titleTail: "începe în orașele noastre.",
  subtitle:
    "Construim împreună orașe unde aerul este curat, străzile sunt sigure, iar fiecare călătorie respectă oamenii și planeta.",
  primaryCta: { label: "Devino membru", href: "#alatura-te" },
  secondaryCta: { label: "Explorează proiectele", href: "#proiecte" },
  stats: [
    { value: "148", unit: "km", label: "piste ciclabile sprijinite" },
    { value: "23", unit: "orașe", label: "partenere în rețea" },
    { value: "1.2k", unit: "membri", label: "comunitate activă" },
  ],
};

export const about = {
  eyebrow: "Despre noi",
  title: "O asociație pentru un deceniu decisiv.",
  body: `Suntem urbaniști, ingineri, cicliști, șoferi, părinți și studenți din toată România, uniți de o convingere simplă: modul în care ne deplasăm definește orașele în care trăim. AVMUI militează pentru politici publice, proiecte pilot și educație care aduc mobilitatea curată mai aproape de oameni — de la mijloacele electrice la transportul în comun modern, de la pietonalizare la rețele ciclabile interurbane.`,
  values: [
    {
      title: "Sustenabilitate",
      body: "Fiecare kilometru contează. Reducem emisiile prin soluții practice, măsurabile, replicabile.",
    },
    {
      title: "Inovație",
      body: "Combinăm date deschise, design urban și tehnologie pentru a debloca alegeri mai bune.",
    },
    {
      title: "Comunitate",
      body: "Construim alianțe între primării, cetățeni și companii — pentru că orașele se schimbă împreună.",
    },
  ],
};

export const projects = [
  {
    code: "01",
    title: "Coridoare ciclabile interurbane",
    body: "Hărți, studii de fezabilitate și advocacy pentru conectarea orașelor prin infrastructură sigură pentru biciclete.",
    tag: "Infrastructură",
    icon: "bike",
  },
  {
    code: "02",
    title: "Flote electrice pentru primării",
    body: "Sprijin tehnic și juridic pentru tranziția parcului auto al administrațiilor locale către vehicule electrice.",
    tag: "Tranziție EV",
    icon: "zap",
  },
  {
    code: "03",
    title: "Orașul de 15 minute",
    body: "Ateliere cu urbaniști și comunități locale pentru a reproiecta cartiere unde totul esențial e la o scurtă plimbare.",
    tag: "Urbanism",
    icon: "compass",
  },
  {
    code: "04",
    title: "Date deschise pentru mobilitate",
    body: "Colectăm și publicăm date despre trafic, transport public și calitatea aerului în parteneriat cu municipalitățile.",
    tag: "Open data",
    icon: "database",
  },
  {
    code: "05",
    title: "Educație rutieră pentru toți",
    body: "Programe în școli despre mers pe bicicletă, siguranță rutieră și alegeri conștiente de deplasare.",
    tag: "Educație",
    icon: "graduation",
  },
  {
    code: "06",
    title: "Micro-mobilitate partajată",
    body: "Pilotăm stații de trotinete și biciclete partajate în orașe medii, cu tarife sociale și integrare în transportul public.",
    tag: "Pilot",
    icon: "share",
  },
];

export const impact = [
  { value: 3200, suffix: "t", label: "CO₂ evitat anual prin proiectele susținute" },
  { value: 148, suffix: "km", label: "infrastructură ciclabilă sprijinită" },
  { value: 62, suffix: "", label: "evenimente publice organizate" },
  { value: 23, suffix: "", label: "orașe partenere în rețea" },
];

export const cities = [
  { name: "București", x: 560, y: 420 },
  { name: "Cluj-Napoca", x: 320, y: 200 },
  { name: "Timișoara", x: 170, y: 310 },
  { name: "Iași", x: 660, y: 180 },
  { name: "Brașov", x: 500, y: 320 },
  { name: "Constanța", x: 740, y: 430 },
  { name: "Sibiu", x: 400, y: 300 },
];

export const partners = [
  "Primăria Cluj-Napoca",
  "Urban Lab Iași",
  "Timișoara Smart City",
  "EnergoCity București",
  "Brașov Green",
  "Universitatea Tehnică",
  "Sibiu Mobility Forum",
  "Constanța Maritimă",
];

export type MemberGroup = "board" | "team" | "volunteers";

export const members: {
  name: string;
  role: string;
  bio: string;
  group: MemberGroup;
  accent: "mint" | "sky" | "sunrise";
}[] = [
  {
    name: "Andrei Pop",
    role: "Președinte",
    bio: "Urbanist, 12 ani în planificare de transport în Europa Centrală.",
    group: "board",
    accent: "mint",
  },
  {
    name: "Ioana Marinescu",
    role: "Vicepreședinte",
    bio: "Inginer mobilitate, fost lead într-un proiect european de BRT.",
    group: "board",
    accent: "sky",
  },
  {
    name: "Răzvan Stoica",
    role: "Trezorier",
    bio: "Economist specializat în finanțe climatice și fonduri UE.",
    group: "board",
    accent: "sunrise",
  },
  {
    name: "Diana Ilie",
    role: "Director proiecte",
    bio: "Coordonează coridoarele ciclabile și programele școlare.",
    group: "team",
    accent: "mint",
  },
  {
    name: "Matei Dobre",
    role: "Data lead",
    bio: "Construiește instrumentele open-data pentru municipalități.",
    group: "team",
    accent: "sky",
  },
  {
    name: "Oana Radu",
    role: "Comunicare",
    bio: "Scrie despre orașe, povești locale și tranziție energetică.",
    group: "team",
    accent: "sunrise",
  },
  {
    name: "Vlad Enache",
    role: "Voluntar coordonator Cluj",
    bio: "Organizează atelierele lunare și plimbările ghidate pe bicicletă.",
    group: "volunteers",
    accent: "mint",
  },
  {
    name: "Sofia Neagu",
    role: "Voluntar Iași",
    bio: "Studentă arhitectură, pasionată de orașul de 15 minute.",
    group: "volunteers",
    accent: "sky",
  },
];

export const news = [
  {
    date: "14 Apr 2026",
    category: "Advocacy",
    title: "Scrisoare deschisă pentru coridorul ciclabil Cluj–Turda",
    excerpt:
      "Împreună cu 11 organizații, am cerut autorităților finalizarea primei piste interurbane din Transilvania.",
  },
  {
    date: "02 Apr 2026",
    category: "Studiu",
    title: "Raportul „Aerul pe care îl respirăm” — ediția 2026",
    excerpt:
      "O radiografie a calității aerului în șase orașe mari și recomandările noastre concrete pentru primării.",
  },
  {
    date: "18 Mar 2026",
    category: "Eveniment",
    title: "Mobility Days București — înscrieri deschise",
    excerpt:
      "Două zile de conferințe, ateliere și plimbări ghidate. Participarea este gratuită pentru membri.",
  },
];

export const tiers = [
  {
    name: "Simpatizant",
    price: "Gratuit",
    period: "",
    perks: [
      "Newsletter lunar",
      "Acces la evenimente deschise",
      "Invitații la plimbări ghidate",
    ],
    cta: "Abonează-te",
    featured: false,
  },
  {
    name: "Membru",
    price: "12 €",
    period: "/ lună",
    perks: [
      "Vot în adunarea generală",
      "Atelierele interne și grupurile de lucru",
      "Acces complet la rapoarte și date",
      "Discount la Mobility Days",
    ],
    cta: "Devino membru",
    featured: true,
  },
  {
    name: "Partener",
    price: "La cerere",
    period: "",
    perks: [
      "Proiecte dedicate cu echipa AVM-UI",
      "Co-branding și prezență în rapoarte",
      "Consultanță strategică",
    ],
    cta: "Scrie-ne",
    featured: false,
  },
];

export const contact = {
  email: "salut@avmui.ro",
  phone: "+40 371 000 000",
  address: "Str. Mobilității 12, București, România",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
