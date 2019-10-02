import './logo.scss';
import Link from 'next/link';

const Logo = ({ url, dark }) => {
  const tirangle = (<svg width="200" height="200" version="1.1" viewBox="0 0 52.917 52.917" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0 -244.08)">
   <ellipse cx="26.548" cy="250.43" r="3.2741" fill={dark ? "#8bb940" : "#fff"}/>
   <ellipse cx="46.306" cy="289.77" r="3.2741" fill={dark ? "#8bb940" : "#fff"}/>
   <path transform="matrix(.62733 0 0 .72498 9.012 74.897)" d="m59.521 296.7h-31.551-31.551l31.551-54.648 15.776 27.324z" fill="none" stroke={ dark ? "#8bb940" : "#fff" } strokeWidth="2"/>
   <circle cx="46.306" cy="289.77" r="3.2741" fill={dark ? "#8bb940" : "#fff"}/>
   <circle cx="7.2335" cy="289.77" r="3.2741" fill={dark ? "#8bb940" : "#fff"}/>
   <path d="m25.542 276.71c0.25134 0.37102-0.37613 0.52185-0.61667 0.41774-0.65184-0.28213-0.59357-1.1753-0.21882-1.6511 0.67035-0.85098 1.9605-0.71767 2.6855-0.0199 1.0639 1.024 0.84772 2.7571-0.17903 3.7199-1.3685 1.2832-3.558 0.98044-4.7543-0.37795-1.5055-1.7094-1.1146-4.3608 0.57688-5.7887 2.0486-1.7294 5.1648-1.2495 6.8231 0.7758 1.9543 2.3868 1.385 5.9694-0.97472 7.8575-2.7244 2.1798-6.7746 1.5208-8.8919-1.1736-2.4058-3.0616-1.6568-7.5801 1.3726-9.9264 3.3985-2.6321 8.3859-1.7931 10.961 1.5715 2.8586 3.7353 1.9294 9.1918-1.7704 11.995" fill="none" stroke={ dark ? "#8bb940" : "#fff" } strokeWidth=".79375"/>
   <circle cx="26.541" cy="250.72" r="3.2741" fill={dark ? "#8bb940" : "#fff"}/>
  </g>
 </svg>);

  return(
    <Link href={url}>
      <a className="logo_main_cont">
        {tirangle}
        <p style={ dark ? { color: '#8bb940' } : { color: '#fff' } }>greenlink</p>
      </a>
    </Link>
  );
}

export default Logo;
