export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-center">
      <div className="fade-in max-w-xl">
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Paulo Sugaro
        </h1>

        <p className="mt-3 text-base text-text-secondary sm:text-lg">
          Software Developer — Bali, Indonesia
        </p>

        <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
          Building software that adapts to how businesses actually work, not
          the other way around.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
          Membangun software yang disesuaikan dengan cara kerja bisnis, bukan
          sebaliknya.
        </p>

        <p className="mt-10 text-sm text-accent sm:text-base">
          hello@paulosugaro.com
        </p>
      </div>
    </main>
  );
}
