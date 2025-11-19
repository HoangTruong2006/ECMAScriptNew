import Button from './Button'

export default function TourCard(props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
      <h2 className="text-xl sm:text-2xl font-bold text-orange-500 p-2">{props.title}</h2>
      <div className="flex justify-around my-2 gap-2 px-2">
        <Button label="Xem chi tiết" />
        <Button label="Đặt tour" />
      </div>
    </div>
  )
}
