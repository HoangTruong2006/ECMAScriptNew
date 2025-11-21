import Button from './Button'

export default function TourCard(props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
          {props.title}
        </h2>

        {/* Giá tour */}
        <p className="text-red-500 font-bold text-lg mt-1">
          {props.price?.toLocaleString()}₫
        </p>

        <div className="flex justify-around my-3 gap-2">
          <Button label="Xem chi tiết" />
          <Button label="Đặt tour" />
        </div>
      </div>
    </div>
  );
}
