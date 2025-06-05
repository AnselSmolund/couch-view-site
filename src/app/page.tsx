import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white px-4 py-8 md:px-16 lg:px-32 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-bold tracking-tight mb-4 text-white">COUCH VIEW</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
          Cycling from the couch. Commentary, chaos, and culture.
        </p>
        <div className="mt-8">
          <Button size="lg" className="rounded-full px-8 py-4 text-lg bg-white text-black hover:bg-neutral-200 transition">Watch Latest Edit</Button>
        </div>
      </header>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wide text-neutral-300">🎞️ Recent Edits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="bg-neutral-800 border border-neutral-700 rounded-xl">
              <CardContent className="p-4">
                <div className="aspect-video bg-neutral-700 mb-4 rounded-lg" />
                <h3 className="text-xl font-semibold mb-1 text-white">Stage {n} Recap</h3>
                <p className="text-sm text-neutral-400 font-light">A lo-fi breakdown of the chaos, straight from the couch.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wide text-neutral-300">🧠 Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-neutral-800 border border-neutral-700 rounded-xl">
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-2 text-white">Power Rankings: Riders Who Looked the Most Over It</h3>
              <p className="text-sm text-neutral-400 font-light mb-2">Post-Giro edition, featuring side-eyes, bonks, and bar tape breakdowns.</p>
              <Button variant="outline" className="text-sm rounded-full px-4 py-2 border-white text-white hover:bg-white hover:text-black transition">Read More</Button>
            </CardContent>
          </Card>

          <Card className="bg-neutral-800 border border-neutral-700 rounded-xl">
            <CardContent className="p-4">
              <h3 className="text-2xl font-semibold mb-2 text-white">Who Actually Deserved the Win?</h3>
              <p className="text-sm text-neutral-400 font-light mb-2">A vibes-based ranking of recent finishes, with no science whatsoever.</p>
              <Button variant="outline" className="text-sm rounded-full px-4 py-2 border-white text-white hover:bg-white hover:text-black transition">Read More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wide text-neutral-300">🛒 Merch Coming Soon</h2>
        <div className="bg-neutral-800 p-6 rounded-2xl text-center border border-neutral-700">
          <p className="mb-4 text-neutral-400 font-light">Sign up to be the first to know when Couch Kits, stickers, and zines drop.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input placeholder="Enter your email" className="bg-neutral-900 border-neutral-700 text-white px-4 py-2 rounded-full" />
            <Button className="rounded-full px-6 py-2 bg-white text-black hover:bg-neutral-200 transition">Notify Me</Button>
          </div>
        </div>
      </section>

      <footer className="text-center text-neutral-600 text-sm mt-12">
        <p>&copy; {new Date().getFullYear()} Couch View.cc — All rights reserved.</p>
      </footer>
    </div>
  );
}
