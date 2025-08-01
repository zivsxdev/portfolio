'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <section className="my-12 text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-stone-900">
        GitHub Contributions
      </h2>
      <div className="overflow-x-auto">
        <GitHubCalendar username="zivsxtrading" />
      </div>
    </section>
  );
}
