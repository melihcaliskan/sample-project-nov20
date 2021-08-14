export const languageList = [
  { value: "tr", label: "Türkçe" },
  { value: "en", label: "English" }
];

export const countryList = [
  { value: "TR", label: "Turkey" },
  { value: "US", label: "United States of America" },
  { value: "GB", label: "United Kingdom" },
  { value: "DE", label: "Germany" },
  { value: "SE", label: "Sweden" },
  { value: "KE", label: "Kenya" },
  { value: "BR", label: "Brazil" },
  { value: "ZW", label: "Zimbabwe" }
];

export const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

export const routes = [
  { path: "/", translateKey: "home" },
  { path: "/contact", translateKey: "contact" },
]