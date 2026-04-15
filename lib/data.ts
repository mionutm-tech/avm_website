import { getPayload } from "payload";
import config from "@payload-config";

/* Lightweight shape types to avoid coupling to generated Payload types. */
export type HeroData = {
  eyebrow: string;
  titleLead: string;
  titleDisplay: string;
  titleTail: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { value: string; unit: string; label: string }[];
};

export type AboutData = {
  eyebrow: string;
  title: string;
  body: string;
  values: { title: string; body: string }[];
};

export type ProjectData = {
  code: string;
  title: string;
  body: string;
  tag: string;
  icon: string;
};

export type ImpactMetricData = {
  value: number;
  suffix: string;
  label: string;
};

export type CityData = { name: string; x: number; y: number };
export type PartnerData = string;

export type MemberGroup = "board" | "team" | "volunteers";
export type MemberData = {
  name: string;
  role: string;
  bio: string;
  group: MemberGroup;
  accent: "mint" | "sky" | "sunrise";
};

export type NewsData = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export type TierData = {
  name: string;
  price: string;
  period: string;
  perks: string[];
  cta: string;
  featured: boolean;
};

export type ContactData = {
  email: string;
  phone: string;
  address: string;
  socials: { label: string; href: string }[];
};

export type OrgData = {
  shortName: string;
  fullName: string;
  tagline: string;
  established: number;
};

export type SiteContent = {
  hero: HeroData;
  about: AboutData;
  contact: ContactData;
  org: OrgData;
  projects: ProjectData[];
  impact: ImpactMetricData[];
  cities: CityData[];
  partners: PartnerData[];
  members: MemberData[];
  news: NewsData[];
  tiers: TierData[];
};

export async function fetchSiteContent(): Promise<SiteContent> {
  const payload = await getPayload({ config });

  const [heroG, aboutG, contactG, orgG] = await Promise.all([
    payload.findGlobal({ slug: "hero" }),
    payload.findGlobal({ slug: "about" }),
    payload.findGlobal({ slug: "contact" }),
    payload.findGlobal({ slug: "org-settings" }),
  ]);

  const [projects, impact, cities, partners, members, news, tiers] =
    await Promise.all([
      payload.find({ collection: "projects", limit: 100, sort: "order" }),
      payload.find({ collection: "impact-metrics", limit: 100, sort: "order" }),
      payload.find({ collection: "cities", limit: 100, sort: "order" }),
      payload.find({ collection: "partners", limit: 100, sort: "order" }),
      payload.find({ collection: "members", limit: 100, sort: "order" }),
      payload.find({ collection: "news", limit: 100, sort: "order" }),
      payload.find({ collection: "tiers", limit: 100, sort: "order" }),
    ]);

  return {
    hero: heroG as unknown as HeroData,
    about: aboutG as unknown as AboutData,
    contact: contactG as unknown as ContactData,
    org: orgG as unknown as OrgData,
    projects: projects.docs as unknown as ProjectData[],
    impact: impact.docs as unknown as ImpactMetricData[],
    cities: cities.docs as unknown as CityData[],
    partners: (partners.docs as unknown as { name: string }[]).map(
      (p) => p.name
    ),
    members: members.docs as unknown as MemberData[],
    news: news.docs as unknown as NewsData[],
    tiers: (tiers.docs as unknown as (Omit<TierData, "perks"> & { perks: { text: string }[] })[]).map(
      (t) => ({
        name: t.name,
        price: t.price,
        period: t.period,
        cta: t.cta,
        featured: t.featured,
        perks: t.perks.map((p) => p.text),
      })
    ),
  };
}
