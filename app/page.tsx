import Link from "next/link";
import {
  Code2,
  Shuffle,
  Clock,
  BarChart3,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f8f7] font-sans text-slate-800 dark:bg-[#12201b] dark:text-slate-200">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-[#f6f8f7]/80 backdrop-blur-sm dark:bg-[#12201b]/80">
          <div className="flex justify-center px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40">
            <div className="flex w-full max-w-screen-xl items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-4 py-3 sm:px-6 md:px-10 dark:border-slate-800">
              <div className="flex items-center gap-4 text-[#111318] dark:text-white">
                <div className="size-6 text-[#20a676]">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_319)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319">
                        <rect fill="white" height="48" width="48" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#111318] dark:text-white">
                  Line AI
                </h2>
              </div>
              <div className="hidden flex-1 justify-end gap-8 md:flex">
                <div className="flex items-center gap-9">
                  <Link
                    className="text-sm font-medium leading-normal text-[#111318] transition-colors hover:text-[#20a676] dark:text-slate-300 dark:hover:text-white"
                    href="#features"
                  >
                    Features
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-[#111318] transition-colors hover:text-[#20a676] dark:text-slate-300 dark:hover:text-white"
                    href="#use-cases"
                  >
                    Use Cases
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-[#111318] transition-colors hover:text-[#20a676] dark:text-slate-300 dark:hover:text-white"
                    href="#testimonials"
                  >
                    Testimonials
                  </Link>
                  <Link
                    className="text-sm font-medium leading-normal text-[#111318] transition-colors hover:text-[#20a676] dark:text-slate-300 dark:hover:text-white"
                    href="#pricing"
                  >
                    Pricing
                  </Link>
                </div>
                <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#20a676] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#20a676]/90">
                  <span className="truncate">Get Started</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 justify-center px-4 py-5 sm:px-8 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container flex w-full max-w-screen-xl flex-col">
            {/* Hero Section */}
            <div className="py-16 md:py-24">
              <div className="flex flex-col gap-10 px-4 text-center">
                <div className="mx-auto flex max-w-3xl flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111318] dark:text-white sm:text-5xl sm:leading-tight">
                      Create Custom AI Agents That Power Your Business
                    </h1>
                    <h2 className="text-base font-normal leading-normal text-[#616f89] dark:text-slate-400 sm:text-lg">
                      Automate tasks, improve customer service, and boost
                      efficiency with tailor-made AI agents designed for your
                      specific business needs.
                    </h2>
                  </div>
                  <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center self-center overflow-hidden rounded-lg bg-[#20a676] px-5 text-base font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-[#20a676]/90">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-16 md:py-24" id="features">
              <div className="flex flex-col gap-10 px-4">
                <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#111318] dark:text-white sm:text-4xl sm:font-black">
                    Everything you need to build powerful AI agents
                  </h1>
                  <p className="text-base font-normal leading-normal text-[#616f89] dark:text-slate-400">
                    Our platform provides a comprehensive suite of tools to
                    create, deploy, and manage AI agents that seamlessly
                    integrate into your workflow.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Feature 1 */}
                  <div className="flex flex-1 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#1A2C25]">
                    <Code2 className="h-8 w-8 text-[#20a676]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight text-[#111318] dark:text-white">
                        No-Code Customization
                      </h2>
                      <p className="text-sm font-normal leading-normal text-[#616f89] dark:text-slate-400">
                        Build and launch your AI agents without writing a single
                        line of code using our intuitive drag-and-drop
                        interface.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-1 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#1A2C25]">
                    <Shuffle className="h-8 w-8 text-[#20a676]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight text-[#111318] dark:text-white">
                        Seamless Integration
                      </h2>
                      <p className="text-sm font-normal leading-normal text-[#616f89] dark:text-slate-400">
                        Easily connect your AI agents with the tools you already
                        use, from CRMs to internal databases and APIs.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-1 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#1A2C25]">
                    <Clock className="h-8 w-8 text-[#20a676]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight text-[#111318] dark:text-white">
                        24/7 Autonomous Operation
                      </h2>
                      <p className="text-sm font-normal leading-normal text-[#616f89] dark:text-slate-400">
                        Deploy agents that work around the clock to handle
                        customer inquiries, manage tasks, and support your team.
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-1 flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#1A2C25]">
                    <BarChart3 className="h-8 w-8 text-[#20a676]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-bold leading-tight text-[#111318] dark:text-white">
                        Advanced Analytics
                      </h2>
                      <p className="text-sm font-normal leading-normal text-[#616f89] dark:text-slate-400">
                        Gain actionable insights into your agent's performance
                        and identify opportunities for optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex justify-center bg-white px-4 py-5 dark:bg-[#12201b] sm:px-8 md:px-10 lg:px-20 xl:px-40">
          <div className="layout-content-container w-full max-w-screen-xl border-t border-slate-200 pt-8 dark:border-slate-800">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
              <div className="flex items-center gap-4 text-[#111318] dark:text-white">
                <div className="size-5 text-[#20a676]">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_319_footer)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319_footer">
                        <rect fill="white" height="48" width="48" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-base font-bold leading-tight text-[#111318] dark:text-white">
                  Line AI
                </h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © 2024 Line AI. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  className="text-slate-500 transition-colors hover:text-[#20a676] dark:text-slate-400 dark:hover:text-[#20a676]"
                  href="#"
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  className="text-slate-500 transition-colors hover:text-[#20a676] dark:text-slate-400 dark:hover:text-[#20a676]"
                  href="#"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link
                  className="text-slate-500 transition-colors hover:text-[#20a676] dark:text-slate-400 dark:hover:text-[#20a676]"
                  href="#"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
