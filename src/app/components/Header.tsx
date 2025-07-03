// app/components/Header.tsx
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start gap-10 p-10">
      {/* Profile Image */}
      <Image
        src="/images/profile.png" // Place your image in /public/images/
        alt="Sara Lawrence"
        width={96}
        height={96}
        className="rounded-full object-cover aspect-square"
      />

      {/* Name and Info */}
      <div className="text-right sm:text-right">
        <h1 className="text-2xl font-semibold text-gray-900">Sara Lawrence</h1>
        <p className="text-sm text-gray-600">Design in San Francisco</p>
        <a
          href="https://website.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1 px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
        >
          website.com
        </a>
      </div>
    </header>
  );
}
