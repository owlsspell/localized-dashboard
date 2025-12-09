// app/[locale]/i18n.ts
type Locale = "en" | "fr";

export const dict: Record<Locale, Record<string, string>> = {
  en: {
    title: "Users Dashboard",
    searchPlaceholder: "Search by name or email…",
    previous: "Previous",
    next: "Next",
    retry: "Retry",
    loading: "Loading…",
    error: "Failed to load users.",
    name: "Name",
    email: "Email",
    company: "Company",
  },
  fr: {
    title: "Tableau des utilisateurs",
    searchPlaceholder: "Rechercher par nom ou e-mail…",
    previous: "Précédent",
    next: "Suivant",
    retry: "Réessayer",
    loading: "Chargement…",
    error: "Échec du chargement des utilisateurs.",
    name: "Nom",
    email: "E-mail",
    company: "Entreprise",
  },
};
