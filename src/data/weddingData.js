/**
 * Central wedding configuration.
 * Edit this file to change names, dates, venues or family details.
 * No component contains hard-coded wedding information.
 */

const RECEPTION_ADDRESS =
  '13/202, Perarignar Anna Marriage Hall, GKM Colony Main Rd, Gandhi Nagar, General Kumaramangalam Colony, Perambur, Chennai, Tamil Nadu 600082';

const CEREMONY_ADDRESS =
  'The Pentecostal Mission Church, Kellys, 162, Barakka Rd, Secretariat Colony, Purasaiwakkam, Chennai, Tamil Nadu 600010';

export const weddingData = {
  couple: {
    groom: {
      name: 'Arun Kumar S',
      aka: 'Sam Meshak Jebakumar',
    },
    bride: {
      name: 'Nirmala S',
      fullName: 'Nirmala S',
      aka: 'Flora',
    },
    pairShort: 'Arun Kumar S & Nirmala',
  },

  verse: {
    text: 'Be completely humble and gentle; be patient, bearing with one another in love.',
    reference: 'Ephesians 4:2',
  },

  invitationMessage:
    'With praise and thanksgiving to God, we cordially invite you to the wedding ceremony of Arun Kumar S and Nirmala.',
  closingMessage: 'Your presence will make our joy complete.',
  blessing:
    'May the Lord bless you and keep you; may the Lord make His face shine on you and be gracious to you. — Numbers 6:24-25',
  finalLine:
    "With love and God's blessings, we warmly invite you to celebrate with us.",

  date: {
    weekday: 'Tuesday',
    display: '12 January 2027',
    full: 'Tuesday, 12 January 2027',
    // Countdown target: midnight at the START of 12 January 2027 in
    // Asia/Kolkata (IST, UTC+05:30). The offset makes this one absolute
    // moment in time, so every visitor sees the same countdown no matter
    // which time zone their device uses.
    countdownTarget: '2027-01-12T00:00:00+05:30',
    timezone: 'Asia/Kolkata',
    // Used by the calendar (.ics) file, local Asia/Kolkata time
    icsDate: '20270112',
    icsStart: '170000', // 5:00 PM
    icsEnd: '220000', // 10:00 PM
  },

  events: {
    ceremony: {
      title: 'Wedding Ceremony',
      date: 'Tuesday, 12 January 2027',
      time: '5:00 PM',
      venue: 'TPM Kellys',
      // Add the exact address here when it is provided. Shown only if set.
      address: '',
      description:
        "Join us as we celebrate the beginning of a beautiful journey together, with God's blessings.",
    },
    reception: {
      title: 'Wedding Reception',
      date: 'Tuesday, 12 January 2027',
      time: '7:00 PM',
      venue: 'Perarignar Anna Marriage Hall',
      address: RECEPTION_ADDRESS,
      description:
        'Celebrate this special occasion with us and bless the newlyweds.',
    },
  },

  families: {
    groom: {
      title: "Groom's Family",
      members: [
        {
          label: 'Father',
          names: ['Late Kingkong (a) Jeba Kumar'],
          note: 'Retired Tamilnadu Secretariat',
        },
        { label: 'Mother', names: ['Vanama Devi'] },
        {
          label: 'Brothers',
          names: ['Abishek Kumar S', 'Cyril Abilesh Kumar S'],
        },
      ],
    },
    bride: {
      title: "Bride's Family",
      members: [
        {
          label: 'Parents',
          names: ['V. Sekar (a) Samuel', 'S. Thangamariyammal (a) Devaoli'],
        },
        { label: 'Sister', names: ['Eswari (a) Margaret'] },
      ],
    },
  },

  venueMap: {
    name: 'Perarignar Anna Marriage Hall',
    address: RECEPTION_ADDRESS,
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(RECEPTION_ADDRESS)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RECEPTION_ADDRESS)}`,
  },

  ceremonyMap: {
    name: 'The Pentecostal Mission Church, Kellys',
    address: CEREMONY_ADDRESS,
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(CEREMONY_ADDRESS)}&output=embed`,
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=The+Pentecostal+Mission+Church%2C+162%2C+Barakka+Rd%2C+Secretariat+Colony%2C+Purasaiwakkam%2C+Chennai%2C+Tamil+Nadu+600010`,
  },

  poster: {
    src: '/wedding-invitation.png',
    alt: 'Wedding invitation poster of Arun Kumar S and Nirmala with purple florals and gold ornaments',
  },

  // RSVP is intentionally omitted: it needs a contact number or a backend.
  // See README ("Optional: WhatsApp RSVP") to add one.

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'events', label: 'Events' },
    { id: 'family', label: 'Families' },
    { id: 'venue', label: 'Venue' },
    { id: 'invitation', label: 'Invitation' },
  ],
};

export default weddingData;
