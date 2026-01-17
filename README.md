# Next.js + Elysia + Bun Starter

A modern, blazingly fast full-stack starter template. Build type-safe APIs with Elysia, powered by Bun runtime and Next.js App Router.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![Elysia](https://img.shields.io/badge/Elysia-1.4-blue?style=flat-square)
![Bun](https://img.shields.io/badge/Bun-1.x-orange?style=flat-square&logo=bun)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- ⚡ **Bun Runtime** - Incredibly fast JavaScript runtime & package manager
- 🚀 **Next.js 16** - React framework with App Router & Server Components
- 🦊 **Elysia** - Ergonomic, type-safe API framework
- 📘 **TypeScript** - End-to-end type safety
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 📖 **OpenAPI** - Auto-generated API documentation
- 🧪 **Bun Test** - Built-in fast test runner

## 📋 Requirements

Before you begin, ensure you have the following installed:

- **Bun** (v1.0 or higher) - [Install Bun](https://bun.sh)

  ```bash
  # macOS, Linux, or WSL
  curl -fsSL https://bun.sh/install | bash

  # Windows (via PowerShell)
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

- **Node.js** (v20.x or higher, optional but recommended) - [Install Node.js](https://nodejs.org)

- **Git** - [Install Git](https://git-scm.com)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/trickrenzgarcia/nextjs-elysia-bun-starter.git
```

### 2. Navigate to the project directory

```bash
cd nextjs-elysia-bun-starter
```

### 3. Install dependencies

```bash
bun install
```

### 4. Run the development server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

| Command          | Description              |
| ---------------- | ------------------------ |
| `bun dev`        | Start development server |
| `bun build`      | Build for production     |
| `bun start`      | Start production server  |
| `bun lint`       | Run ESLint               |
| `bun test`       | Run tests                |
| `bun test:watch` | Run tests in watch mode  |

## 📁 Project Structure

```
nextjs-elysia-bun-starter/
├── public/              # Static assets
├── src/
│   ├── api/
│   │   ├── index.ts     # Elysia API setup
│   │   └── index.test.ts # API tests
│   └── app/
│       ├── api/
│       │   └── [[...slugs]]/
│       │       └── route.ts  # API route handler
│       ├── globals.css  # Global styles
│       ├── layout.tsx   # Root layout
│       └── page.tsx     # Home page
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🔧 API Routes

The Elysia API is mounted at `/api`. You can access:

- `GET /api` - API root
- OpenAPI documentation is available via the `@elysiajs/openapi` plugin

### Example API usage

```typescript
// src/api/index.ts
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello from Elysia!")
  .get("/hello/:name", ({ params: { name } }) => `Hello, ${name}!`);

export default app;
```

## � Testing

This project uses [Bun's built-in test runner](https://bun.sh/docs/cli/test) for fast, native testing.

### Running Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test:watch

# Run tests with coverage
bun test --coverage
```

### Writing Tests

Tests are co-located with source files using the `.test.ts` extension. Example:

```typescript
// src/api/index.test.ts
import { describe, expect, it } from "bun:test";
import app from "./index";

describe("Elysia API", () => {
  it("should return user data", async () => {
    const response = await app.handle(new Request("http://localhost/api/user"));

    expect(response.status).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty("name");
  });
});
```

## �🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/trickrenzgarcia/nextjs-elysia-bun-starter/issues).

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Elysia](https://elysiajs.com) - Ergonomic Framework for Humans
- [Bun](https://bun.sh) - Incredibly fast JavaScript runtime

---

Made with ❤️ by [trickrenzgarcia](https://github.com/trickrenzgarcia)
