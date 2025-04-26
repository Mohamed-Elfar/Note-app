export default function CardsAbout({ name, title, src }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <img
        src={src}
        alt="Team Member"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold text-[#2C3338] mb-1">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-gray-600 text-sm">Frontend Developer With React js</p>
    </div>
  );
}