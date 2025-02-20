import Image from 'next/image';
import { MdLocalPhone, MdMail } from 'react-icons/md';

export default function MemberCard({ member }) {
  return (
    <div className="w-full rounded-md overflow-hidden shadow-md h-full dark:bg-gray-700">
      <div className="w-full sm:max-w-[150px] sm:rounded-full sm:mt-3 mx-auto overflow-hidden aspect-square relative">
        <Image
          src={member.imageUrl}
          alt={member.name}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-2 text-sm">
        <h6 className="text-center text-base font-extralight text-red-800 dark:text-white">
          {member.name}
          <br />
          {member.academia}
        </h6>
        <h6 className="text-center text-base font-bold">{member.job}</h6>
        <a href={`tel:${member.phone}`} className="truncate">
          <MdLocalPhone className="inline text-lg mr-2 text-red-800" />
          {member.phone}
        </a>
        <a href={`mailto:${member.mail}`} className="truncate">
          <MdMail className="inline text-lg mr-2 text-red-800" />
          {member.mail}
        </a>
      </div>
    </div>
  );
}
