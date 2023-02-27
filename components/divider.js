export default function Divider({
  vertical = false,
  strength = 1,
  color = 'lightgray',
}) {
  let className = 'mb-3 ';
  switch (strength) {
    case 1:
      className += vertical ? 'border-r-[1px]' : 'border-b-[1px]';
      break;
    case 2:
      className += vertical ? 'border-r-[2px]' : 'border-b-[2px]';
      break;
    default:
      className += vertical ? 'border-r-[1px]' : 'border-b-[1px]';
      break;
  }

  switch (color) {
    case 'gray':
      className += ' border-gray-500';
      break;
    case 'lightgray':
      className += ' border-gray-300';
      break;
    case 'red':
      className += ' border-red-800';
      break;
    default:
      className += ' border-red-800';
      break;
  }

  return <div className={className}></div>;
}
