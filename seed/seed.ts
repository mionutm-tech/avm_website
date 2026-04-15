import type { Payload } from "payload";
import {
  hero as heroSeed,
  about as aboutSeed,
  projects as projectsSeed,
  impact as impactSeed,
  cities as citiesSeed,
  partners as partnersSeed,
  members as membersSeed,
  news as newsSeed,
  tiers as tiersSeed,
  contact as contactSeed,
  org as orgSeed,
} from "@/lib/content";

export async function seed(payload: Payload) {
  payload.logger.info("Seeding initial content from lib/content.ts...");

  // Globals
  await payload.updateGlobal({
    slug: "org-settings",
    data: {
      shortName: orgSeed.shortName,
      fullName: orgSeed.fullName,
      tagline: orgSeed.tagline,
      established: orgSeed.established,
    },
  });

  await payload.updateGlobal({
    slug: "hero",
    data: {
      eyebrow: heroSeed.eyebrow,
      titleLead: heroSeed.titleLead,
      titleDisplay: heroSeed.titleDisplay,
      titleTail: heroSeed.titleTail,
      subtitle: heroSeed.subtitle,
      primaryCta: heroSeed.primaryCta,
      secondaryCta: heroSeed.secondaryCta,
      stats: heroSeed.stats,
    },
  });

  await payload.updateGlobal({
    slug: "about",
    data: {
      eyebrow: aboutSeed.eyebrow,
      title: aboutSeed.title,
      body: aboutSeed.body,
      values: aboutSeed.values,
    },
  });

  await payload.updateGlobal({
    slug: "contact",
    data: {
      email: contactSeed.email,
      phone: contactSeed.phone,
      address: contactSeed.address,
      socials: contactSeed.socials,
    },
  });

  // Collections
  for (let i = 0; i < projectsSeed.length; i++) {
    const p = projectsSeed[i];
    await payload.create({
      collection: "projects",
      data: { ...p, order: i },
    });
  }

  for (let i = 0; i < impactSeed.length; i++) {
    const m = impactSeed[i];
    await payload.create({
      collection: "impact-metrics",
      data: { ...m, order: i },
    });
  }

  for (let i = 0; i < citiesSeed.length; i++) {
    await payload.create({
      collection: "cities",
      data: { ...citiesSeed[i], order: i },
    });
  }

  for (let i = 0; i < partnersSeed.length; i++) {
    await payload.create({
      collection: "partners",
      data: { name: partnersSeed[i], order: i },
    });
  }

  for (let i = 0; i < membersSeed.length; i++) {
    await payload.create({
      collection: "members",
      data: { ...membersSeed[i], order: i },
    });
  }

  for (let i = 0; i < newsSeed.length; i++) {
    await payload.create({
      collection: "news",
      data: { ...newsSeed[i], order: i },
    });
  }

  for (let i = 0; i < tiersSeed.length; i++) {
    const t = tiersSeed[i];
    await payload.create({
      collection: "tiers",
      data: {
        name: t.name,
        price: t.price,
        period: t.period,
        perks: t.perks.map((p) => ({ text: p })),
        cta: t.cta,
        featured: t.featured,
        order: i,
      },
    });
  }

  payload.logger.info("Seed complete.");
}
