import Image from "next/image";
import icon from "../assets/icons/favicon.png";
import user from "../assets/icons/user.png";
export default function Navbar() {
  return (
    <section className='flex justify-between items-center p-3 shadow-sm '>
      <div className='flex items-center'>
        <Image src={icon} alt='' width={45} height={45} className='' />
        <p className='text-xl font-semibold text-primary tracking-wider'>
          Influencer
        </p>
      </div>
      <div>
        <Image src={user} alt='user' width={37} height={37} className='' />
      </div>
    </section>
  );
}