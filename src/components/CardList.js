const CardList = ({ data, gradientStart, gradientEnd }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((_, i) => {
          return (
            <Card
              key={i}
              gradientEnd={gradientEnd}
              gradientStart={gradientStart}
              title={data[i].title}
              description={data[i].description}
              tools={data[i].tools}
              liveUrl={data[i].liveUrl}
              sourceCodeUrl={data[i].sourceCodeUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardList;

const Card = ({
  gradientStart,
  gradientEnd,
  title,
  description,
  tools,
  liveUrl,
  sourceCodeUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?cs=srgb&dl=pexels-pixabay-326058.jpg&fm=jpg"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-around my-[20px]">
          <a
            href="#about"
            className={`text-lg text-transparent bg-clip-text bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] font-semibold`}
          >
            See Live
          </a>
          <a
            href="#about"
            className={`text-lg text-transparent bg-clip-text bg-gradient-to-r from-[${gradientStart}] to-[${gradientEnd}] font-semibold`}
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tools?.map((_, i) => {
          return (
            <span
              key={i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tools[i]}
            </span>
          );
        })}
      </div>
    </div>
  );
};
