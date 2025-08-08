
const googleAdsImages = [
  "https://i.ibb.co.com/NzbT6wp/Google-Ads-1-01.png",
  "https://i.ibb.co.com/hGK7TRh/Google-Ads-2-01.png",
  "https://i.ibb.co.com/PZHpRhJD/Google-Ads-3-01.png"
];

const GoogleAds = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {googleAdsImages.map((url, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={url}
              alt={`Google Ads ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleAds;
