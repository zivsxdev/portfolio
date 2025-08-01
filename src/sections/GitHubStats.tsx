"use client";

import GitHubCalendar from "react-github-calendar";

export default function GitHubStats() {
  return (
    <section className="py-14 md:py-32 lg:py-40 scroll-mt-32">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl mb-12 text-gray-800">
          GitHub Contributions
        </h2>
        <div className="overflow-x-auto  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-500 rounded-md">
          <div className="inline-block min-w-max m-10 px-2">
            <GitHubCalendar
              username="zivsxdev"
              colorScheme="light"
              blockSize={14}
              blockMargin={5}
              fontSize={18}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
