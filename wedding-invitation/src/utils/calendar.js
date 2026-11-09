import weddingData from '../data/weddingData';

// Escape text per RFC 5545
const escapeText = (value) =>
  String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');

// Fold long lines to 75 characters, as required by the ICS spec
const fold = (line) => {
  if (line.length <= 75) return line;
  const parts = [line.slice(0, 75)];
  for (let i = 75; i < line.length; i += 74) parts.push(' ' + line.slice(i, i + 74));
  return parts.join('\r\n');
};

const utcStamp = () =>
  new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export function buildIcs() {
  const { couple, date, events } = weddingData;
  const { ceremony, reception } = events;

  const description = [
    `Wedding of ${couple.pairShort}.`,
    '',
    `Wedding Ceremony: ${ceremony.time} at ${ceremony.venue}.`,
    `Wedding Reception: ${reception.time} at ${reception.venue}, ${reception.address}.`,
    '',
    weddingData.closingMessage,
  ].join('\n');

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//Arun Kumar and Nirmala//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    `TZID:${date.timezone}`,
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:+0530',
    'TZOFFSETTO:+0530',
    'TZNAME:IST',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:wedding-${date.icsDate}-arun-nirmala@wedding-invitation`,
    `DTSTAMP:${utcStamp()}`,
    `DTSTART;TZID=${date.timezone}:${date.icsDate}T${date.icsStart}`,
    `DTEND;TZID=${date.timezone}:${date.icsDate}T${date.icsEnd}`,
    `SUMMARY:${escapeText(`Wedding Ceremony & Reception – ${couple.pairShort.replace('&', 'and')}`)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(`${ceremony.venue} (Ceremony); ${reception.venue}, ${reception.address} (Reception)`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return lines.map(fold).join('\r\n') + '\r\n';
}

/** Triggers a browser download of the .ics file. Returns true on success. */
export function downloadIcs() {
  try {
    const blob = new Blob([buildIcs()], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'arun-nirmala-wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch (error) {
    console.error('Could not create calendar file', error);
    return false;
  }
}
