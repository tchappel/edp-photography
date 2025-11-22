import { HeroGallery } from "@/components/hero-gallery";

export default function Home() {
  return (
    <div>
      <HeroGallery />

      {/* Mock Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gray-200 rounded-lg hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Image {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock About Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Emanuel</h2>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-lg text-gray-600">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      {/* Mock Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in working together? Let&apos;s talk.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}
