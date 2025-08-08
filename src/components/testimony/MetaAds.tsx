
const metaAdsImages = [
  "https://i.ibb.co.com/RpTwW6cb/Facebook-Ads-1-01.png",
  "https://i.ibb.co.com/wFcH6fQr/Facebook-Ads-2-01.png",
  "https://i.ibb.co.com/MydQSf9P/Facebook-Ads-3-01.png"
];

const MetaAds = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {metaAdsImages.map((url, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={url}
              alt={`Meta Ads ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetaAds;
