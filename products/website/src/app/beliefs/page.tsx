import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beliefs — Dr. Julia Hasty",
  description:
    "Things I believe about science, deployment, energy, water, leadership, and building things that last.",
};

const beliefs = [
  {
    heading: "Real deployment beats perfect design",
    items: [
      "A system running in a field in Liberia during an epidemic teaches you more than a year in the lab.",
      "Iteration only works if you're actually in the field watching things fail.",
      "The gap between a working prototype and 900 working units is where most good ideas die — close it early.",
      "Ship something small, learn something real, then go bigger.",
    ],
  },
  {
    heading: "Energy and water access are human rights, not markets",
    items: [
      "People without reliable electricity or clean water are not an underserved niche — they are the point.",
      "The best clean energy technology is the one that works when the grid goes down, the supply chain breaks, and no technician shows up.",
      "Decentralized systems are more resilient than centralized ones. This is true for energy, water, governance, and probably most other things.",
      "A microgrid that keeps a hospital running after a hurricane has done more good than a hundred conference talks about energy transition.",
    ],
  },
  {
    heading: "Science that can't survive the real world isn't finished",
    items: [
      "A peer-reviewed result is a hypothesis. A deployed system is an answer.",
      "The rigor of the lab matters most when the stakes outside it are highest.",
      "Domain expertise built in the field transfers. Expertise built only in papers often doesn't.",
      "Nano-catalysts that work in a reactor at Stony Brook and systems running in 35 countries are two different things. You need both.",
    ],
  },
  {
    heading: "Small teams are a structural advantage",
    items: [
      "Fifteen engineers who own the full system will outrun fifty specialists who own pieces of it.",
      "Speed comes from trust, not headcount.",
      "The founding energy of a small team is a resource you spend — be careful what you spend it on.",
      "A team of three who ship beats a committee of fifteen who align.",
    ],
  },
  {
    heading: "Go where the problem is",
    items: [
      "You cannot solve Puerto Rico's energy crisis from Oakland. You have to live there.",
      "The most important conversations happen in the field, not at the conference.",
      "Proximity to the problem is a form of expertise that doesn't show up on a résumé.",
      "If the work matters, be present for it.",
    ],
  },
  {
    heading: "Technology and policy have to move together",
    items: [
      "A technically perfect microgrid that violates the utility's interconnection rules doesn't help anyone.",
      "Engineers who don't understand regulation build things that don't get built. Policy people who don't understand engineering write rules that don't work.",
      "The most effective lever in energy transition right now is regulatory structure, not technology.",
      "Co-founding an electric cooperative accelerator after Hurricane Maria taught me more about energy transition than any engineering project.",
    ],
  },
  {
    heading: "Safety thinking is a feature, not overhead",
    items: [
      "A gasifier running on biomass in a remote village has no backup. Design like it.",
      "Failure modes in deployed energy systems are not theoretical — people's food, medicine, and livelihood depend on uptime.",
      "Safety culture in engineering means the person who raises the concern is the most valuable person in the room.",
      "The same rigor that makes a field gasifier trustworthy is what makes a powerful AI system trustworthy. The stakes change; the discipline doesn't.",
    ],
  },
  {
    heading: "The best funding goes to the best story",
    items: [
      "NSF reviewers, USAID program officers, and tribal councils all want to know the same thing: will this work, and does this person know what they're doing?",
      "Grant writing is a form of science communication, and science communication is a competitive advantage.",
      "If you can't explain why your project matters to a non-expert, you probably don't fully understand why it matters yet.",
      "Storytelling is not spin. It is the discipline of knowing which facts are most true.",
    ],
  },
  {
    heading: "Entrepreneurship is a long game",
    items: [
      "Starting a company is easy. Building a company that survives long enough to do what it set out to do is the actual challenge.",
      "The companies I've seen fail didn't run out of ideas. They ran out of cash, or trust, or timing.",
      "Pivoting is not giving up — it is applying evidence. The question is whether you're pivoting from data or from fear.",
      "Exit is not failure. Sometimes the mission is best served by what you build being absorbed into something larger.",
    ],
  },
  {
    heading: "Curiosity is more durable than expertise",
    items: [
      "Every field I've worked in — catalysis, gasification, water, microgrids, policy, AI — started as something I didn't know how to do.",
      "The willingness to be a beginner in public is underrated.",
      "The scientists I've learned the most from were the ones who were still genuinely surprised by their results.",
      "Expertise is what you've already learned. Curiosity is what you'll learn next.",
    ],
  },
];

export default function BeliefsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-14">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Things I Believe
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Opinions formed over 20 years of labs, field deployments, startups,
          and policy work. Held with conviction, updated with evidence.
        </p>
      </header>

      <div className="space-y-12">
        {beliefs.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-lg font-semibold">{section.heading}</h2>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
