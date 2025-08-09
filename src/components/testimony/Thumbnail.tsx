const thumbnailImages = [
  "https://i.ibb.co.com/yFLNYGW5/1.png",
  "https://i.ibb.co.com/jZk6W18b/2.png",
  "https://i.ibb.co.com/VYkmp66s/3.png",
  "https://i.ibb.co.com/d0zWnzz0/4.png",
  "https://i.ibb.co.com/nqSzxG4V/5.png",
  "https://i.ibb.co.com/m5LnFxkM/6.png",
  "https://i.ibb.co.com/5XSfBQmv/7.png",
  "https://i.ibb.co.com/Hph4bbDn/8.png",
  "https://i.ibb.co.com/pBdtmFkZ/9.png",
  "https://i.ibb.co.com/twXBFB96/10.png",
  "https://i.ibb.co.com/p6cvZVXz/11.png",
  "https://i.ibb.co.com/3ywCGZF3/12.png",
  "https://i.ibb.co.com/F4Sb19rK/13.png",
  "https://i.ibb.co.com/23dV1VSr/14.png",
  "https://i.ibb.co.com/ksrTt2HX/15.png",
  "https://i.ibb.co.com/hJYqQBvg/16.png",
  "https://i.ibb.co.com/gbmXpCPL/17.png",
  "https://i.ibb.co.com/8D5XVdtQ/18.png",
  "https://i.ibb.co.com/C5KDzZ9v/19.png",
  "https://i.ibb.co.com/FqNDBgG8/20.png",
  "https://i.ibb.co.com/WW10ngST/21.png",
  "https://i.ibb.co.com/SGMGDSF/22.png",
  "https://i.ibb.co.com/ccqKDY2J/23.png",
  "https://i.ibb.co.com/WpqtVLxj/Dhaka-Thailand.png"
];

const Thumbnail = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2  md:grid-cols-3 gap-4">
        {thumbnailImages.map((url, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md bg-white"
          >
            <img
              src={url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
