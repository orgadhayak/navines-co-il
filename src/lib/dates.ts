const gregorianFormatter = new Intl.DateTimeFormat("he-IL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const hebrewFormatter = new Intl.DateTimeFormat("he-IL-u-ca-hebrew", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const hebrewOnes = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
const hebrewTens = ["", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
const hebrewHundreds = ["", "ק", "ר", "ש", "ת"];

function withGeresh(value: string) {
  if (value.length <= 1) {
    return `${value}׳`;
  }

  return `${value.slice(0, -1)}״${value.slice(-1)}`;
}

function hebrewNumber(value: number) {
  let remaining = value;
  let result = "";

  while (remaining >= 400) {
    result += "ת";
    remaining -= 400;
  }

  if (remaining >= 100) {
    const hundreds = Math.floor(remaining / 100);
    result += hebrewHundreds[hundreds];
    remaining %= 100;
  }

  if (remaining === 15) {
    result += "טו";
  } else if (remaining === 16) {
    result += "טז";
  } else {
    const tens = Math.floor(remaining / 10);
    const ones = remaining % 10;
    result += hebrewTens[tens] + hebrewOnes[ones];
  }

  return withGeresh(result);
}

function formatHebrewDate(date: Date) {
  const parts = hebrewFormatter.formatToParts(date);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  const year = Number(parts.find((part) => part.type === "year")?.value);

  return `${hebrewNumber(day)} ב${month} ${hebrewNumber(year % 1000)}`;
}

export function formatBlogDate(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return `${gregorianFormatter.format(date)} · ${formatHebrewDate(date)}`;
}
