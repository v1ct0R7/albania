import { useMemo, useState } from 'react';
import { itineraries } from '@/data/itineraries';
import { Button } from '@/components/ui/Button';
import { SectionTitle } from '@/components/ui/SectionTitle';

const styleOptions = ['Beach', 'Culture', 'Nature', 'Adventure', 'Family', 'Budget'];
const dayOptions = [3, 5, 7, 10, 14];

export const ItineraryPlanner = () => {
  const [days, setDays] = useState(7);
  const [style, setStyle] = useState('Nature');

  const selectedPlan = useMemo(
    () => itineraries.find((item) => item.travelStyle === style) ?? itineraries[0],
    [style]
  );

  const dailyItems = selectedPlan.dailyPlan.slice(0, Math.min(days, selectedPlan.dailyPlan.length));

  return (
    <div className="space-y-10 px-6 py-10 lg:px-8">
      <section className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Trip planner</p>
            <h1 className="text-4xl font-semibold text-charcoal-900 sm:text-5xl">Build an Albania itinerary that fits your pace.</h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-600">
              Select how many days you have and the travel style you want. This planner gives you a ready-made route and daily ideas for each trip length.
            </p>
          </div>
          <div className="rounded-[32px] bg-sand-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Travel style</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">From relaxed beach escapes to active mountain adventures, choose the route that matches your trip goals.</p>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Choose days</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {dayOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setDays(option)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    days === option ? 'bg-red-700 text-white' : 'bg-sand-50 text-charcoal-900 hover:bg-slate-100'
                  }`}
                >
                  {option} days
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Travel style</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {styleOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setStyle(option)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    style === option ? 'bg-red-700 text-white' : 'bg-sand-50 text-charcoal-900 hover:bg-slate-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-red-700">Suggested itinerary</p>
              <h2 className="mt-3 text-3xl font-semibold text-charcoal-900">{selectedPlan.title}</h2>
            </div>
            <span className="rounded-full bg-sand-50 px-4 py-2 text-sm font-semibold text-charcoal-900">{days} days</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">{selectedPlan.description}</p>
          <div className="mt-6 space-y-4">
            {dailyItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-sand-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-charcoal-900">{item.title}</h3>
                  <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">{item.focus}</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-700">
                  <span className="rounded-full bg-white px-3 py-2 shadow-sm">Meal: {item.meal}</span>
                  <span className="rounded-full bg-white px-3 py-2 shadow-sm">Stay: {item.stay}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-slate-200 bg-sand-50 p-6">
            <h3 className="text-lg font-semibold text-charcoal-900">How to use this plan</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">This itinerary is a starting point. Extend stays in coastal towns, add mountain hikes, or swap days based on weather and your travel pace.</p>
            <div className="mt-6">
              <Button variant="secondary">Customize your route</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
