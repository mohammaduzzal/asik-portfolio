
const imageUrls = [
  "https://i.ibb.co.com/0Rwf5YTJ/1.png",
  "https://i.ibb.co.com/wN5Hkg7W/2.png",
  "https://i.ibb.co.com/qYVWN9bD/3.png",
  "https://i.ibb.co.com/Fk24C2Y3/4.png",
  "https://i.ibb.co.com/1fBJ8fVc/5.png",
  "https://i.ibb.co.com/R5Gx4GY/6.png",
  "https://i.ibb.co.com/kgb5RCzk/7.png",
  "https://i.ibb.co.com/jCY8BQV/8.png",
  "https://i.ibb.co.com/7dqyB2Nw/9.png",
  "https://i.ibb.co.com/XrwYwpkb/10.png",
  "https://i.ibb.co.com/S7Z8LT8Y/11.png",
  "https://i.ibb.co.com/d4GprMKq/12.png",
  "https://i.ibb.co.com/xK1WR4Kd/13.png",
  "https://i.ibb.co.com/B5ZWcrL2/14.png",
  "https://i.ibb.co.com/M5NGvRz3/15.png",
  "https://i.ibb.co.com/gFBWSVz6/16.png",
  "https://i.ibb.co.com/dwZbfHSB/17.png",
  "https://i.ibb.co.com/FqWqZtsF/18.png",
  "https://i.ibb.co.com/TxxXSdpz/19.png",
  "https://i.ibb.co.com/KxwpwMmF/20.png",
  "https://i.ibb.co.com/v0G5NCc/21.png",
  "https://i.ibb.co.com/ZzhLvhs1/22.png",
  "https://i.ibb.co.com/GfKFNvnF/23.png",
  "https://i.ibb.co.com/tF113fv/24.png",
  "https://i.ibb.co.com/tMbHpzP5/25.png",
  "https://i.ibb.co.com/0dJfqLX/26.png",
  "https://i.ibb.co.com/39vfL9DR/27.png",
  "https://i.ibb.co.com/TqP9DYpn/28.png",
  "https://i.ibb.co.com/r2Mrh8Xx/29.png",
  "https://i.ibb.co.com/v6rHb2P0/30.png",
  "https://i.ibb.co.com/yn9r0fbp/31.png",
  "https://i.ibb.co.com/yBfgqzmL/32.png"
 
];

const YouTube = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {imageUrls.map((url, idx) => (
          <div
            key={idx}
            className="w-full overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={url}
              alt={`YouTube Image ${idx + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTube;
