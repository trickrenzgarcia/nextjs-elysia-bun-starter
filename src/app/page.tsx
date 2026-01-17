import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from "./components/code-block";

const techStack = [
  {
    name: "Next.js",
    description: "React framework for production",
    icon: () => (
      <Image src="/favicon.ico" alt="Next.js" width={125} height={125} />
    ),
    href: "https://nextjs.org",
    color: "hover:bg-black/5 dark:hover:bg-white/10",
  },
  {
    name: "Elysia",
    description: "Ergonomic Framework for Humans",
    icon: () => (
      <Image src="/elysia.svg" alt="Next.js" width={125} height={125} />
    ),
    href: "https://elysiajs.com",
    color: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
  },
  {
    name: "Bun",
    description: "Incredibly fast JavaScript runtime",
    icon: () => <Image src="/bun.svg" alt="Bun" width={125} height={125} />,
    href: "https://bun.sh",
    color: "hover:bg-orange-50 dark:hover:bg-orange-950/30",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Next.js + Elysia + Bun
          </h1>
          <p className="max-w-xl text-xl text-gray-600">
            A modern, blazingly fast full-stack starter template. Build
            type-safe APIs with Elysia, powered by Bun runtime and Next.js App
            Router.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {techStack.map((tech) => (
            <a
              key={tech.name}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-4 rounded-2xl border border-neutral-300 p-8`}
            >
              {<tech.icon />}
            </a>
          ))}
        </div>

        {/* Clone Command */}
        <CodeBlock code="git clone https://github.com/trickrenzgarcia/nextjs-elysia-bun-starter.git" />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://github.com/trickrenzgarcia/nextjs-elysia-bun-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-800 px-8 font-medium text-white transition-colors"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            Get Started
          </Link>
          <Link
            href="/api/openapi"
            className="flex h-12 items-center justify-center rounded-full border px-8 font-medium bg-zinc-0"
          >
            View OpenAPI →
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-zinc-500">
          Built with ❤️ using Next.js, Elysia & Bun
        </footer>
      </main>
    </div>
  );
}
