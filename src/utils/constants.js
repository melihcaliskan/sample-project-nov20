export const languageList = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" }
];

export const countryList = [
  { id: "TR", name: "Turkey" },
  { id: "US", name: "United States of America" },
  { id: "GB", name: "United Kingdom" },
  { id: "DE", name: "Germany" },
  { id: "SE", name: "Sweden" },
  { id: "KE", name: "Kenya" },
  { id: "BR", name: "Brazil" },
  { id: "ZW", name: "Zimbabwe" }
];

export const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];