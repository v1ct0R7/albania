export interface Destination {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
}

export interface Itinerary {
  title: string;
  duration: string;
  summary: string;
}

export interface Highlight {
  title: string;
  caption: string;
  accent: string;
}

export interface RegionPoint {
  name: string;
  label: string;
  coords: [number, number];
  description: string;
}

export const ALBANIA_DATA = {
  hero: {
    title: 'Albania.com',
    subtitle: 'Një udhëtim modern për të eksploruar destinacionet, natyrën dhe kulturën e Shqipërisë.',
    description: 'Ndërtojmë një përvojë të personalizuar për Shqipërinë me hartë, itinerare dhe sugjerime të detajuara.',
    cta: 'Zbulo Shqipërinë'
  },
  destinations: [
    {
      title: 'Tirana',
      subtitle: 'Një qytet që rritet me ritmin e kohës',
      description: 'Kultura urbane, kafenetë moderne dhe sheshi i gjallë e bëjnë Tiranën një fillim të shkëlqyer.',
      accent: 'linear-gradient(135deg, #f4b183 0%, #ae5a4c 100%)'
    },
    {
      title: 'Berat',
      subtitle: 'Qyteti i një mijë dritareve',
      description: 'Kalaja dhe lagjet karakteristike sjellin histori dhe bukuri arkitekturore në çdo rrugicë.',
      accent: 'linear-gradient(135deg, #8bc9a2 0%, #4a8a6f 100%)'
    },
    {
      title: 'Saranda',
      subtitle: 'Plazhet e Jonit dhe aroma e detit',
      description: 'Ujëra të kristalta, ishuj të vegjël dhe kuzhinë bregdetare në një qytet që rrezaton verë.',
      accent: 'linear-gradient(135deg, #4d7ecb 0%, #2a3a8d 100%)'
    },
    {
      title: 'Theth',
      subtitle: 'Mendje e qetë në zemër të Alpeve',
      description: 'Shtëpi tradicionale, ujëvara dhe gjelbërim i paprekur në një udhëtim malor.',
      accent: 'linear-gradient(135deg, #7ea5c2 0%, #3f5d7a 100%)'
    }
  ] as Destination[],
  itineraries: [
    {
      title: '5 ditë në bregdetin jugor',
      duration: '5 ditë',
      summary: 'Nga riviera deri në kufirin malor, një kombinim plazhi dhe tradite bregdetare.'
    },
    {
      title: '7 ditë në qytetet historike',
      duration: '7 ditë',
      summary: 'Tirana, Berat, Gjirokastër dhe Krujë për një udhëtim të pasur në histori.'
    },
    {
      title: '3 ditë në Shqipërinë e Veriut',
      duration: '3 ditë',
      summary: 'Alpet, liqenet dhe fshatrat autentike – një eksperiencë natyrore e vërtetë.'
    }
  ] as Itinerary[],
  highlights: [
    {
      title: 'Kulinaritë shqiptare',
      caption: 'Restorante të vogla dhe receta familjare që tregojnë shijen autentike të Shqipërisë.',
      accent: '#f8c471'
    },
    {
      title: 'Arkitektura e lashtë',
      caption: 'Fortesat, banesat otomane dhe kishat e vjetra që flasin për shekuj.',
      accent: '#7fb3d5'
    },
    {
      title: 'Rajonet e ndryshme',
      caption: 'Bregdeti Jon, liqenet e veriut, fushat e thella dhe qytetet e vogla.',
      accent: '#82e0aa'
    }
  ] as Highlight[],
  regions: [
    {
      name: 'Tirana',
      label: 'TIR',
      coords: [110, 80],
      description: 'Qendra ekonomike dhe kulturore e vendit.'
    },
    {
      name: 'Berat',
      label: 'BER',
      coords: [90, 160],
      description: 'Një qytet historik i njohur për arkitekturën e tij unike.'
    },
    {
      name: 'Saranda',
      label: 'SAR',
      coords: [100, 280],
      description: 'Porti kryesor i jugut pranë bregdetit Jon.'
    },
    {
      name: 'Theth',
      label: 'THE',
      coords: [80, 40],
      description: 'Një perlë malore me kanione dhe shkëmbinj të thepisur.'
    }
  ] as RegionPoint[]
};
